// Escribe una función de JavaScript que genere una cadena (de longitud especificada) de caracteres aleatorios.

function generador(length) {
    var cadena = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var caracteresLongitud = caracteres.length;
    for ( var i = 0; i < length; i++ ) {
       cadena += caracteres.charAt(Math.floor(Math.random() * caracteresLongitud));
    }
    return cadena;
 }
 
 console.log(generador(10)); 