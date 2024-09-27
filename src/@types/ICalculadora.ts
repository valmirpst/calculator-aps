import Cpu from "../classes/Cpu";
import Teclado from "../classes/Teclado";
import Tela from "../classes/Tela";

export interface ICalculadora {
  tela: Tela;
  teclado: Teclado;
  cpu: Cpu;
}
