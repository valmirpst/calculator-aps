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
    // limpa a tela se for o primeiro
    // armazena o digito
    // exibe a tela

    if (this.listaDigitos.length === 1 && this.listaDigitos[0] === 0) {
      this.tela.limpe();
      this.listaDigitos.pop();
    }

    if (this.operacao && this.valor1 && this.listaDigitos.length === 0) {
      this.tela.limpe();
    }

    this.listaDigitos.push(digito);
    this.listaDigitos.forEach((digitoAtual) => {
      this.tela.mostre(digitoAtual);
    });
  }

  recebaOperacao(operacao: Operação) {
    let valor = "";
    this.listaDigitos.forEach((v) => {
      valor += v.toString();
    });
    this.valor1 = Number(valor);

    this.operacao = operacao;
    this.listaDigitos = [];
  }

  recebaControle(controle: Controle) {
    if (controle === Controle.ATIVAÇÃO_LIMPEZA_ERRO) {
      this.tratarAtivacaoLimpezaErro();
      this.tela.limpe();
      this.tela.mostre(Digito.ZERO);
    } else if (controle === Controle.IGUAL) {
      const resultado = this.calculeResultado();
      this.tela.limpe();

      // resultado.forEach( digito => {
      //   this.tela.mostre(digito);
      // });
    }
  }
  private calculeResultado() {}
  private tratarAtivacaoLimpezaErro() {
    this.tela.limpe();
    // nn sei a lógica ainda já implemento
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
