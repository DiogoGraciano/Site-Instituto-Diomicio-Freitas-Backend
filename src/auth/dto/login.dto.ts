import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class LoginDto {
  @IsEmail({}, { message: 'Por favor, insira um endereço de email válido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @MaxLength(100, { message: 'O email deve ter no máximo 100 caracteres' })
  email: string;

  @IsString({ message: 'A senha deve ser uma string válida' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @MaxLength(30, { message: 'A senha deve ter no máximo 30 caracteres' })
  password: string;
} 