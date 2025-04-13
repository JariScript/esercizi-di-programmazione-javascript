/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

let a = 10;
let b = -2;
let c = 31;
let d = 22;
let e = 15;
let f = -6;
let g = 7;

//Usando Metodo Math

let hot = Math.max(a, b, c, d, e, f, g);
let cold = Math.min(a, b, c, d, e, f, g);

console.log(`Giornata più calda = ${hot}`);
console.log(`Giornata piu fredda = ${cold}`);


//Usando le condizioni

if (a>b && a>c && a>d && a>e && a>f && a>g) {
  console.log(`Giornata più calda = ${a}`);
}
else if (b>a && b>c && b>d && b>e && b>f && b>g) {
  console.log(`Giornata più calda = ${b}`);
}
else if (c>a && c>b && c>d && c>e && c>f && c>g) {
  console.log(`Giornata più calda = ${c}`);
}
else if (d>a && d>b && d>c && d>e && d>f && d>g) {
  console.log(`Giornata più calda = ${d}`);
}
else if (e>a && e>b && e>c && e>d && e>f && e>g) {
  console.log(`Giornata più calda = ${e}`);
}
else if (f>a && f>b && f>c && f>d && f>e && f>g) {
  console.log(`Giornata più calda = ${f}`);
}
else if (g>a && g>b && g>c && g>d && g>e && g>f) {
  console.log(`Giornata più calda = ${g}`);
}    


if (a<b && a<c && a<d && a<e && a<f && a<g) {
  console.log(`Giornata più fredda = ${a}`);
}
else if (b<a && b<c && b<d && b<e && b<f && b<g) {
  console.log(`Giornata più fredda = ${b}`);
}
else if (c<a && c<b && c<d && c<e && c<f && c<g) {
  console.log(`Giornata più fredda = ${c}`);
}
else if (d<a && d<b && d<c && d<e && d<f && d<g) {
  console.log(`Giornata più fredda = ${d}`);
}
else if (e<a && e<b && e<c && e<d && e<f && e<g) {
  console.log(`Giornata più fredda = ${e}`);
}
else if (f<a && f<b && f<c && f<d && f<e && f<g) {
  console.log(`Giornata più fredda = ${f}`);
}
else if (g<a && g<b && g<c && g<d && g<e && g<f) {
  console.log(`Giornata più fredda = ${g}`);
}

//Usando un array

let temperatures = [10, -2, 31, 22, 15, -6, 7];

let hotarray = Math.max(...temperatures);
let coldarray = Math.min(...temperatures);

console.log(`Giornata più calda = ${hotarray}`);
console.log(`Giornata più fredda = ${coldarray}`);
