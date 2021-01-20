// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (A più piccolo di B).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri


// Nota: stampa dalla posizione A alla posizione B



// FUNZIONI********************************************************************


function filtra(array, nMin, nMax){
  const newArray = [];

  array.forEach((elemento, indice) =>{
    if (indice >=nMin && indice<=nMax){
      newArray.push(elemento);
    }
  });

  return newArray;
}

function filtraConFilter(array, nMin, nMax){
  const newArray = array.filter( (element,index) =>{
    return index >= nMin && index<= nMax;
  });

  return newArray;
}


// /FUNZIONI*******************************************************************

const min = 2;
const max = 5
const arrayCompleto = [ 'Pippo', 'Pluto', 'Paperino', 'Minnie', 'Topolino'];

let arraySelezione =  filtra(arrayCompleto, min, max);
let arraySelezione2 =  filtraConFilter(arrayCompleto, min, max);

console.log(arraySelezione);
console.log(arraySelezione2);
