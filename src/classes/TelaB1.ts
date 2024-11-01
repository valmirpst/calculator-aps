import { Digito, Sinal, Tela } from "../calculadora";

export default class TelaB1 implements Tela {
  constructor() {}

  mostre(digito: Digito): void {
    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) {
      telaProvisoria.innerHTML += digito;
      telaProvisoria.innerHTML = telaProvisoria.innerHTML.slice(0, 14);
    }
  }

  mostreSeparadorDecimal(): void {
    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML += ".";
  }

  mostreSinal(sinal: Sinal): void {
    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML += "-";
  }

  mostreErro(): void {}

  mostreMemoria(): void {
    const memoryElement = document.getElementById("info_memoria");
    if (memoryElement) memoryElement.innerHTML = "M";
  }

  limpe(): void {
    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML = "";
  }
}
