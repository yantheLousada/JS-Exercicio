// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var obj = { nome: 'yan', sobrenome: ' the' };
console.log(obj);
// Crie um método no objeto anterior, que mostre o seu nome completo
obj.nomeCompleto = function () {
  return `${obj.nome} ${obj.sobrenome}`;
};
console.log(obj.nomeCompleto());
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
};
carro.preco = 3000;
console.log(carro);
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'cor',
  idade: 10,
  latir(pessoa) {
    pessoa === 'homem' ? 'Latir' : 'Nada';
  },
};
console.log(cachorro);
/*
Native
Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host - Object
String
Array
Function
Host
Objetos do host são aqueles implementados pelo próprio ambiente. Por exemplo no browser possuímos objetos do DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser. - 
NodeList
HTML
Collection
Elements
User
Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar de alguma biblioteca externa.

*/
