import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { randomUUID } from 'crypto';

import { AtualizaProvaDTO } from './dto/atualizaProva.dto';
import { CriaProvaDTO } from './dto/CriaProva.dto';
import { ProvaEntity } from './provas.entity';
import { ProvaRepository } from './provas.repository';

@Controller('provas')
export class ProvaController {
  constructor(private readonly provaRepository: ProvaRepository) {}

  @Post()
  async criaNovo(@Body() dadosProva: CriaProvaDTO) {
    const prova = new ProvaEntity();

    prova.id = randomUUID();
    prova.titulo = dadosProva.titulo;
    prova.tema = dadosProva.tema;
    prova.autor = dadosProva.autor;
    prova.caminho_arquivo = dadosProva.caminho_arquivo;
    prova.data_criacao = dadosProva.data_criacao;
    
    const provaCadastrado = this.provaRepository.salva(prova);
    return provaCadastrado;
  }

  @Get()
  async listaTodos() {
    return this.provaRepository.listaTodos();
  }

  @Put('/:id')
  async atualiza(
    @Param('id') id: string,
    @Body() dadosProva: AtualizaProvaDTO,
  ) {
    const provaAlterado = await this.provaRepository.atualiza(
      id,
      dadosProva,
    );

    return {
      mensagem: 'prova atualizada com sucesso',
      prova: provaAlterado,
    };
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const provaRemovido = await this.provaRepository.remove(id);

    return {
      mensagem: 'prova removida com sucesso',
      prova: provaRemovido,
    };
  }
}
