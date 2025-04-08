/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

// Definizione del menu come oggetto
const menu = {
  1: 'Tiramisù',
  2: 'Torta della Nonna',
  3: 'Cheesecake',
  4: 'Macedonia'
};

// Input dell'utente
let input = 3;

// Controllo della scelta
if (menu[input]) {
  console.log(`Hai scelto il dolce ${menu[input]}`);
} else {
  console.log('Dolce non disponibile');
}




//Altro metodo però meno efficiente 
let tiramisu = 1;
let tortadellanonna = 2;
let cheescake = 3;
let macedonia = 4;

let input1 = 3;
if (input1 == tiramisu) {
  console.log('Hai scelto il dolce Tiramisù');
}
 else if (input1 == tortadellanonna) {
  console.log('Hai scelto il dolce Torta della Nonna');
}

else if (input1 == cheescake) {
  console.log('Hai scelto il dolce Cheesecake');
}

else if (input1 == macedonia)  {
  console.log(`Hai scelto il dolce Macedonia`);
}

else {
  console.log('Dolce non disponibile');
}
 
 

