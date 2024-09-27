import { Controle } from "./Controle";
import { Digito } from "./Digito";
import { Operação } from "./Operacao";

export interface ITeclado {
  digiteDigito(digito: Digito): void;
  digiteOperacao(operação: Operação): void;
  digiteControle(controle: Controle): void;
  }