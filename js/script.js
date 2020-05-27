// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Dichiarazione variabili
// var numero = 0;
var listaFizzBuzz = document.getElementById('lista_fizzbuzz');

// Ciclo for per scrivere la lista di numeri da 1 a 100
// for (var i = 1; i <= 100; i++) {
//   numero += 1;
//   // Condizione per i multipli sia di tre che di 5 'FizzBuzz'
//   if (numero % 3 == 0 && numero % 5 == 0) {
//     numero = 'FizzBuzz';
//   } else if (numero % 3 == 0) { // Condizione per i multipli di tre 'Fizz'
//     numero = 'Fizz';
//   } else if (numero % 5 == 0) {  // Condizione per i multipli di 5 'Buzz'
//     numero = 'Buzz';
//   }

  for (var i = 1; i <= 100; i++) {
    var numero = i;

    // Condizione per i multipli sia di tre che di 5 'FizzBuzz'
    if (numero % 3 == 0 && numero % 5 == 0) {
      numero = 'FizzBuzz';
    } else if (numero % 3 == 0) { // Condizione per i multipli di tre 'Fizz'
      numero = 'Fizz';
    } else if (numero % 5 == 0) {  // Condizione per i multipli di 5 'Buzz'
      numero = 'Buzz';
    }
 // Stampa a lista
  listaFizzBuzz.innerHTML +=  '<li>' + numero + '</li>';
}
