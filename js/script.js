// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Dichiarazione variabili
var numero = 0;
var listaFizzBuzz = document.getElementById('lista_fizzbuzz');

// Fai un ciclo for per scirvere i numeri da uno a 100
// for (var i = 0; i < 100; i++) {
//   numero += 1;
//   console.log(numero);
//   listaFizzBuzz.innerHTML +=  '<li>' + numero + '</li>';
// }

// Condizione per i numeri multipli di 3
for (var i = 1; i <= 100; i++) {
  numero += 1;
  if (numero % 3 == 0) {
    numero = 'Fizz';
  }
  listaFizzBuzz.innerHTML +=  '<li>' + numero + '</li>';
  numero = i;
}


// Condizione per i multipli di 5

// Condizione per i numeri che sono sia multipli di tre che di 5
