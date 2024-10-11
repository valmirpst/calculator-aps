import { Digito, Tela } from "../calculadora";

export default class TelaB1 implements Tela {
  constructor() {}

  mostre(digito: Digito) {
    console.log(digito);

    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML += digito;
  }

  limpe() {
    // console.clear();

    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) telaProvisoria.innerHTML = "";
  }
}
