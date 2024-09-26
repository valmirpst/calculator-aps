import { Digito } from "../@types/Digito";

type TelaType = {
  tela: HTMLElement;
  campoInformacao: HTMLElement;
};

export default class Tela {
  tela: TelaType["tela"] | null;
  campoInformacao: TelaType["campoInformacao"] | null;

  constructor() {
    const tela = document.getElementById("");
    const campoInformacao = document.getElementById("");

    this.tela = tela;
    this.campoInformacao = campoInformacao;
  }

  mostrarDigito(digito: Digito) {
    if (this.tela) this.tela.innerText += digito;
    else window.alert("Tela não encontrada (Tela.ts)");
  }

  limpar() {
    if (this.tela) this.tela.innerText = "";
    else window.alert("Tela não encontrada (Tela.ts)");
  }
}
