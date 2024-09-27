import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { ICpu } from "../@types/ICpu";
import { Operação } from "../@types/Operacao";
import Teclado from "./Teclado";
import Tela from "./Tela";

export default class Cpu implements ICpu {
  tela: Tela;

  constructor(tela: Tela) {
    this.tela = tela;
  }

  recebaDigito(digito: Digito) {
    this.tela.mostre(digito);
  }

  recebaOperacao(operacao: Operação) {}

  recebaControle(controle: Controle) {}

  reinicie() {}
}
