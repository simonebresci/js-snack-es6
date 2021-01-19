// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore



var arrayBici = [];


// Oggetto bici
var bici = {
  'nome' : 'vuoto',
  'peso' : 0
}



var bici1 = {
  'nome' : 'Blue tornado',
  'peso' : 33
}

var bici2 = {
  'nome' : 'Yellow Thunderbolt',
  'peso' : 81
}

var bici3 = {
  'nome' : 'Green shadow',
  'peso' : 7
}


// Aggiungi bici all'array
arrayBici.push(bici1);
arrayBici.push(bici2);
arrayBici.push(bici3);


// Inizializza biciLeggera con primo elemento
var biciLeggera = bici1;

// Scorri bici
for (var i = 0; i < arrayBici.length; i++) {
  // Confronta peso bici
  // console.log(arrayBici[i].peso);
  // console.log(biciLeggera.peso);
  // console.log('');

  if (arrayBici[i].peso < biciLeggera.peso){
    biciLeggera = arrayBici[i];
  }

}


// Stampa bici leggera
for (var key in biciLeggera) {
  console.log(key + " : " + biciLeggera[key]);
}
