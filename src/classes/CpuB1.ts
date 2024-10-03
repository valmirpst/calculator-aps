
import { Controle, Cpu, Digito, Operação, Tela } from "../calculadora"; 
import TelaB1 from "./TelaB1";

export default class CpuB1 implements Cpu {
  tela!: Tela;

  constructor(tela: Tela) {
    this.tela = tela;
  }

  recebaDigito(digito: Digito) {
    this.tela.mostre(digito);
  }

  recebaOperacao(operacao: Operação) {
    throw new Error("Method not implemented");
  }

  recebaControle(controle: Controle) {
    throw new Error("Method not implemented");
  }

  reinicie(): void {
    this.tela.limpe();
    this.tela.mostre(Digito.ZERO)
  }

  definaTela(tela: Tela): void {
    this.tela = tela
  }

  obtenhaTela(): TelaB1 {
    throw new Error("Method not implemented");
  }
}
