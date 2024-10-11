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

calculadora.tela.limpe();
// teste se for o primeiro digito limpar
calculadora.teclado.digiteDigito(Digito.ZERO);
calculadora.teclado.digiteDigito(Digito.UM);
calculadora.teclado.digiteDigito(Digito.DOIS);
calculadora.teclado.digiteOperacao(Operação.MULTIPLICAÇÃO);
console.log('Operação');

calculadora.teclado.digiteDigito(Digito.SETE);
calculadora.teclado.digiteDigito(Digito.SEIS);
calculadora.teclado.digiteControle(Controle.IGUAL)
// calculadora.cpu.recebaOperacao(Operação.SOMA);

