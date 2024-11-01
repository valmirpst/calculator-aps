import { Controle, Cpu, Digito, Operação, Sinal, Tela } from "../calculadora";
import NumeroB1 from "./NumeroB1";

export default class CpuB1 implements Cpu {
  private tela!: Tela;
  valor1: number | null;
  operacao: Operação | null;
  numero: NumeroB1;

  constructor(tela: Tela) {
    this.definaTela(tela);
    this.valor1 = null;
    this.operacao = null;
    this.numero = new NumeroB1();
  }

  recebaDigito(digito: Digito) {
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
  }

  recebaOperacao(operacao: Operação) {
    this.piscarDisplay();

    switch (operacao) {
      case Operação.RAIZ_QUADRADA: {
        break;
      }

      case Operação.PERCENTUAL: {
        break;
      }

      default: {
        if (this.valor1 && this.operacao !== null && this.numero.paraNumero() !== 0) {
          this.recebaControle(Controle.IGUAL);
        } else {
          this.operacao = operacao;
          this.valor1 = this.numero.paraNumero();
          this.numero.limpe();
          console.log(this.transformaOperacao());
        }
      }
    }
  }

  recebaControle(controle: Controle) {
    switch (controle) {
      case Controle.ATIVAÇÃO_LIMPEZA_ERRO: {
        this.reinicie();
        break;
      }

      case Controle.IGUAL: {
        const resultado = this.calculaResultado();
        this.piscarDisplay();

        this.tela.limpe();
        if (resultado < 0) this.tela.mostreSinal(Sinal.NEGATIVO);
        for (let n of resultado.toString()) {
          if (n === ".") this.tela.mostreSeparadorDecimal();
          else if (!Number(n) && n !== "0") console.log("a");
          else this.tela.mostre(Number(n));
        }
        this.valor1 = resultado;
        this.operacao = null;
        this.numero.limpe();
        break;
      }

      case Controle.SEPARADOR_DECIMAL: {
        if (
          this.valor1 &&
          this.numero.digitos.length === 1 &&
          this.numero.digitos[0] === 0 &&
          this.operacao !== null
        ) {
          this.tela.limpe();
          this.tela.mostre(Digito.ZERO);
        }
        if (!this.numero.posiçãoSeparadorDecimal) {
          this.numero.posiçãoSeparadorDecimal = this.numero.digitos.length;
          this.tela.mostreSeparadorDecimal();
        }
        break;
      }

      case Controle.DESATIVAÇÃO: {
        break;
      }

      case Controle.MEMÓRIA_SOMA: {
        break;
      }

      case Controle.MEMÓRIA_SUBTRAÇÃO: {
        break;
      }

      case Controle.MEMÓRIA_LEITURA_LIMPEZA: {
        break;
      }
    }
  }

  private calculaResultado(): number {
    console.log(`${this.valor1} ${this.transformaOperacao()} ${this.numero.paraNumero()}`);
    return eval(`${this.valor1} ${this.transformaOperacao()} ${this.numero.paraNumero()}`);
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
    }
  }

  reinicie(): void {
    this.piscarDisplay();
    this.tela.limpe();
    this.tela.mostre(0);
    this.numero.limpe();
    this.valor1 = null;
    this.operacao = null;
  }

  definaTela(tela: Tela): void {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return this.tela;
  }

  private piscarDisplay() {
    const telaProvisoria = document.getElementById("tela");
    if (telaProvisoria) {
      telaProvisoria.style.opacity = "0";
      setTimeout(() => {
        telaProvisoria.style.opacity = "1";
      }, 100);
    }
  }
}
