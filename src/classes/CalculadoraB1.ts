import { Calculadora, Teclado, Cpu, Tela } from "../calculadora";

import CpuB1 from "./CpuB1";

export default class CalculadoraB1 implements Calculadora {
  tela: Tela;
  cpu: Cpu;
  teclado: Teclado;

  constructor(tela: Tela, cpu: Cpu, teclado: Teclado) {
    this.tela = tela;
    this.cpu = cpu;
    this.teclado = teclado;
  }

  definaTela(tela: Tela) {
    this.tela = tela;
  }


  defineTeclado(teclado: Teclado) {
    this.teclado = teclado;
  }

  definaCpu(cpu: Cpu) {
    this.cpu = cpu;
  }

  obtenhaCpu(): Cpu {
    return new CpuB1(this.tela)
  }
}
