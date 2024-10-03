import { Calculadora, Tela, Cpu, Teclado } from "../calculadora";
import CpuB1 from "./CpuB1";
import TecladoB1 from "./TecladoB1";
import TelaB1 from "./TelaB1";




export default class CalculadoraB1 implements Calculadora {
  tela: Tela;
  cpu: Cpu;
  teclado: Teclado;

  constructor(tela: Tela, cpu: Cpu, teclado: Teclado) {
    this.tela = tela;
    this.cpu = cpu;
    this.teclado = teclado;
  }

  definaTela(tela: Tela) {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return new TelaB1()
  }
  
  definaCpu(cpu: Cpu) {
    this.cpu = cpu;
  }

  obtenhaCpu(): Cpu {
    return new CpuB1(this.tela);
  }

  definaTeclado(teclado: Teclado) {
    this.teclado = teclado;
  }

  obtenhaTeclado(): Teclado {
    return new TecladoB1()
  }
}
