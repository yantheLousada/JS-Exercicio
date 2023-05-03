// A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa() {
  this.nome = 'yan';
  this.sobrenome = 'Thé';
  this.idade = 26;
}
Pessoa.prototype.nomeCompleto = function (nome, sobrenome) {
  return `&{nome} + &{sobrenome}`;
};
console.log(Pessoa.nomeCompleto('yan', 'the'));
// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
