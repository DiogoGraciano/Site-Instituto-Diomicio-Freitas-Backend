import { IsString, IsNotEmpty, IsArray, ValidateNested, MinLength, MaxLength, Matches } from 'class-validator';
import { Type } from 'class-transformer';

class MilestoneDto {
  @IsString({ message: 'O ano deve ser uma string válida' })
  @IsNotEmpty({ message: 'O ano é obrigatório' })
  @Matches(/^\d{4}$/, { message: 'O ano deve ter 4 dígitos (ex: 2024)' })
  year: string;

  @IsString({ message: 'O evento deve ser uma string válida' })
  @IsNotEmpty({ message: 'O evento é obrigatório' })
  @MinLength(10, { message: 'O evento deve ter pelo menos 10 caracteres' })
  @MaxLength(200, { message: 'O evento deve ter no máximo 200 caracteres' })
  event: string;
}

export class CreateHistoryDto {
  @IsString({ message: 'O título deve ser uma string válida' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @MaxLength(150, { message: 'O título deve ter no máximo 150 caracteres' })
  title: string;

  @IsString({ message: 'O ano de fundação deve ser uma string válida' })
  @IsNotEmpty({ message: 'O ano de fundação é obrigatório' })
  @Matches(/^\d{4}$/, { message: 'O ano de fundação deve ter 4 dígitos (ex: 1990)' })
  foundationYear: string;

  @IsArray({ message: 'O conteúdo deve ser um array' })
  @IsString({ each: true, message: 'Cada item do conteúdo deve ser uma string válida' })
  @MinLength(20, { each: true, message: 'Cada item do conteúdo deve ter pelo menos 20 caracteres' })
  @MaxLength(1000, { each: true, message: 'Cada item do conteúdo deve ter no máximo 1000 caracteres' })
  content: string[];

  @IsArray({ message: 'Os marcos devem ser um array' })
  @ValidateNested({ each: true, message: 'Cada marco deve ser válido' })
  @Type(() => MilestoneDto)
  milestones: MilestoneDto[];
} 