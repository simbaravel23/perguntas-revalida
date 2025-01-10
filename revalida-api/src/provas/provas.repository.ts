import { Injectable } from '@nestjs/common';
import { ProvaEntity } from './provas.entity';

@Injectable()
export class ProvaRepository {
  private provas: ProvaEntity[] = [];

  listaTodos() {
    return this.provas;
  }

  salva(dadosProvas: ProvaEntity) {
    this.provas.push(dadosProvas);
    return dadosProvas;
  }

  private buscaPorId(id: string) {
    const possivelProva = this.provas.find((prova) => prova.id === id);

    if (!possivelProva) {
      throw new Error('Prova não existe');
    }

    return possivelProva;
  }

  async atualiza(id: string, dadosProva: Partial<ProvaEntity>) {
    const dadosNaoAtualizaveis = ['id', 'usuarioId'];
    const prova = this.buscaPorId(id);
    Object.entries(dadosProva).forEach(([chave, valor]) => {
      if (dadosNaoAtualizaveis.includes(chave)) {
        return;
      }
      prova[chave] = valor;
    });

    return prova;
  }

  async remove(id: string) {
    const provaRemovido = this.buscaPorId(id);
    this.provas = this.provas.filter((prova) => prova.id !== id);
    return provaRemovido;
  }
}
