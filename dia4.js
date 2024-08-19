// Definimos el número secreto 
let numeroSecreto = Math.floor(Math.random() * 11);

// Inicializamos los intentos
let intentos = 3;

// Función para realizar el juego
function adivinarNumero() {
  while (intentos > 0) {
    let adivina = parseInt(prompt(`Tienes ${intentos} intentos. Adivina el número secreto (entre 0 y 10):`));

    if (adivina === numeroSecreto) {
      alert("¡Felicidades! Adivinaste el número secreto.");
      return;
    } else {
      alert("No es el número secreto.");
      intentos--;
    }
  }

  alert(`Lo siento, te has quedado sin intentos. El número secreto era: ${numeroSecreto}`);
}

// Llamamos a la función para empezar el juego
adivinarNumero();