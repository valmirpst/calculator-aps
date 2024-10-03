import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { ITeclado } from "../@types/ITeclado";
import { Operação } from "../@types/Operacao";
import Cpu from "./CpuB1";

export default class TecladoB1 implements Teclado {
  cpu: Cpu;

  constructor(cpu: Cpu) {
    this.cpu = cpu;
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
}
