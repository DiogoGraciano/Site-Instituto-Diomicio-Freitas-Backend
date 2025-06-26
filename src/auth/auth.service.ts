import { Injectable, UnauthorizedException, ConflictException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from './entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './strategies/jwt.strategy';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<{ user: User; access_token: string }> {
    const { email, name, password } = registerDto;

    const existingUser = await this.userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new ConflictException('Email já está em uso');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = this.userRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    const payload: JwtPayload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);

    delete user.password;

    return { user, access_token };
  }

  async login(loginDto: LoginDto): Promise<{ user: User; access_token: string }> {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({ 
      where: { email, isActive: true } 
    });

    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload: JwtPayload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);

    delete user.password;

    return { user, access_token };
  }

  async validateUser(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id, isActive: true },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário não encontrado');
    }

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find({
      where: { isActive: true },
      select: ['id', 'email', 'name', 'isActive', 'createdAt', 'updatedAt'],
      order: { createdAt: 'DESC' }
    });

    return users;
  }

  async remove(id: string): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({
      where: { id, isActive: true }
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    user.isActive = false;
    await this.userRepository.save(user);

    return { message: 'Usuário excluído com sucesso' };
  }

  async update(id: string, updateDto: UpdateDto): Promise<{ user: User; access_token: string }> {
    const { email, name, password } = updateDto;

    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (email && email !== user.email) {
      const existingUser = await this.userRepository.findOne({ where: { email } });
      if (existingUser) {
        throw new ConflictException('Email já está em uso');
      }
      user.email = email;
    }
    if (name && name !== user.name) {
      user.name = name;
    }
    if (password) {
      user.password = password;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      user.password = hashedPassword;
    }

    await this.userRepository.save(user);

    const payload: JwtPayload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);

    return { user, access_token };
  }
} 