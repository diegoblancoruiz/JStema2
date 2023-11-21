// Escribe una función llamada revertirPalabras que tome una oración como parámetro y devuelva la oración con las palabras en orden inverso.

function revertirPalabras(cadena) {
    const palabras = cadena.split(' ');
    const frase = palabras.slice().reverse().join(' ');
    return frase;
  }
  console.log(revertirPalabras("Javascript es increíble"));
