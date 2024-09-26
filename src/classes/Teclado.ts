import { Controle } from "../@types/Controle";
import { Digito } from "../@types/Digito";
import { Operacao } from "../@types/Operacao";
import Cpu from "./Cpu";

export default class Teclado {
  cpu: Cpu;

  constructor() {
    this.cpu = new Cpu();
  }

  digitarDigito(digito: Digito) {
    this.cpu.receberDigito(digito);
  }

  digitarOperacao(operacao: Operacao) {
    this.cpu.receberOperacao(operacao);
  }

  digitarControle(controle: Controle) {
    this.cpu.receberControle(controle);
  }
}
