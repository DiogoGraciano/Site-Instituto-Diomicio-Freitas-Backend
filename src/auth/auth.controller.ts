import { Body, Controller, Post, Get, UseGuards, HttpCode, HttpStatus, Delete, Param, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Public } from './decorators/public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('users/:id')
  async update(@Param('id') id: string, @Body() registerDto: RegisterDto) {
    return this.authService.update(id, registerDto);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@CurrentUser() user: User) {
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isActive: user.isActive,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  async findAll() {
    const users = await this.authService.findAll();
    return { users };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('users/:id')
  async remove(@Param('id') id: string) {
    return this.authService.remove(id);
  }
} 