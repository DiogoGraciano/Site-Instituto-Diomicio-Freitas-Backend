import { IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsString({ message: 'O título deve ser uma string válida' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @MaxLength(150, { message: 'O título deve ter no máximo 150 caracteres' })
  title: string;

  @IsString({ message: 'A descrição deve ser uma string válida' })
  @IsNotEmpty({ message: 'A descrição é obrigatória' })
  @MinLength(20, { message: 'A descrição deve ter pelo menos 20 caracteres' })
  @MaxLength(500, { message: 'A descrição deve ter no máximo 500 caracteres' })
  description: string;
}