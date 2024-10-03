import { Digito, Tela } from "../calculadora";


export default class TelaB1 implements Tela {
  constructor() {}

  mostre(digito: Digito) {
    console.log(digito);
  }

  limpe() {
    console.clear();
  }
}
