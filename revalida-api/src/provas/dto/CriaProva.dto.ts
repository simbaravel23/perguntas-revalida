import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString, IsNumber,Min } from 'class-validator';

export class CriaProvaDTO {
  @IsString()
  @IsNotEmpty({ message: 'Tema do produto não pode ser vazio' })
  tema: string;

  @IsString()
  @IsNotEmpty({ message: 'Tema do produto não pode ser vazio' })
  titulo: string;

  @IsString()
  @IsNotEmpty({ message: 'Autor do produto não pode ser vazio' })
  autor: string;

  @IsString()
  @IsNotEmpty({ message: 'Caminho do arquivo não pode ser vazio' })
  caminho_arquivo: string;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @IsOptional()  @IsNotEmpty({ message: 'A data de criação não pode ser vazia' })
  data_criacao: number;
}