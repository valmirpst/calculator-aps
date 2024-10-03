import { Digito } from "./@types/Digito";
import { Operação } from "./@types/Operacao";
import "./assets/styles/index.css";
import Calculadora from "./classes/Calculadora";
import Cpu from "./classes/Cpu";
import Teclado from "./classes/Teclado";
import Tela from "./classes/Tela";

const tela = new Tela();
const cpu = new Cpu(tela);
const teclado = new Teclado(cpu);

const calculadora = new Calculadora(tela, cpu, teclado);

calculadora.tela.limpe()
calculadora.teclado.digiteDigito(Digito.ZERO);

calculadora.cpu.recebaOperacao(Operação.SOMA)