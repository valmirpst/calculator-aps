import "./assets/styles/index.css";
import { Controle, Digito, Operação } from "./calculadora";
import CpuB1 from "./classes/CpuB1";
import TecladoB1 from "./classes/TecladoB1";
import TelaB1 from "./classes/TelaB1";

const tela = new TelaB1();
const cpu = new CpuB1();
cpu.definaTela(tela);
const teclado = new TecladoB1(cpu);
// const calculadora = new Calculadora(tela, cpu, teclado);

const tecladoElement = document.getElementById("teclado");
document.getElementById("memoria_mais")?.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement && e.target.value === "memoria_mais") {
    teclado.digiteControle(Controle.MEMÓRIA_SOMA);
  }
});
document.getElementById("memoria_menos")?.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement && e.target.value === "memoria_menos") {
    teclado.digiteControle(Controle.MEMÓRIA_SUBTRAÇÃO);
  }
});
document.getElementById("memoria_read_clear")?.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement && e.target.value === "memoria_read_clear") {
    teclado.digiteControle(Controle.MEMÓRIA_LEITURA_LIMPEZA);
  }
});

tecladoElement?.addEventListener("click", (e) => {
  if (e.target instanceof HTMLButtonElement) {
    switch (e.target.value) {
      case "botao_mais": {
        teclado.digiteOperacao(Operação.SOMA);
        break;
      }

      case "square_root": {
        teclado.digiteOperacao(Operação.RAIZ_QUADRADA);
        break;
      }

      case "on_ce": {
        teclado.digiteControle(Controle.ATIVAÇÃO_LIMPEZA_ERRO);
        break;
      }

      case "subtracao": {
        teclado.digiteOperacao(Operação.SUBTRAÇÃO);
        break;
      }

      case "multiplication": {
        teclado.digiteOperacao(Operação.MULTIPLICAÇÃO);
        break;
      }

      case "division": {
        teclado.digiteOperacao(Operação.DIVISÃO);
        break;
      }

      case "percentage": {
        teclado.digiteOperacao(Operação.PERCENTUAL);
        break;
      }

      case "separador_decimal": {
        teclado.digiteControle(Controle.SEPARADOR_DECIMAL);
        break;
      }

      case "botao_igual": {
        teclado.digiteControle(Controle.IGUAL);
        break;
      }
    }

    switch (e.target.innerText) {
      case "0": {
        teclado.digiteDigito(Digito.ZERO);
        break;
      }
      case "1": {
        teclado.digiteDigito(Digito.UM);
        break;
      }
      case "2": {
        teclado.digiteDigito(Digito.DOIS);
        break;
      }
      case "3": {
        teclado.digiteDigito(Digito.TRÊS);
        break;
      }
      case "4": {
        teclado.digiteDigito(Digito.QUATRO);
        break;
      }
      case "5": {
        teclado.digiteDigito(Digito.CINCO);
        break;
      }
      case "6": {
        teclado.digiteDigito(Digito.SEIS);
        break;
      }
      case "7": {
        teclado.digiteDigito(Digito.SETE);
        break;
      }
      case "8": {
        teclado.digiteDigito(Digito.OITO);
        break;
      }
      case "9": {
        teclado.digiteDigito(Digito.NOVE);
        break;
      }
    }
  }
});
//
