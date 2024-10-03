import { Digito } from "../@types/Digito";
import { ITela } from "../@types/ITela";

export default class Tela implements ITela {
  constructor() {}

  mostre(digito: Digito) {
    console.log(digito);
  }

  limpe() {
    console.clear();
  }
}
