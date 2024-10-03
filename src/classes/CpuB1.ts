import { Controle, Cpu, Digito, Operação, Tela } from "../calculadora";

export default class CpuB1 implements Cpu {
  tela!: Tela;

  constructor(tela: Tela) {
    this.definaTela(tela);
  }

  recebaDigito(digito: Digito) {
    this.tela.mostre(digito);
  }

  recebaOperacao(operacao: Operação) {}

  recebaControle(controle: Controle) {}

  reinicie(): void {
    this.tela.limpe();
    this.tela.mostre(Digito.ZERO);
  }

  definaTela(tela: Tela): void {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return this.tela;
  }
}
