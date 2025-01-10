import { IsNotEmpty, IsString, IsNumber, Min, IsOptional } from 'class-validator';

export class AtualizaProvaDTO {
  @IsString()
  @IsNotEmpty({ message: 'O tema não pode ser vazio' })
  tema: string;

  @IsString()
  @IsNotEmpty({ message: 'O autor não pode ser vazio' })
  autor: string;

  @IsString()
  @IsNotEmpty({ message: 'O caminho do arquivo não pode ser vazio' })
  caminho_arquivo: string;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @IsOptional()  @IsNotEmpty({ message: 'A data de criação não pode ser vazia' })
  data_criacao: number;
}