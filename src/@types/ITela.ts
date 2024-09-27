import { Digito } from "./Digito";

export interface ITela {
    mostre(digito: Digito): void;
    limpe(): void;
  }