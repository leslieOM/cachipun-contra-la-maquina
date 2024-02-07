var numeroJugadas = prompt("Hola Jugador, ¿Cuantas veces deseas jugar?");
const jugadas = parseInt(numeroJugadas);


if (Number.isInteger(jugadas)) {
  let contadorJugador = 0, contadorMaquina = 0;
  for (var i = 0; i < jugadas; i++) {
    var eleccionjugador = prompt(
      `Jugada N° ${i + 1}: Ingresa un valor entre Piedra, Papel o Tijeras`
    );
    let eleccion = eleccionjugador.toLowerCase();
    let mensaje;
    console.log(eleccion);

    if (eleccion == "piedra" || eleccion == "papel" || eleccion == "tijeras") {
      mensaje = CalculoResultado(eleccion);
      if (mensaje.includes("Ganaste")) contadorJugador++;
      else if(mensaje.includes("Perdiste")) contadorMaquina++
      alert(mensaje);
    } else {
      alert("valor ingresado no corresponde");
    }
    document.write(mensaje);
  }
  console.log(contadorJugador + " - " + contadorMaquina);
  QuienGano(contadorJugador, contadorMaquina);
} else {
  alert("El valor ingresado " + numeroJugadas + " no es un número");
}

function QuienGano(contadorJugador, contadorMaquina) {
    console.log(contadorJugador + " - " + contadorMaquina);
  if (contadorJugador > contadorMaquina) {
    alert("¡Felicidades! ¡Eres el ganador general!");
  } else if (contadorJugador < contadorMaquina) {
    alert("¡Oops! La máquina es el ganador general.");
  } else {
    alert("¡Es un empate general!");
  }
}

function CalculoResultado(eleccionjugador) {
  let eleccionmaquina = JugadaMaquina();
  let retorno;

  if (eleccionjugador == eleccionmaquina) {
    retorno = "Es un empate, la elección de la maquina fue: " + eleccionmaquina;
  } else if (
    (eleccionjugador == "piedra" && eleccionmaquina == "tijeras") ||
    (eleccionjugador == "papel" && eleccionmaquina == "piedra") ||
    (eleccionjugador == "tijeras" && eleccionmaquina == "papel")
  ) {
    retorno = "Ganaste, la elección de la maquina fue: " + eleccionmaquina;
  } else {
    retorno = "Perdiste, la elección de la maquina fue: " + eleccionmaquina;
  }
  return retorno + "<br>";
}

function JugadaMaquina() {
  var opciones = ["piedra", "papel", "tijeras"];
  var opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
  return opcionMaquina;
}
