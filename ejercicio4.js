// Escribe una función JavaScript que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena. 

const palabraMasLarga = cadena => {
    
    const separadaPorEspacios = cadena.split(" ");
    // Suponemos que la primera palabra, en el array 0, es la más larga
    let palabraMasLarga = separadaPorEspacios[0];
    // Recorrer e ir comparando
    for (const palabra of separadaPorEspacios) {
        if (palabra.length >= palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga;
};

const frase = "Con diez cañones por banda, viento en popa a toda vela";
const palabra = palabraMasLarga(frase);
console.log("La palabra más larga es: " + palabra);