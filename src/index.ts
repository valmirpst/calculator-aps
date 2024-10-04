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
calculadora.teclado.digiteDigito(Digito.ZERO);

calculadora.cpu.recebaOperacao(Operação.SOMA);
calculadora.cpu.recebaControle(Controle.ATIVAÇÃO_LIMPEZA_ERRO)
