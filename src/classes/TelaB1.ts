import { Digito, Sinal, Tela } from "../calculadora";

export default class TelaB1 implements Tela {
  constructor() {}

  mostre(digito: Digito): void {
    console.log(digito);

    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML += digito;
  }

  mostreSeparadorDecimal(): void {
    console.log(".");

    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML += ".";
  }

  mostreSinal(sinal: Sinal): void {}

  mostreErro(): void {}

  limpe(): void {
    // console.clear();

    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML = "";
  }
}
