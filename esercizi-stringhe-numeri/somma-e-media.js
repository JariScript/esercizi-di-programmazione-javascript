/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

let sum = a + b + c + d + e;
let average = (a + b + c + d + e)/5;

console.log(sum);
console.log(average);

console.log(`La somma tra gli elementi è ${sum} e la loro media è ${average}`);
