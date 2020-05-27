// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Dichiarazione variabili
var numero = 0;
var listaFizzBuzz = document.getElementById('lista_fizzbuzz');

// Fai un ciclo per scirvere i numeri da uno a 100
while (numero < 100) {
  numero = numero + 1;
  listaFizzBuzz.innerHTML +=  '<li>' + numero + '</li>';
}

// Condizione per i numeri multipli di 3

// Condizione per i multipli di 5

// Condizione per i numeri che sono sia multipli di tre che di 5
