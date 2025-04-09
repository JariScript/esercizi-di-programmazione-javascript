/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/

let number1 = 245;

if (number1 > 9999) {
  console.log('Superato limite massimo di 9999');
} else {
  console.log(`${number1.toString().length} cifra${number1.toString().length > 1 ? 'e' : ''}`);
}




let number2 = 245;

if (number2 <= 9) {
  console.log('1 cifra');
}
  else if (number2 <= 99) {
  console.log ('2 cifre');
  }
  else if (number2 <= 999) {
    console.log('3 cifre');
  }
  else if (number2 <= 9999) {
    console.log('4 cifre');
  }
  else {
    console.log('Superato limite massimo di 9999');
  }
