function palindromo(cadena) {
    // Ponemos en minuscula la cadena y quitamos los caracteres no deseados en la cadena.
    var re = /[\W_]/g; // también se puede escribir /[^A-Za-z0-9]/g
    
    var principioafin = cadena.toLowerCase().replace(re, '');
    // El método toLowerCase() convierte la cadena minúsculas.
    // str.replace(/[\W_]/g, '') elimina espacios, comas y demás elementos que no sean letras.  
    var finaprincipio = principioafin.split('').reverse().join(''); 
    // Utilizamos tres métodos. Split separa los elementos de la cadena. Reverse invierte los elementos de la cadena y join une los elementos de la   cadena. 
    return principioafin === finaprincipio;}

    palindromo("A man, a plan, a canal. Panama")