// Escribe una función llamada obtenerIniciales que tome un nombre completo como parámetro y devuelva las iniciales de cada palabra en el nombre. Debes combinar las funciones split y substr para lograr esto.

// El método substr() está obsoleto. Se sustituye por substring()
function obtenerIniciales(nombre) {
    // Dividimos el nombre completo en palabras
    const palabras = nombre.split(' ');

    // Obtenemos la primera letra de cada palabra mediante una función de flecha para después unirlas con el método join. Hace la función de callback para crear un nuevo array con map
    const iniciales = palabras.map(palabra => palabra.substring(0, 1)).join('');

    return iniciales;
}
// Ejemplo de uso
console.log(obtenerIniciales("Diego Blanco Ruiz"));
