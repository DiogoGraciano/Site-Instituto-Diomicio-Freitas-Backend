import { IsString, IsNotEmpty, IsOptional, Length, Matches } from 'class-validator';

export class CreatePartnerDto {
  @IsString({ message: 'O nome deve ser uma string válida' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ0-9\s&.-]+$/, { message: 'O nome deve conter apenas letras, números, espaços e caracteres especiais permitidos (&.-)'})
  name: string;
}

export class UpdatePartnerDto {
  @IsString({ message: 'O nome deve ser uma string válida' })
  @IsOptional()
  @Length(3, 100, { message: 'O nome deve ter entre 3 e 100 caracteres' })
  @Matches(/^[a-zA-ZÀ-ÿ0-9\s&.-]+$/, { message: 'O nome deve conter apenas letras, números, espaços e caracteres especiais permitidos (&.-)'})
  name?: string;
} 