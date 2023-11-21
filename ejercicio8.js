// Escribe una función llamada extraerDominio que tome una dirección de correo electrónico como parámetro y devuelva solo el dominio (sin el @).

function extraerDominio(correo) {
    // Dividimos la dirección de correo electrónico en dos partes.
    const mail = correo.split("@");
    // Devuelve la parte del dominio llamando a la segunda parte.
    return mail[1];
  }
  console.log(extraerDominio("diegoblancoruiz@gmail.com"));