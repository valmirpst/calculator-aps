import { Controle, Cpu, Digito, Operação, Tela } from "../calculadora";

export default class CpuB1 implements Cpu {
  private tela!: Tela;

  constructor(tela: Tela) {
    this.definaTela(tela);
  }

  recebaDigito(digito: Digito) {
    this.tela.mostre(digito);
  }

  recebaOperacao(operacao: Operação) {}

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
  private calculeResultado(){

  }
  private tratarAtivacaoLimpezaErro(){
    this.tela.limpe()
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
 