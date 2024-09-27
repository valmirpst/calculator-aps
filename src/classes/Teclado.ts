import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { ITeclado } from "../@types/ITeclado";
import { Operação } from "../@types/Operacao";
import Cpu from "./Cpu";
import Tela from "./Tela";

export default class Teclado implements ITeclado {
  cpu: Cpu;
  teclado: HTMLElement;

  constructor(teclado: HTMLElement) {
    this.teclado = teclado;
    this.cpu = new Cpu();
    this.events();
  }

  events() {
    this.teclado.addEventListener("click", (e) => {
      console.log(e.target);
    });
  }

  digiteDigito(digito: Digito) {
    this.cpu.recebeDigito(digito);
  }

  digiteOperacao(operação: Operação) {
    this.cpu.recebeOperacao(operação);
  }

  digiteControle(controle: Controle) {
    this.cpu.recebeControle(controle);
  }
}
