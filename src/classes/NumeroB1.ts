import { Digito } from "../calculadora";

export default class NumeroB1 {
  digitos: Digito[] = [0];
  posiçãoSeparadorDecimal: number | null = null;

  paraNumero(): number {
    const valor = this.digitos.join("");
    if (this.posiçãoSeparadorDecimal) {
      const decimais = this.digitos.length - this.posiçãoSeparadorDecimal;
      return Number(valor) / 10 ** decimais;
    }
    return Number(valor);
  }

  limpe() {
    this.digitos = [];
    this.posiçãoSeparadorDecimal = null;
  }

  deNumero(numero: Number): void {
    this.posiçãoSeparadorDecimal = numero.toString().indexOf(".") + 1;
    const listaDigitos: Digito[] = [];
    for (let n of numero.toString()) {
      if (n !== ".") listaDigitos.push(Number(n));
    }
    this.digitos = listaDigitos;
  }
}
