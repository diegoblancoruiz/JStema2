// Escribe una función JavaScript que diga si una cadena de caracteres es un palíndromo. 

var palabra = prompt('Dime un texto o una palabra:');
palabra = palabra.toLowerCase().replace(/\s/g,"");

var alreves = palabra.split("").reverse("").join("");

function palindromo (palabra) {
    if(palabra == alreves){
      alert('El texto o palabra introducido es un palindromo');
    }
    else{
      alert('El texto o palabra introducido no es un palindromo');
    }
 }

palindromo ('alli ves a Sevilla');