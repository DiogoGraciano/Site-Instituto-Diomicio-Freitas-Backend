import { IsString, IsNotEmpty, MinLength, MaxLength, Matches, IsEmail, IsOptional } from 'class-validator';

export class CreateContactDto {
  @IsString({ message: 'O nome deve ser uma string válida' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @MinLength(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'O nome deve ter no máximo 100 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O nome deve conter apenas letras e espaços' })
  name: string;

  @IsString({ message: 'O telefone deve ser uma string válida' })
  @IsNotEmpty({ message: 'O telefone é obrigatório' })
  @Matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, { 
    message: 'O telefone deve estar no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX' 
  })
  phone: string;

  @IsEmail({}, { message: 'Por favor, insira um endereço de email válido' })
  @IsOptional()
  @MaxLength(100, { message: 'O email deve ter no máximo 100 caracteres' })
  email?: string;

  @IsString({ message: 'O assunto deve ser uma string válida' })
  @IsNotEmpty({ message: 'O assunto é obrigatório' })
  @MinLength(5, { message: 'O assunto deve ter pelo menos 5 caracteres' })
  @MaxLength(150, { message: 'O assunto deve ter no máximo 150 caracteres' })
  subject: string;

  @IsString({ message: 'A mensagem deve ser uma string válida' })
  @IsNotEmpty({ message: 'A mensagem é obrigatória' })
  @MinLength(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
  @MaxLength(1000, { message: 'A mensagem deve ter no máximo 1000 caracteres' })
  message: string;
} 