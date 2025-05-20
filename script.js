// script.js - Interactividad para la página educativa de Colombia

document.addEventListener("DOMContentLoaded", () => {
  animarTarjetas();
  cargarPregunta(); // minijuego tipo pixel
  agregarBotonReinicio();
  mostrarSorpresa();
});

// ===================== ANIMACIÓN SUAVE =====================
function animarTarjetas() {
  const tarjetas = document.querySelectorAll(".tarjeta");
  tarjetas.forEach((tarjeta, i) => {
    tarjeta.style.opacity = 0;
    tarjeta.style.transition = "opacity 1s ease-out, transform 0.5s";
    tarjeta.style.transform = "translateY(40px)";
    setTimeout(() => {
      tarjeta.style.opacity = 1;
      tarjeta.style.transform = "translateY(0)";
    }, 200 * i);
  });
}

// ===================== REINICIAR ACTIVIDADES =====================
function agregarBotonReinicio() {
  const btn = document.createElement("button");
  btn.textContent = "🔄 Reiniciar Actividades";
  btn.className = "boton-reinicio";
  btn.onclick = () => {
    document.querySelectorAll(".actividad button").forEach((b) => {
      b.disabled = false;
      b.classList.remove("respondido");
      b.style.backgroundColor = "#1e293b";
    });
    puntosActividad = 0;
    preguntasRespondidas = 0;
    const resultado = document.getElementById("puntajeFinal");
    if (resultado) resultado.textContent = "";
  };
  const seccion = document.querySelector("#actividades");
  if (seccion) seccion.appendChild(btn);
}

// ===================== DATO CURIOSO =====================
function mostrarSorpresa() {
  const sorpresa = document.createElement("div");
  sorpresa.textContent =
    "🎁 ¿Sabías que el cóndor de los Andes es el ave nacional de Colombia?";
  sorpresa.style.background = "#ffeaa7";
  sorpresa.style.padding = "15px";
  sorpresa.style.borderRadius = "12px";
  sorpresa.style.margin = "20px auto";
  sorpresa.style.maxWidth = "600px";
  sorpresa.style.textAlign = "center";
  sorpresa.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
  sorpresa.style.fontWeight = "bold";
  setTimeout(() => {
    document.body.appendChild(sorpresa);
  }, 10000);
}

// ===================== VIDEOJUEGO INTERACTIVO (Aventura Colombia) =====================
const preguntas = [
  {
    pista:
      "Es una región montañosa donde están ciudades como Bogotá y Medellín.",
    respuesta: "andina",
  },
  {
    pista: "Es una región cálida, costera, con playas famosas como Cartagena.",
    respuesta: "caribe",
  },
  {
    pista: "Región selvática con gran biodiversidad y presencia indígena.",
    respuesta: "amazonía",
  },
];

let actual = 0;

function cargarPregunta() {
  const contenedor = document.getElementById("preguntaJuego");
  const resultado = document.getElementById("resultadoJuego");
  if (!contenedor || !resultado) return;

  const pregunta = preguntas[actual];
  contenedor.textContent = `📍 ${pregunta.pista}`;
  resultado.textContent = "";
}

function seleccionar(opcion) {
  const correcta = preguntas[actual].respuesta;
  const resultado = document.getElementById("resultadoJuego");
  if (opcion === correcta) {
    resultado.textContent = "✅ ¡Correcto!";
    resultado.style.color = "#10b981";
  } else {
    resultado.textContent = `❌ Incorrecto. Era la región ${correcta}.`;
    resultado.style.color = "#f87171";
  }
}

function siguientePregunta() {
  actual++;
  if (actual >= preguntas.length) {
    document.getElementById("juegoPixel").innerHTML =
      "<h3>🎉 ¡Has completado la Aventura de Colombia!</h3><p>¡Muy bien explorador! 🌎</p>";
  } else {
    cargarPregunta();
  }
}

// ===================== ACTIVIDADES DE SELECCIÓN MÚLTIPLE =====================
let puntosActividad = 0;
let preguntasRespondidas = 0;

function responder(boton, esCorrecta) {
  if (boton.classList.contains("respondido")) return;

  preguntasRespondidas++;
  boton.classList.add("respondido");

  if (esCorrecta) {
    boton.style.backgroundColor = "#10b981"; // verde
    puntosActividad++;
  } else {
    boton.style.backgroundColor = "#ef4444"; // rojo
  }

  // Desactivar todos los botones de esa pregunta
  const grupo = boton.parentElement.querySelectorAll("button");
  grupo.forEach((b) => (b.disabled = true));
}

function mostrarPuntaje() {
  const resultado = document.getElementById("puntajeFinal");
  resultado.textContent = `✅ Obtuviste ${puntosActividad} de ${preguntasRespondidas} respuestas correctas.`;
  resultado.style.color = "#38bdf8";
}
