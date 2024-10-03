import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { ITeclado } from "../@types/ITeclado";
import { Operação } from "../@types/Operacao";
import Cpu from "./CpuB1";

export default class Teclado implements ITeclado {
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
