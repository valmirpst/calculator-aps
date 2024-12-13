import { Controle, Digito, Operação } from "../calculadora";
import CpuB1 from "../classes/CpuB1";
import TelaTeste from "./Lucio-TelaTeste";

describe("Testes com a CpuB1", () => {
  let cpu: CpuB1;
  let telaTeste: TelaTeste;

  beforeEach(() => {
    cpu = new CpuB1();
    telaTeste = new TelaTeste();
    cpu.definaTela(telaTeste);
  });

  describe("Testes com Operações Consecutivas", () => {
    let soma: number;
    beforeEach(() => {
      soma = 0;
      cpu = new CpuB1();
      telaTeste = new TelaTeste();
      cpu.definaTela(telaTeste);
    });

    const numeros = [5, 1.2, 52, 29, 123];

    test("soma", () => {
      numeros.forEach((n) => (soma += n));
      numeros.forEach((n) => {
        cpu.recebaDigito(n);
        cpu.recebaOperacao(Operação.SOMA);
      });
      expect(cpu.valor1).toBe(soma);
    });

    test("subtração", () => {
      numeros.forEach((n, i) => (i === 0 ? (soma += n) : (soma -= n)));
      numeros.forEach((n) => {
        cpu.recebaDigito(n);
        cpu.recebaOperacao(Operação.SUBTRAÇÃO);
      });
      expect(cpu.valor1).toBe(soma);
    });

    test("multiplicacao", () => {
      soma = 1;
      numeros.forEach((n) => (soma *= n));
      numeros.forEach((n) => {
        cpu.recebaDigito(n);
        cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
      });
      expect(cpu.valor1).toBe(soma);
    });

    test("divisao", () => {
      numeros.forEach((n, i) => (i === 0 ? (soma += n) : (soma = n === 0 ? soma / 1 : soma / n)));
      numeros.forEach((n) => {
        cpu.recebaDigito(n);
        cpu.recebaOperacao(Operação.DIVISÃO);
      });
      expect(cpu.valor1).toBe(soma);
    });

    test("soma com percentual", () => {
      numeros.forEach((n, i) => (i === 0 ? (soma += n / 100) : (soma = soma + (soma * n) / 100)));
      numeros.forEach((n) => {
        cpu.recebaDigito(n);
        cpu.recebaOperacao(Operação.PERCENTUAL);
        cpu.recebaOperacao(Operação.SOMA);
      });
      expect(cpu.valor1).toBeCloseTo(soma);
    });

    test("soma com raiz quadrada", () => {
      numeros.forEach((n) => (soma += n ** 0.5));
      numeros.forEach((n) => {
        cpu.recebaDigito(n);
        cpu.recebaOperacao(Operação.RAIZ_QUADRADA);
        cpu.recebaOperacao(Operação.SOMA);
      });
      expect(cpu.valor1).toBe(soma);
    });
  });

  describe("Testes de Digitos", () => {
    const digitos = [
      Digito.ZERO,
      Digito.UM,
      Digito.DOIS,
      Digito.TRÊS,
      Digito.QUATRO,
      Digito.CINCO,
      Digito.SEIS,
      Digito.SETE,
      Digito.OITO,
      Digito.NOVE,
    ];

    digitos.forEach((digito) => {
      test(`Teste digito ${digito.toString()}`, () => {
        cpu.recebaDigito(digito);
        expect(cpu.numero.paraNumero()).toBe(digito);
      });
    });
  });

  describe("Testes de Controle", () => {
    beforeEach(() => {
      cpu = new CpuB1();
      telaTeste = new TelaTeste();
      cpu.definaTela(telaTeste);
    });

    test("1 + 1 = (5x Controle.IGUAL)", () => {
      cpu.recebaDigito(1);
      cpu.recebaOperacao(Operação.SOMA);
      cpu.recebaDigito(1);
      for (let i = 0; i < 5; i++) cpu.recebaControle(Controle.IGUAL);
      expect(cpu.valor1).toBe(6);
    });

    test("separador decimal: digita (1.1.1.1)", () => {
      for (let i = 0; i < 3; i++) {
        cpu.recebaDigito(1);
        cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
      }
      cpu.recebaDigito(1);
      expect(cpu.numero.paraNumero()).toBe(1.111);
    });

    test("soma e subtração na memória", () => {
      cpu.recebaDigito(5);
      cpu.recebaControle(Controle.MEMÓRIA_SOMA);
      cpu.recebaDigito(7);
      cpu.recebaDigito(6);
      cpu.recebaControle(Controle.MEMÓRIA_SUBTRAÇÃO);
      cpu.recebaDigito(9);
      cpu.recebaControle(Controle.MEMÓRIA_SUBTRAÇÃO);
      cpu.recebaDigito(0);
      cpu.recebaControle(Controle.MEMÓRIA_SOMA);
      cpu.recebaDigito(1);
      cpu.recebaControle(Controle.MEMÓRIA_SUBTRAÇÃO);
      expect(cpu.memoria).toBe(-81);
    });
  });
});
