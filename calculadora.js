function soma(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}

function maximo(array) {
  let max = array.reduce((a, b) => Math.max(a, b));
  return max;
}
module.exports = { soma, subtrair, dividir, multiplicar, maximo };
