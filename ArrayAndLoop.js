// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var CopasWon = [1959, 1962, 1970, 1994, 2002];
console.log(CopasWon);
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var item = 0; item < CopasWon.length; item++) {
  console.log(`O Brasil ganhou a copa de ` + CopasWon[item]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for (var i = 0; i <= frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}
