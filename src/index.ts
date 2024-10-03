import { Digito } from "./calculadora";
import { Operação } from "./calculadora";
import "./assets/styles/index.css";
import Calculadora from "./classes/CalculadoraB1";
import Cpu from "./classes/CpuB1";
import Teclado from "./classes/TecladoB1";
import Tela from "./classes/TelaB1";

const tela = new Tela();
const cpu = new Cpu(tela);
const teclado = new Teclado(cpu);

const calculadora = new Calculadora(tela, cpu, teclado);

calculadora.tela.limpe();
calculadora.teclado.digiteDigito(Digito.ZERO);

calculadora.cpu.recebaOperacao(Operação.SOMA);
