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
