import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateActivityDto {
  @IsString({ message: 'O título deve ser uma string válida' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @MaxLength(150, { message: 'O título deve ter no máximo 150 caracteres' })
  title: string;
} 