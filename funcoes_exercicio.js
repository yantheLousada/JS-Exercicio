// Crie uma função para verificar se um valor é Truthy
function verifica(param) {
  return !!param;
}
console.log(verifica(10));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
  return 4 * lado;
}
console.log(perimetro(5));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto('yan', 'the'));
// Crie uma função que verifica se um número é par
function par(num) {
  var modulo = num % 2;
  return modulo === 0 ? true : false;
}
console.log(par(10));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeoff(param) {
  return typeof param;
}

// Crie uma função que retorne a area um triangulo
function triArea(base, height) {
  return (base * height) / 2;
}
// Crie uma função que retorne true se o primeiro OU o ultimo numero do array for 6
function firstLast6(nums) {
  return nums[0] === 6 || nums[nums.length - 1] === 6;
}
