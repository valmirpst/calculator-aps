import { Digito, Sinal, Tela } from "../calculadora";

export default class TelaB1 implements Tela {
  private tela: HTMLElement | null;
  private campoSinal: HTMLElement | null;
  private infoMemoria: HTMLElement | null;

  constructor() {
    this.tela = document.getElementById("tela");
    this.campoSinal = document.getElementById("sinal");
    this.infoMemoria = document.getElementById("info_memoria");
  }

  mostre(digito: Digito): void {
    if (this.tela) {
      this.tela.innerHTML += digito;
      this.tela.innerHTML = this.tela.innerHTML.slice(0, 14);
    }
  }

  mostreSeparadorDecimal(): void {
    if (this.tela) this.tela.innerHTML += ".";
  }

  mostreSinal(sinal: Sinal): void {
    if (this.campoSinal)
      switch (sinal) {
        case Sinal.NEGATIVO:
          this.campoSinal.style.opacity = "1";
          break;
        case Sinal.POSITIVO:
          this.campoSinal.style.opacity = "0";
          break;
      }
  }

  mostreErro(): void {}

  mostreMemoria(): void {
    if (this.infoMemoria) this.infoMemoria.innerHTML = "M";
  }

  limpe(): void {
    if (this.tela) this.tela.innerHTML = "";
  }
}
