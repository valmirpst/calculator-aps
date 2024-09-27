import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { ICpu } from "../@types/ICpu";
import { Operação } from "../@types/Operacao";
import Teclado from "./Teclado";
import Tela from "./Tela";

export default class Cpu implements ICpu {
  tela: Tela;
  teclado: Teclado;

  constructor(tela: Tela, teclado: Teclado) {
    this.tela = tela;
    this.teclado = teclado;
    this.teclado.events();
  }

  recebaDigito(digito: Digito) {
    this.tela.mostre(digito);
  }

  recebaOperacao(operacao: Operação) {}

  recebaControle(controle: Controle) {}

  reinicie() {}
}
