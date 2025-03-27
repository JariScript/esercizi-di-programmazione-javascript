/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

let year = 2025;
let birth = 1991;

let age = year - birth;
let missing = 100 - age;

console.log('Età = ' + age);
console.log('Per arrivare a 100 = ' + missing); //Questa sintassi trasforma i valori numerici in stringa

console.log(`La persona ha ${age} anni e di conseguenza mancano ancora ${missing} anni per arrivare a 100`);


