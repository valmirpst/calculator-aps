import { Controle, Cpu, Digito, Operação, Sinal, Tela } from "../calculadora";
import NumeroB1 from "./NumeroB1";

export default class CpuB1 implements Cpu {
  private tela!: Tela;
  valor1: number | null;
  operacao: Operação | null;
  numero: NumeroB1;
  memoria: number;
  limparMemoria: boolean;

  constructor() {
    this.valor1 = null;
    this.operacao = null;
    this.numero = new NumeroB1();
    this.memoria = 0;
    this.limparMemoria = false;
  }

  recebaDigito(digito: Digito) {
    if (
      (this.numero.digitos.length === 1 &&
        this.numero.digitos[0] === 0 &&
        !this.numero.posiçãoSeparadorDecimal) ||
      this.numero.digitos.length === 0
    ) {
      this.numero.limpe();
      this.tela.limpe();
    }

    if (this.valor1 && this.numero.digitos.length === 0) this.tela.limpe();
    this.numero.digitos.push(digito);
    this.tela.mostre(digito);
    this.limparMemoria = false;
  }

  recebaOperacao(operacao: Operação) {
    this.limparMemoria = false;
    // this.piscarDisplay();

    switch (operacao) {
      case Operação.RAIZ_QUADRADA: {
        let res = -1;
        if (this.numero.paraNumero()) {
          res = this.numero.paraNumero() ** 0.5;
          this.numero.limpe();
          this.tela.limpe();

          this.tratarResultado(res.toString());
        } else if (this.valor1 !== null) {
          res = this.valor1 ** 0.5;
          this.valor1 = res;
          this.tela.limpe();

          res
            .toString()
            .split("")
            .forEach((value) => {
              this.tratarSinal(res.toString());
              if (value === "-") this.numero.sinal = Sinal.NEGATIVO;
              if (value === ".") {
                this.tela.mostreSeparadorDecimal();
              }
              if (Number(value) || value === "0") {
                this.tela.mostre(Number(value));
              }
            });
        }
        break;
      }

      case Operação.PERCENTUAL: {
        if (this.operacao === null || this.valor1 === null) {
          this.reinicie();
          return;
        }
        let res: number | null = null;
        switch (this.operacao) {
          case Operação.SOMA:
            res = this.valor1 + this.valor1 * (this.numero.paraNumero() / 100);
            break;
          case Operação.SUBTRAÇÃO:
            res = this.valor1 - this.valor1 * (this.numero.paraNumero() / 100);
            break;
          case Operação.DIVISÃO:
            res = this.valor1 / (this.numero.paraNumero() / 100);
            break;
          case Operação.MULTIPLICAÇÃO:
            res = this.valor1 * (this.numero.paraNumero() / 100);
            break;
        }
        this.tela.limpe();
        this.valor1 = null;
        this.numero.limpe();

        if (res) this.tratarResultado(res.toString());
        break;
      }

      default: {
        if (!this.valor1) {
          this.valor1 = this.numero.paraNumero();
          this.numero.limpe();
        } else if (this.operacao !== null && this.numero.paraNumero() !== 0) {
          this.recebaControle(Controle.IGUAL);
        }

        this.operacao = operacao;
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
        if (this.operacao === null) return;
        if (this.valor1 === null || !this.numero.digitos.length) return;

        // this.piscarDisplay();
        const res = this.calculaResultado();
        this.valor1 = res;
        this.numero.limpe();
        this.tela.limpe();
        this.operacao = null;

        res
          .toString()
          .split("")
          .forEach((value, i) => {
            this.tratarSinal(res.toString());
            if (value === "-") this.numero.sinal = Sinal.NEGATIVO;
            if (value === ".") this.tela.mostreSeparadorDecimal();
            if (Number(value) || value === "0") this.tela.mostre(Number(value));
          });

        break;
      }

      case Controle.SEPARADOR_DECIMAL: {
        if (this.numero.posiçãoSeparadorDecimal === null) {
          this.numero.posiçãoSeparadorDecimal = this.numero.digitos.length;
          this.tela.mostreSeparadorDecimal();
        }
        break;
      }

      case Controle.DESATIVAÇÃO: {
        break;
      }

      case Controle.MEMÓRIA_SOMA: {
        if (this.numero.paraNumero() !== 0) {
          if (this.valor1 !== null && this.operacao !== null && this.numero.paraNumero()) {
            const res = this.calculaResultado();
            this.memoria += res;
            this.valor1 = res;

            this.tela.limpe();
            res
              .toString()
              .split("")
              .forEach((value, i) => {
                this.tratarSinal(res.toString());
                if (value === "-") this.numero.sinal = Sinal.NEGATIVO;
                if (value === ".") this.tela.mostreSeparadorDecimal();
                if (Number(value) || value === "0") this.tela.mostre(Number(value));
              });
          } else {
            this.memoria += this.numero.paraNumero();
            this.valor1 = this.numero.paraNumero();
          }

          this.numero.limpe();
        } else if (this.valor1 !== null) {
          this.memoria += this.valor1;
        }

        if (this.memoria !== 0) this.tela.mostreMemoria();
        break;
      }

      case Controle.MEMÓRIA_SUBTRAÇÃO: {
        if (this.numero.paraNumero() !== 0) {
          if (this.valor1 !== null && this.operacao !== null && this.numero.paraNumero()) {
            const res = this.calculaResultado();
            this.memoria -= res;
            this.valor1 = res;

            this.tela.limpe();
            res
              .toString()
              .split("")
              .forEach((value, i) => {
                this.tratarSinal(res.toString());
                if (value === "-") this.numero.sinal = Sinal.NEGATIVO;
                if (value === ".") this.tela.mostreSeparadorDecimal();
                if (Number(value) || value === "0") this.tela.mostre(Number(value));
              });
          } else {
            this.memoria -= this.numero.paraNumero();
            this.valor1 = this.numero.paraNumero();
          }

          this.numero.limpe();
        } else if (this.valor1 !== null) {
          this.memoria -= this.valor1;
        }

        if (this.memoria !== 0) this.tela.mostreMemoria();
        break;
      }

      case Controle.MEMÓRIA_LEITURA_LIMPEZA: {
        if (this.limparMemoria) {
          this.memoria = 0;
          this.limparMemoria = false;
          const memoriaProvisoria = document.getElementById("info_memoria");
          if (memoriaProvisoria) memoriaProvisoria.innerHTML = "";
          return;
        }

        if (this.memoria === 0) return;

        this.limparMemoria = true;
        this.numero.limpe();
        this.tela.limpe();

        this.memoria
          .toString()
          .split("")
          .forEach((value, i) => {
            this.tratarSinal(this.memoria.toString());
            if (value === "-") this.numero.sinal = Sinal.NEGATIVO;
            if (value === ".") {
              this.tela.mostreSeparadorDecimal();
              this.numero.posiçãoSeparadorDecimal = i;
            }
            if (Number(value) || value === "0") {
              this.tela.mostre(Number(value));
              this.numero.digitos.push(Number(value));
            }
          });
        break;
      }
    }
  }

  private calculaResultado(): number {
    try {
      if (this.transformaOperacao() === "/" && this.numero.paraNumero() === 0) throw new Error();
      const resultado = eval(
        `${this.valor1} ${this.transformaOperacao()} ${this.numero.paraNumero()}`
      );
      return resultado;
    } catch (error) {
      this.tela.mostreErro();
      return 0;
    }
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
    // this.piscarDisplay();
    this.tela.limpe();
    this.tela.mostre(0);
    this.numero.limpe();
    this.valor1 = null;
    this.operacao = null;
    const error = document.getElementById("error");
    if (error) error.innerHTML = "";
  }

  definaTela(tela: Tela): void {
    this.tela = tela;
  }

  obtenhaTela(): Tela {
    return this.tela;
  }

  private tratarSinal(res: string) {
    if (res.toString().includes("-")) {
      this.tela.mostreSinal(Sinal.NEGATIVO);
    } else {
      this.tela.mostreSinal(Sinal.POSITIVO);
    }
  }

  // private piscarDisplay() {
  //   const telaProvisoria = document.getElementById("tela");
  //   if (telaProvisoria) {
  //     telaProvisoria.style.opacity = "0";
  //     setTimeout(() => {
  //       telaProvisoria.style.opacity = "1";
  //     }, 100);
  //   }
  // }

  private tratarResultado(res: string) {
    res.split("").forEach((value, i) => {
      this.tratarSinal(res.toString());
      if (value === "-") this.numero.sinal = Sinal.NEGATIVO;
      if (value === ".") {
        this.tela.mostreSeparadorDecimal();
        this.numero.posiçãoSeparadorDecimal = i;
      }
      if (Number(value) || value === "0") {
        this.tela.mostre(Number(value));
        this.numero.digitos.push(Number(value));
      }
    });
  }
}
