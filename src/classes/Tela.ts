import { Digito } from "../@types/Digito";
import { ITela } from "../@types/ITela";

type TelaType = {
  tela: HTMLElement;
  campoInformacao: HTMLElement;
};

export default class Tela implements ITela {
  tela: TelaType["tela"];
  campoInformacao: TelaType["campoInformacao"];

  constructor(tela: TelaType["tela"], campoInformacao: TelaType['campoInformacao']) {
    this.tela = tela;
    this.campoInformacao = campoInformacao;
  }

  mostre(digito: Digito) {
    if (this.tela) this.tela.innerText += digito;
    else window.alert("Tela não encontrada (Tela.ts)");
  }

  limpe() {
    if (this.tela) this.tela.innerText = "";
    else window.alert("Tela não encontrada (Tela.ts)");
  }
}
