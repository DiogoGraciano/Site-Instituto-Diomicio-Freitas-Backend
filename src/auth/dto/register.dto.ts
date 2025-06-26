import { IsEmail, IsNotEmpty, IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class RegisterDto {
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

  @IsString({ message: 'A senha deve ser uma string válida' })
  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  @MaxLength(30, { message: 'A senha deve ter no máximo 30 caracteres' })
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, { 
    message: 'A senha deve conter pelo menos: 1 letra minúscula, 1 maiúscula, 1 número e 1 caractere especial (@$!%*?&)' 
  })
  password: string;
} 