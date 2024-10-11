import { Controle, Cpu, Digito, Operação, Tela } from "../calculadora";

export default class CpuB1 implements Cpu {
  private tela!: Tela;
  listaDigitos: Digito[];
  valor1: number | null;
  operacao: Operação | null;

  constructor(tela: Tela) {
    this.definaTela(tela);
    this.listaDigitos = [0];
    this.valor1 = null;
    this.operacao = null;
  }

  recebaDigito(digito: Digito) {
    // retira o "0" se for o primeiro digito;
    // armazena o digito;
    // exibe os digitos na tela.

    if (this.listaDigitos.length === 1 && this.listaDigitos[0] === 0) {
      this.listaDigitos.pop();
    }

    this.listaDigitos.push(digito);
    this.tela.limpe();
    this.listaDigitos.forEach((digitoAtual) => this.tela.mostre(digitoAtual));
  }

  recebaOperacao(operacao: Operação) {
    this.valor1 = this.transformaLista();
    this.operacao = operacao;
    this.listaDigitos = [];
    console.log(this.transformaOperacao());
  }

  recebaControle(controle: Controle) {
    switch (controle) {
      case Controle.ATIVAÇÃO_LIMPEZA_ERRO: {
        this.tratarAtivacaoLimpezaErro();
        break;
      }
      case Controle.IGUAL: {
        const resultado = this.calculaResultado();
        this.tela.limpe();
        for (let n of resultado.toString()) this.tela.mostre(Number(n));
        break;
      }
    }
  }

  private transformaLista() {
    const valor = this.listaDigitos.join("");
    return Number(valor);
  }

  private transformaOperacao() {
    switch (this.operacao) {
      case Operação.SOMA:
        return "+";
      case Operação.SUBTRAÇÃO:
        return "-";
      case Operação.MULTIPLICAÇÃO:
        return "*";
      case Operação.DIVISÃO:
        return "/";
      case Operação.RAIZ_QUADRADA:
        return "raiz";
      case Operação.PERCENTUAL:
        return "percentual";
    }
  }

  private calculaResultado(): Number {
    return eval(`${this.valor1} ${this.transformaOperacao()} ${this.transformaLista()}`);
  }

  private tratarAtivacaoLimpezaErro() {
    this.tela.limpe();
  }

  reinicie(): void {
    this.tela.limpe();
    this.tela.mostre(Digito.ZERO);
  }

  definaTela(tela: Tela): void {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return this.tela;
  }
}
