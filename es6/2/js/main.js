// jsnack 2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Oggetto squadra
// let squadra = {
//   'nome' : 'x',
//   'punti' : 'x',
//   'falli' : 'x'
// }


// FUNZIONI********************************************************************
function generaRandom(min, max){
  return parseInt(Math.random()* (max-min) + min);
}

// /FUNZIONI*******************************************************************


// Array di oggetti squadra
let arraySquadre = [
  {
    'nome' : 'x',
    'punti' : 'x',
    'falli' : 'x'
  },
  {
    'nome' : 'x',
    'punti' : 'x',
    'falli' : 'x'
  },
  {
    'nome' : 'x',
    'punti' : 'x',
    'falli' : 'x'
  }
];

// Compila campi e stampa a video
for (let i = 0; i < arraySquadre.length; i++) {
  // console.log(arraySquadre[i].nome);
  arraySquadre[i].nome = prompt('Inserisci il nome della squadra: ');
  arraySquadre[i].punti = generaRandom(1,10);
  arraySquadre[i].falli = generaRandom(1,10);

  // Stampa tutte le proprietà della squadra
  for (let key in arraySquadre[i]) {
    console.log(key + " : " + arraySquadre[i][key]);

  }
  console.log('');

}


let arrayDestrutturato = [];
console.log('Array destrutturato')
for (var i = 0; i < arraySquadre.length; i++) {
  let {nome,falli} = arraySquadre[i]

  // let squadraTemp = {
  //   nome,
  //   falli
  // }
  // arrayDestrutturato.push(squadraTemp);

  // Pusha nuovo elemento
  arrayDestrutturato.push({
    nome,
    falli
  });

  // Stampa tutte le proprietà della squadra
  for (let key in arrayDestrutturato[i]) {
    console.log(key + " : " + arraySquadre[i][key]);
  }
  console.log('');


}
