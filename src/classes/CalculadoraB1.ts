import { Calculadora, Cpu, Teclado, Tela } from "../calculadora";

export default class CalculadoraB1 implements Calculadora {
  tela!: Tela;
  cpu!: Cpu;
  teclado!: Teclado;

  constructor(tela: Tela, cpu: Cpu, teclado: Teclado) {
    this.definaTela(tela);
    this.definaCpu(cpu);
    this.definaTeclado(teclado);
  }

  definaTela(tela: Tela) {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return this.tela;
  }

  definaCpu(cpu: Cpu) {
    this.cpu = cpu;
  }

  obtenhaCpu(): Cpu {
    return this.cpu;
  }

  definaTeclado(teclado: Teclado) {
    this.teclado = teclado;
  }

  obtenhaTeclado(): Teclado {
    return this.teclado;
  }
}
