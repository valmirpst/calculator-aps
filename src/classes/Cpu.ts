import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { Operacao } from "../@types/Operacao";
import Tela from "./Tela";

export default class Cpu {
  tela: Tela;

  constructor() {
    this.tela = new Tela();
  }

  receberDigito(digito: Digito) {
    this.tela.mostrarDigito(digito);
  }

  receberOperacao(operacao: Operacao) {}

  receberControle(controle: Controle) {}

  reiniciar() {}
}
