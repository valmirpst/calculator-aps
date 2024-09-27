import { ICalculadora } from "../@types/ICalculadora";
import Cpu from "./Cpu";
import Teclado from "./Teclado";
import Tela from "./Tela";

export default class Calculadora implements ICalculadora {
  tela: Tela;
  cpu: Cpu;
  teclado: Teclado;

  constructor(tela: Tela, cpu: Cpu, teclado: Teclado) {
    this.tela = tela;
    this.cpu = cpu;
    this.teclado = teclado;
  }

  defineTela(tela: Tela) {
    this.tela = tela;
  }

  defineTeclado(teclado: Teclado) {
    this.teclado = teclado;
  }

  defineCpu(cpu: Cpu) {
    this.cpu = cpu;
  }
}
