import Cpu from "./Cpu";
import Teclado from "./Teclado";
import Tela from "./Tela";

export default class Calculadora {
  tela: Tela;
  teclado: Teclado;

  constructor() {
    this.tela = this.defineTela();
    this.teclado = this.defineTeclado();
    this.defineCpu();
  }

  defineTela() {
    const tela = document.getElementById("tela") as HTMLElement;
    const campoInformacao = document.getElementById("campoInformacao") as HTMLElement;

    return new Tela(tela, campoInformacao);
  }

  defineTeclado() {
    const teclado = document.getElementById("teclado") as HTMLElement;

    return new Teclado(teclado);
  }

  defineCpu() {
    return new Cpu(this.tela, this.teclado);
  }
}
