import { Controle, Cpu, Digito, Operação, Tela } from "../calculadora";
import NumeroB1 from "./NumeroB1";

export default class CpuB1 implements Cpu {
  private tela!: Tela;
  valor1: number | null;
  operacao: Operação | null;
  numero: NumeroB1;
  // listaDigitos: Digito[];
  // posicaoDecimal: number | null;

  constructor(tela: Tela) {
    this.definaTela(tela);
    this.valor1 = null;
    this.operacao = null;
    this.numero = new NumeroB1();
    // this.listaDigitos = [0];
    // this.posicaoDecimal = null;
  }

  recebaDigito(digito: Digito) {
    // retira o "0" se for o primeiro digito;
    // armazena o digito;
    // exibe os digitos na tela.

    if (
      this.numero.digitos.length === 1 &&
      this.numero.digitos[0] === 0 &&
      !this.numero.posiçãoSeparadorDecimal
    ) {
      this.numero.digitos.pop();
      this.tela.limpe();
    }

    if (this.valor1 && this.numero.digitos.length === 0) this.tela.limpe();
    this.numero.digitos.push(digito);
    this.tela.mostre(digito);
    // this.tela.limpe();
    // this.numero.digitos.forEach((digitoAtual, index) => {
    //   if (index === this.numero.posiçãoSeparadorDecimal) this.tela.mostreSeparadorDecimal();
    //   this.tela.mostre(digitoAtual);
    // });
  }

  recebaOperacao(operacao: Operação) {
    if ((this.numero.digitos.length && this.operacao) || this.valor1) {
      this.recebaControle(Controle.IGUAL);
    } else this.valor1 = this.numero.paraNumero();

    this.operacao = operacao;
    this.numero.limpe();
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
        console.log("resultado:", resultado);

        this.tela.limpe();
        for (let n of resultado.toString()) {
          if (n === ".") this.tela.mostreSeparadorDecimal();
          else this.tela.mostre(Number(n));
        }
        this.valor1 = resultado;
        this.numero.limpe();
        break;
      }

      case Controle.SEPARADOR_DECIMAL: {
        if (!this.numero.posiçãoSeparadorDecimal) {
          this.numero.posiçãoSeparadorDecimal = this.numero.digitos.length;
          this.tela.mostreSeparadorDecimal();
        }
      }
    }
  }

  // private transformaLista() {
  //   const valor = this.numero.digitos.join("");
  //   if (this.numero.posiçãoSeparadorDecimal) {
  //     const decimais = this.numero.digitos.length - this.numero.posiçãoSeparadorDecimal; // [1234] Ponto decimal no 2, conta é o tamanho da lista - menos a posição do ponto decimal, logo o número é o numero da lista é divido por 10 ^^ número de casas decimais
  //     return Number(valor) / 10 ** decimais;
  //   }
  //   return Number(valor);
  // }

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

  private calculaResultado(): number {
    return eval(`${this.valor1} ${this.transformaOperacao()} ${this.numero.paraNumero()}`);
  }

  private tratarAtivacaoLimpezaErro() {}

  reinicie(): void {
    this.numero.limpe();
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
