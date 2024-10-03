import { Controle, Cpu, Digito, Operação, Tela } from "../calculadora";
import TelaB1 from "./TelaB1";

export default class CpuB1 implements Cpu {
  tela: Tela;

  constructor(tela: Tela) {
    this.tela = tela;
  }

  recebaDigito(digito: Digito) {
    this.tela.mostre(digito);
  }

  recebaOperacao(operacao: Operação) {}

  recebaControle(controle: Controle) {}

  reinicie() {}

  definaTela(tela: Tela): void {}

  obtenhaTela(): Tela {
    return new TelaB1();
  }
}
