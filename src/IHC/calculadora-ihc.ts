import { Controle, Digito, Operação } from "../calculadora";
import TecladoB1 from "../classes/TecladoB1";

export class CalculadoraIHC {
  teclado: TecladoB1;

  constructor(teclado: TecladoB1) {
    this.teclado = teclado;
  }

  events() {
    const tecladoElement = document.getElementById("teclado");

    document.getElementById("memoria_mais")?.addEventListener("click", (e) => {
      if (e.target instanceof HTMLButtonElement && e.target.value === "memoria_mais") {
        this.teclado.digiteControle(Controle.MEMÓRIA_SOMA);
      }
    });
    document.getElementById("memoria_menos")?.addEventListener("click", (e) => {
      if (e.target instanceof HTMLButtonElement && e.target.value === "memoria_menos") {
        this.teclado.digiteControle(Controle.MEMÓRIA_SUBTRAÇÃO);
      }
    });
    document.getElementById("memoria_read_clear")?.addEventListener("click", (e) => {
      if (e.target instanceof HTMLButtonElement && e.target.value === "memoria_read_clear") {
        this.teclado.digiteControle(Controle.MEMÓRIA_LEITURA_LIMPEZA);
      }
    });

    tecladoElement?.addEventListener("click", (e) => {
      if (e.target instanceof HTMLButtonElement) {
        switch (e.target.value) {
          case "botao_mais": {
            this.teclado.digiteOperacao(Operação.SOMA);
            break;
          }

          case "square_root": {
            this.teclado.digiteOperacao(Operação.RAIZ_QUADRADA);
            break;
          }

          case "on_ce": {
            this.teclado.digiteControle(Controle.ATIVAÇÃO_LIMPEZA_ERRO);
            break;
          }

          case "subtracao": {
            this.teclado.digiteOperacao(Operação.SUBTRAÇÃO);
            break;
          }

          case "multiplication": {
            this.teclado.digiteOperacao(Operação.MULTIPLICAÇÃO);
            break;
          }

          case "division": {
            this.teclado.digiteOperacao(Operação.DIVISÃO);
            break;
          }

          case "percentage": {
            this.teclado.digiteOperacao(Operação.PERCENTUAL);
            break;
          }

          case "separador_decimal": {
            this.teclado.digiteControle(Controle.SEPARADOR_DECIMAL);
            break;
          }

          case "botao_igual": {
            this.teclado.digiteControle(Controle.IGUAL);
            break;
          }
        }

        switch (e.target.innerText) {
          case "0": {
            this.teclado.digiteDigito(Digito.ZERO);
            break;
          }
          case "1": {
            this.teclado.digiteDigito(Digito.UM);
            break;
          }
          case "2": {
            this.teclado.digiteDigito(Digito.DOIS);
            break;
          }
          case "3": {
            this.teclado.digiteDigito(Digito.TRÊS);
            break;
          }
          case "4": {
            this.teclado.digiteDigito(Digito.QUATRO);
            break;
          }
          case "5": {
            this.teclado.digiteDigito(Digito.CINCO);
            break;
          }
          case "6": {
            this.teclado.digiteDigito(Digito.SEIS);
            break;
          }
          case "7": {
            this.teclado.digiteDigito(Digito.SETE);
            break;
          }
          case "8": {
            this.teclado.digiteDigito(Digito.OITO);
            break;
          }
          case "9": {
            this.teclado.digiteDigito(Digito.NOVE);
            break;
          }
        }
      }
    });
  }
}
