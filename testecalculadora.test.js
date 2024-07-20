const testecalculadora = require("./calculadora");
//TESTE DA FUNÇÃO SOMA
test("Adicionar 1 + 2 para ser igual a 3", () => {
  expect(testecalculadora.soma(1, 2)).toBe(3);
});
test("Adicionar -1 + -2 para ser igual a -3", () => {
  expect(testecalculadora.soma(-1, -2)).toBe(-3);
});
test("Adicionar 1.5 +2.5 para ser igual a 4", () => {
  expect(testecalculadora.soma(1.5, 2.5)).toBe(4);
});

//TESTE DA FUNÇÃO SUBTRAÇÃO
test("Subtrair 5 - 2 para ser igual a 3", () => {
  expect(testecalculadora.subtrair(5, 2)).toBe(3);
});
test("Subtrair -1 - -2 para ser igual a 1", () => {
  expect(testecalculadora.subtrair(-1, -2)).toBe(1);
});
test("Subtrair 5.5 - 2.5 para ser igual a 3", () => {
  expect(testecalculadora.subtrair(5.5, 2.5)).toBe(3);
});
//TESTE DA FUNÇÃO MULTIPLICAR
test("Multiplicar 3 * 4 para ser igual a 12", () => {
  expect(testecalculadora.multiplicar(3, 4)).toBe(12);
});
test("Multiplicar -1 * -2 para ser igual a 2", () => {
  expect(testecalculadora.multiplicar(-1, -2)).toBe(2);
});
test("Multiplicar 1.5 * 2 para ser igual a 3", () => {
  expect(testecalculadora.multiplicar(1.5, 2)).toBe(3);
});
//TESTE DA FUNÇÃO DIVIDIR
test("Dividir 8 / 2 para ser igual a 4", () => {
  expect(testecalculadora.dividir(8, 2)).toBe(4);
});
test("Dividir -6 / -2 para ser igual a 3", () => {
  expect(testecalculadora.dividir(-6, -2)).toBe(3);
});
test("Dividir 7.5 / 2.5 para ser igual a 3", () => {
  expect(testecalculadora.dividir(7.5, 2.5)).toBe(3);
});
test("Lançar erro ao dividir por zero", () => {
  expect(() =>
    testecalculadora.dividir(7, 0).toThrow("Can't division by zero")
  );
});
//FUNÇÃO ENCONTRAR O MAXIMO
test("Encontrar o máximo em [1, 2, 3] para ser igual a 3", () => {
  expect(testecalculadora.maximo([1, 2, 3])).toBe(3);
});
test("Encontrar o máximo em [-1, -2, -3] para ser igual a -1", () => {
  expect(testecalculadora.maximo([-1, -2, -3])).toBe(-1);
});
test("Encontrar o máximo em [5] para ser igual a 5", () => {
  expect(testecalculadora.maximo([5])).toBe(5);
});
test("Lançar erro para array vazio", () => {
  expect(() => testecalculadora.maximo([]).toThrow("No max"));
});
