import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDto } from './create-activity.dto';
import { IsString, IsUrl, IsDate, Length, IsArray, IsOptional, MinLength, MaxLength, Matches } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsUrl({}, { message: 'A URL da imagem deve ser válida' })
  @IsOptional()
  imageUrl?: string;

  @IsString({ message: 'O autor deve ser uma string válida' })
  @IsOptional()
  @MinLength(2, { message: 'O nome do autor deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'O nome do autor deve ter no máximo 100 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O nome do autor deve conter apenas letras e espaços' })
  writer?: string;

  @IsUrl({}, { message: 'A URL da foto do autor deve ser válida' })
  @IsOptional()
  writerPhotoUrl?: string;

  @IsString({ message: 'O cargo do autor deve ser uma string válida' })
  @IsOptional()
  @MinLength(2, { message: 'O cargo do autor deve ter pelo menos 2 caracteres' })
  @MaxLength(50, { message: 'O cargo do autor deve ter no máximo 50 caracteres' })
  writerRole?: string;

  @IsDate({ message: 'A data deve ser uma data válida' })
  @IsOptional()
  @Type(() => Date)
  date?: Date;

  @IsString({ message: 'O tempo de leitura deve ser uma string válida' })
  @IsOptional()
  @Matches(/^\d+\s*(min|minuto|minutos)$/i, { 
    message: 'O tempo de leitura deve estar no formato "X min" ou "X minuto(s)"' 
  })
  readingTime?: string;

  @IsString({ message: 'O título deve ser uma string válida' })
  @IsOptional()
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @MaxLength(150, { message: 'O título deve ter no máximo 150 caracteres' })
  title?: string;

  @IsString({ message: 'O resumo deve ser uma string válida' })
  @Length(1, 100, { message: 'O resumo deve ter entre 1 e 100 caracteres' })
  @IsOptional()
  summary?: string;

  @IsString({ message: 'O texto deve ser uma string válida' })
  @Length(1, 1500, { message: 'O texto deve ter entre 1 e 1500 caracteres' })
  @IsOptional()
  text?: string;

  @IsArray({ message: 'As tags devem ser um array' })
  @IsString({ each: true, message: 'Cada tag deve ser uma string válida' })
  @IsOptional()
  tags?: string[];
}