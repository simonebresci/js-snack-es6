// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

// ES6 - modifiche console
// - var trasformato in let
// - console.log utilizzato in backtick

let arrayBici = [];


// Oggetto bici
let bici = {
  'nome' : 'vuoto',
  'peso' : 0
}

let bici1 = {
  'nome' : 'Blue tornado',
  'peso' : 33
}

let bici2 = {
  'nome' : 'Yellow Thunderbolt',
  'peso' : 81
}

let bici3 = {
  'nome' : 'Green shadow',
  'peso' : 7
}


// Aggiungi bici all'array
arrayBici.push(bici1);
arrayBici.push(bici2);
arrayBici.push(bici3);


// Inizializza biciLeggera con primo elemento
let biciLeggera = bici1;

// Scorri bici
// ES6 - uso di let anzichè let
for (let i = 0; i < arrayBici.length; i++) {
  // Confronta peso bici
  if (arrayBici[i].peso < biciLeggera.peso){
    biciLeggera = arrayBici[i];
  }

}


// Stampa bici leggera
for (let key in biciLeggera) {
  // console.log(key + " : " + biciLeggera[key]);

  // ES6 - Backtick
  console.log( `
    ${key} : ${biciLeggera[key]}
    `)

}
