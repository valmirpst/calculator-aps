import "./assets/styles/index.css";
import { Controle, Digito, Operação } from "./calculadora";
import Calculadora from "./classes/CalculadoraB1";
import CpuB1 from "./classes/CpuB1";
import TecladoB1 from "./classes/TecladoB1";
import TelaB1 from "./classes/TelaB1";

const tela = new TelaB1();
const cpu = new CpuB1(tela);
const teclado = new TecladoB1(cpu);

const calculadora = new Calculadora(tela, cpu, teclado);

// O que tá aqui pra baixo são os testes.
// Basicamente, tem uma função "sleep" pra simular que alguém está digitando.

(async function () {
  await sleep();
  calculadora.teclado.digiteDigito(Digito.UM);
  await sleep();
  calculadora.teclado.digiteControle(Controle.SEPARADOR_DECIMAL);
  await sleep();
  calculadora.teclado.digiteDigito(Digito.SETE);
  await sleep();
  calculadora.teclado.digiteOperacao(Operação.SOMA);
  await sleep();
  calculadora.teclado.digiteDigito(Digito.DOIS);
  await sleep();
  calculadora.teclado.digiteOperacao(Operação.SOMA);
  await sleep();
  calculadora.teclado.digiteDigito(Digito.NOVE);
  calculadora.teclado.digiteDigito(Digito.NOVE);
  await sleep();
  calculadora.teclado.digiteControle(Controle.IGUAL);
})();

async function sleep(time = 800) {
  return await new Promise((resolve) => setTimeout(resolve, time));
}

// const tecladoElement = document.getElementById("teclado");
// tecladoElement?.addEventListener("click", (e) => {
//   if (e.target instanceof HTMLButtonElement) {
//     switch (e.target.innerText) {
//       case "1": {
//         calculadora.teclado.digiteDigito(Digito.UM);
//         break;
//       }
//       case "2": {
//         calculadora.teclado.digiteDigito(Digito.DOIS);
//         break;
//       }
//       case "3": {
//         calculadora.teclado.digiteDigito(Digito.TRÊS);
//         break;
//       }
//       case "4": {
//         calculadora.teclado.digiteDigito(Digito.QUATRO);
//         break;
//       }
//       case "5": {
//         calculadora.teclado.digiteDigito(Digito.CINCO);
//         break;
//       }
//       case "6": {
//         calculadora.teclado.digiteDigito(Digito.SEIS);
//         break;
//       }
//       case "7": {
//         calculadora.teclado.digiteDigito(Digito.SETE);
//         break;
//       }
//       case "8": {
//         calculadora.teclado.digiteDigito(Digito.OITO);
//         break;
//       }
//       case "9": {
//         calculadora.teclado.digiteDigito(Digito.NOVE);
//         break;
//       }
//       case "+": {
//         calculadora.teclado.digiteOperacao(Operação.SOMA);
//         break;
//       }
//       case "=": {
//         calculadora.teclado.digiteControle(Controle.IGUAL);
//         break;
//       }
//     }
//   }
// });
