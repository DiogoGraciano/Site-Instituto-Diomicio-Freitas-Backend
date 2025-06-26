import { IsString, IsOptional, IsArray, IsNotEmpty, MinLength, MaxLength, Matches, IsUrl } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'O título deve ser uma string válida' })
  @IsNotEmpty({ message: 'O título é obrigatório' })
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @MaxLength(200, { message: 'O título deve ter no máximo 200 caracteres' })
  title: string;

  @IsString({ message: 'O slug deve ser uma string válida' })
  @IsNotEmpty({ message: 'O slug é obrigatório' })
  @MinLength(3, { message: 'O slug deve ter pelo menos 3 caracteres' })
  @MaxLength(150, { message: 'O slug deve ter no máximo 150 caracteres' })
  @Matches(/^[a-z0-9-]+$/, { message: 'O slug deve conter apenas letras minúsculas, números e hífens' })
  slug: string;

  @IsString({ message: 'O resumo deve ser uma string válida' })
  @IsNotEmpty({ message: 'O resumo é obrigatório' })
  @MinLength(10, { message: 'O resumo deve ter pelo menos 10 caracteres' })
  @MaxLength(300, { message: 'O resumo deve ter no máximo 300 caracteres' })
  excerpt: string;

  @IsString({ message: 'O conteúdo deve ser uma string válida' })
  @IsNotEmpty({ message: 'O conteúdo é obrigatório' })
  @MinLength(50, { message: 'O conteúdo deve ter pelo menos 50 caracteres' })
  @MaxLength(10000, { message: 'O conteúdo deve ter no máximo 10000 caracteres' })
  content: string;

  @IsString({ message: 'O autor deve ser uma string válida' })
  @IsNotEmpty({ message: 'O autor é obrigatório' })
  @MinLength(2, { message: 'O nome do autor deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'O nome do autor deve ter no máximo 100 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O nome do autor deve conter apenas letras e espaços' })
  author: string;

  @IsString({ message: 'A imagem do autor deve ser uma string válida' })
  @IsOptional()
  @IsUrl({}, { message: 'A imagem do autor deve ser uma URL válida' })
  authorImage?: string;

  @IsString({ message: 'A categoria deve ser uma string válida' })
  @IsNotEmpty({ message: 'A categoria é obrigatória' })
  @MinLength(3, { message: 'A categoria deve ter pelo menos 3 caracteres' })
  @MaxLength(50, { message: 'A categoria deve ter no máximo 50 caracteres' })
  category: string;

  @IsArray({ message: 'As tags devem ser um array' })
  @IsString({ each: true, message: 'Cada tag deve ser uma string válida' })
  @MinLength(2, { each: true, message: 'Cada tag deve ter pelo menos 2 caracteres' })
  @MaxLength(20, { each: true, message: 'Cada tag deve ter no máximo 20 caracteres' })
  tags: string[];
}

export class UpdatePostDto {
  @IsString({ message: 'O título deve ser uma string válida' })
  @IsOptional()
  @MinLength(5, { message: 'O título deve ter pelo menos 5 caracteres' })
  @MaxLength(200, { message: 'O título deve ter no máximo 200 caracteres' })
  title?: string;

  @IsString({ message: 'O slug deve ser uma string válida' })
  @IsOptional()
  @MinLength(3, { message: 'O slug deve ter pelo menos 3 caracteres' })
  @MaxLength(150, { message: 'O slug deve ter no máximo 150 caracteres' })
  @Matches(/^[a-z0-9-]+$/, { message: 'O slug deve conter apenas letras minúsculas, números e hífens' })
  slug?: string;

  @IsString({ message: 'O resumo deve ser uma string válida' })
  @IsOptional()
  @MinLength(10, { message: 'O resumo deve ter pelo menos 10 caracteres' })
  @MaxLength(300, { message: 'O resumo deve ter no máximo 300 caracteres' })
  excerpt?: string;

  @IsString({ message: 'O conteúdo deve ser uma string válida' })
  @IsOptional()
  @MinLength(50, { message: 'O conteúdo deve ter pelo menos 50 caracteres' })
  @MaxLength(10000, { message: 'O conteúdo deve ter no máximo 10000 caracteres' })
  content?: string;

  @IsString({ message: 'O autor deve ser uma string válida' })
  @IsOptional()
  @MinLength(2, { message: 'O nome do autor deve ter pelo menos 2 caracteres' })
  @MaxLength(100, { message: 'O nome do autor deve ter no máximo 100 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O nome do autor deve conter apenas letras e espaços' })
  author?: string;

  @IsString({ message: 'A imagem do autor deve ser uma string válida' })
  @IsOptional()
  @IsUrl({}, { message: 'A imagem do autor deve ser uma URL válida' })
  authorImage?: string;

  @IsString({ message: 'A categoria deve ser uma string válida' })
  @IsOptional()
  @MinLength(3, { message: 'A categoria deve ter pelo menos 3 caracteres' })
  @MaxLength(50, { message: 'A categoria deve ter no máximo 50 caracteres' })
  category?: string;

  @IsArray({ message: 'As tags devem ser um array' })
  @IsString({ each: true, message: 'Cada tag deve ser uma string válida' })
  @IsOptional()
  @MinLength(2, { each: true, message: 'Cada tag deve ter pelo menos 2 caracteres' })
  @MaxLength(20, { each: true, message: 'Cada tag deve ter no máximo 20 caracteres' })
  tags?: string[];
}