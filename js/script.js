/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
  il prezzo del biglietto è definito in base ai km (0.21 € al km)
  va applicato uno sconto del 20% per i minorenni
  va applicato uno sconto del 40% per gli over 65.
*Nota
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
1. Chiedo all'utente quanti chilometri vuole percorrere
2. Chiedo all'utente la sua età
3. Calcolo il costo del biglietto
4. Applico al costo del biglietto eventuali sconti
5. Mostro il prezzo del biglietto
 */

//Fase raccolta dati
//chilometri da percorrere
const userKilometres = parseInt(prompt('Quanti chilometri vuoi percorrere?', 10));
console.log('vuoi percorrere', userKilometres, 'Km');

//Età utente
const userAge = parseInt(prompt('Quanti anni hai?', 26));
console.log('hai', userAge, 'anni');

//Validazione
const isKilometresInvalid = isNaN(userKilometres) || userKilometres < 1;
const isAgeInvalid = isNaN(userAge) || userAge < 14;

if (isKilometresInvalid || isAgeInvalid) {
    //errore
    const errorMessage = isKilometresInvalid ? 'i chilometri almeno maggiore o uguale a 1'
        : 'i minori di 14 non possono viaggiare senza accompagnatore';
    alert(errorMessage);

    //ricarico la pagina
    location.reload();
}

//calcolo costo bieglietto
const userPrice = (userKilometres * 0.21).toFixed(2);

console.log('il costo del tuo biglietto é: €' + userPrice);
