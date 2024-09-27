import { Controle } from "./Controle";
import { Digito } from "./Digito";
import { Operação } from "./Operacao";

export interface ICpu {
  recebaDigito(digito: Digito): void;
  recebaOperacao(operação: Operação): void;
  recebaControle(controle: Controle): void;
  reinicie(): void;
}
