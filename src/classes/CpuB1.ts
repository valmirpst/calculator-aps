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
    this.valor1 = this.transformaLista();
    this.operacao = operacao;
    this.listaDigitos = [];
  }

  recebaControle(controle: Controle) {
    switch (controle){
      case Controle.ATIVAÇÃO_LIMPEZA_ERRO:{
        this.tratarAtivacaoLimpezaErro();
        this.tela.limpe();
        this.tela.mostre(Digito.ZERO);
        break
      }
      case Controle.IGUAL:{
        const resultado = this.calculeResultado();
        this.tela.limpe()
        for(let n of resultado.toString()){
          this.tela.mostre(Number(n))
        }
        break
      }
    }
  }
  private transformaLista(){
    const valor = this.listaDigitos.join("")
    return Number(valor);
  }

  private transformaOperacao(){
    let operacaoTransformada = "";
    switch (this.operacao){
      case Operação.SOMA:{
        operacaoTransformada = "+";
        break
      }
      case Operação.SUBTRAÇÃO:{
        operacaoTransformada = "-";
        break
      }
      case Operação.MULTIPLICAÇÃO:{
        operacaoTransformada = "*";
        break
      }
      case Operação.DIVISÃO:{
        operacaoTransformada = "/";
        break
      }
      case Operação.RAIZ_QUADRADA:{
        operacaoTransformada = "raiz";
        break
      }
      case Operação.PERCENTUAL:{
        operacaoTransformada = "percentual";
        break
      }
    }
    return operacaoTransformada
  }
  private calculeResultado():Number {
    return eval(`${this.valor1} ${this.transformaOperacao()} ${this.transformaLista()}`)
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
