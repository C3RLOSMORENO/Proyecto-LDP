// Inicializar el mapa
var map = L.map('map').setView([4.5709, -74.2973], 6);  // Coordenadas de Colombia, con zoom inicial

// Cargar la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añadir un marcador en Bogotá
var marker = L.marker([4.6097, -74.0817]).addTo(map);
marker.bindPopup("<b>¡Bienvenidos a Colombia!</b><br>Ubicación: Bogotá").openPopup();

// Función para mostrar el contenido de la pestaña seleccionada
function showTab(tabName) {
    // Primero ocultamos todos los contenidos de las pestañas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
  
    // Luego, mostramos el contenido de la pestaña seleccionada
    document.getElementById(tabName).classList.add('active');
  
    // Cambiamos la clase 'active' de los botones de las pestañas
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = Array.from(buttons).find(button => button.innerText.toLowerCase() === tabName);
    activeButton.classList.add('active');
  }
  