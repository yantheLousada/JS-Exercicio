//const honda = new Carro();

// 1 Cria um novo objeto
//honda = {};

// 2 Define o protótipo
//honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
//this = honda;

// 4 Executa a função, substituindo this pelo objeto
//honda.marca = 'Marca';
//honda.preco = 0;

// 5 Retorna o novo objeto
/*return honda = {
  marca: 'Marca',
  preco: 0,
} */
//
/*
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda = new Carro();
honda.marca = 'Honda';
honda.preco = 4000;
const fiat = new Carro();
fiat.marca = 'Fiat';
fiat.preco = 3000;

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  },
};

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    return this.nome + '' + 'andou';
  };
}
// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa('Joao', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:

// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
/*function Dom() {
  this.elements = document.querySelector();
  this.addClass;
  this.removeClass;
}
*/
console.log('oii');
