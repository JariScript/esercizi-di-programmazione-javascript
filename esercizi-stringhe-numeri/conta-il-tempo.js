/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

let totalseconds = 12560;
let hours = Math.floor(totalseconds/3600);
let minutes = Math.floor((totalseconds % 3600) / 60);
let seconds = (totalseconds % 60);

console.log(`${totalseconds} equivalgono a ${hours} ore, ${minutes} minuti e ${seconds} secondi`);
