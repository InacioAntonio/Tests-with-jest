const determinar = require("./Funcoes");

test("Verifica se um triangulo", () => {
  expect(determinar.determinarTriangulo(-1, 7, 7)).toBe(
    "Não é um triângulo válido"
  );
  expect(determinar.determinarTriangulo(0, 7, 7)).toBe(
    "Não é um triângulo válido"
  );
  expect(determinar.determinarTriangulo(5, 0, 4)).toBe(
    "Não é um triângulo válido"
  );
  expect(determinar.determinarTriangulo(5, -1, 3)).toBe(
    "Não é um triângulo válido"
  );
  expect(determinar.determinarTriangulo(5, 3, -1)).toBe(
    "Não é um triângulo válido"
  );
  expect(determinar.determinarTriangulo(5, 2, -0)).toBe(
    "Não é um triângulo válido"
  );
});

test("Verfica o Tipo do Triangulo", () => {
  expect(determinar.determinarTriangulo(7, 7, 7)).toBe("Triângulo equilátero");
  expect(determinar.determinarTriangulo(6, 7, 7)).toBe("Triângulo isósceles");
  expect(determinar.determinarTriangulo(7, 7, 6)).toBe("Triângulo isósceles");
  expect(determinar.determinarTriangulo(7, 6, 7)).toBe("Triângulo isósceles");
  expect(determinar.determinarTriangulo())
    .toBe(4, 5, 6)
    .toBe("Triângulo escaleno");
});

test("aplica 10% de desconto para compras entre 100 e 499.99", () => {
  expect(determinar.calcularPrecoComDesconto(100)).toBe("90.00");
  expect(determinar.calcularPrecoComDesconto(250)).toBe("225.00");
  expect(determinar.calcularPrecoComDesconto(499.99)).toBe("449.99");
});

test("aplica 15% de desconto para compras entre 500 e 999.99", () => {
  expect(determinar.calcularPrecoComDesconto(500)).toBe("425.00");
  expect(determinar.calcularPrecoComDesconto(750)).toBe("637.50");
  expect(determinar.calcularPrecoComDesconto(999.99)).toBe("849.99");
});

test("aplica 20% de desconto para compras a partir de 1000", () => {
  expect(determinar.calcularPrecoComDesconto(1000)).toBe("800.00");
  expect(determinar.calcularPrecoComDesconto(1500)).toBe("1200.00");
  expect(determinar.calcularPrecoComDesconto(2000)).toBe("1600.00");
});

test("não aplica desconto para compras abaixo de 100", () => {
  expect(determinar.calcularPrecoComDesconto(0)).toBe("0.00");
  expect(determinar.calcularPrecoComDesconto(50)).toBe("50.00");
  expect(determinar.calcularPrecoComDesconto(99.99)).toBe("99.99");
});
