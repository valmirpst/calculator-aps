import "./assets/styles/index.css";
import CpuB1 from "./classes/CpuB1";
import TecladoB1 from "./classes/TecladoB1";
import TelaB1 from "./classes/TelaB1";
import { CalculadoraIHC } from "./IHC/calculadora-ihc";

const tela = new TelaB1();

const cpu = new CpuB1();
cpu.definaTela(tela);

const teclado = new TecladoB1(cpu);

new CalculadoraIHC(teclado).events();
