// Escribe una función de JavaScript que acepte una cadena como parámetro y cuente el número de vocales dentro de la cadena.

function contadorVocales(cadena) {
  // inicializamos contador, creamos el array y pasamos las vocales en una variable.
  let cont = 0;
  let arr = cadena.toLowerCase().split("")
  let vocales = ["a","e","i","o","u","á","é","í","ó","ú"]
  // recorremos el array 
  for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(arr[i])) {
      cont+=1 // o cont++
    }
  }
  return cont;

}
console.log(contadorVocales("el rápido zorro marrón"));
  