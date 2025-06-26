import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';
import { RegisterDto } from './register.dto';

export class UpdateDto extends PartialType(RegisterDto) {
  @IsEmail({}, { message: 'Por favor, insira um endereço de email válido' })
  @IsNotEmpty({ message: 'O email é obrigatório' })
  @MaxLength(100, { message: 'O email deve ter no máximo 100 caracteres' })
  email: string;

  @IsString({ message: 'O nome deve ser uma string válida' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  @MaxLength(50, { message: 'O nome deve ter no máximo 50 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O nome deve conter apenas letras e espaços' })
  name: string;
} 