// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


// Nota: stampa dalla posizione A alla posizione B



// FUNZIONI********************************************************************
function filtra (array, numPiccolo, numGrande){
  var newArray = [];

  // Correggi indici in conteggio "umano"
  numPiccolo -= 1;
  numGrande -= 1;


  // Aggiungi elementi compresi fra gli indici
  for (var i = 0; i < array.length; i++) {
    if (i>= numPiccolo && i<= numGrande){
      newArray.push(array[i]);
    }
  }

  return newArray;
}

// /FUNZIONI*******************************************************************

arrayCompleto = [ 'Pippo', 'Pluto', 'Paperino', 'Minnie', 'Topolino'];

var arraySelezione = filtra(arrayCompleto, 2, 4);

console.log(arraySelezione.join(' '));
