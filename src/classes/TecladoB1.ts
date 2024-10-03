import { Controle, Cpu, Digito, Operação, Teclado } from "../calculadora";

export default class TecladoB1 implements Teclado {
  cpu!: Cpu;

  constructor(cpu: Cpu) {
    this.definaCpu(cpu);
  }

  digiteDigito(digito: Digito) {
    this.cpu.recebaDigito(digito);
  }

  digiteOperacao(operação: Operação) {
    this.cpu.recebaOperacao(operação);
  }

  digiteControle(controle: Controle) {
    this.cpu.recebaControle(controle);
  }

  definaCpu(cpu: Cpu): void {
    this.cpu = cpu;
  }

  obtenhaCpu(): Cpu {
    return this.cpu;
  }
}
