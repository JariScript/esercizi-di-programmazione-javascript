/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

let a = 3;
let b = -1;
let c = 4;
let d = -2;

if (a > b && a > c && a > d) {
  console.log("Maggiore: " + a);
} else if (b > a && b > c && b > d) {
  console.log("Maggiore: " + b);
} else if (c > a && c > b && c > d) {
  console.log("Maggiore: " + c);
} else if (d > a && d > b && d > c) {
  console.log("Maggiore: " + d);
}

if (a < b && a < c && a < d) {
  console.log("Minore: " + a);
} else if (b < a && b < c && b < d) {
  console.log("Minore: " + b);
} else if (c < a && c < b && c < d) {
  console.log("Minore: " + c);
} else if (d < a && d < b && d < c) {
  console.log("Minore: " + d);
}
