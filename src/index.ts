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
  calculadora.teclado.digiteControle(Controle.IGUAL);
})();

async function sleep(time = 1000) {
  return await new Promise((resolve) => setTimeout(resolve, time));
}
