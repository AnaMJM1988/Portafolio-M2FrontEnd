import lugares from "./lugares.js";
//Manejo del DOM con JS
 
//Manejo de Evento
var cardLinks = document.querySelectorAll(".card-link");
//console.log(cardLinks);
cardLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    window.location.href = "./detalle.html";
  });
});

//Iconos para los estados del tiempo, se agregar dinamicamente dependiendo del estado actual del clima
const ICONOS = {
  Soleado: "bi bi-brightness-high ",
  Lluvioso: "bi bi-cloud-drizzle ",
  "Nubosidad parcial": "bi bi-cloud-sun",
  Tormenta: "bi bi-cloud-lightning-rain",
  Nublado: "bi bi-cloudy",
};

//Mostrar los lugares en el Index.html
const lugaresContainer = document.getElementById("lugares");

const mostrarLugares = () => {
  lugares.forEach((lugar) => {
    const tarjeta = `
         <div class="col">
    <div class="card text-center">
      <i class="bi ${ICONOS[lugar.estadoActual]} card__icon"></i>
      <div class="card-body">
        <h5 class="card-title">${lugar.nombre}</h5>
        <p class="card-text">${lugar.tempActual}°C</p>
        <p class="card-text">${lugar.estadoActual}</p>
      </div>
      <div class="card-body">
        <a class="card-link" href="./detalle.html?id=${lugar.id}">Ver detalle</a> 
      </div>      
     </div>
 </div>
        `;

    lugaresContainer.innerHTML += tarjeta;//Se va a ir agregando cada tarjeta por cada lugar que haya en el array lugares
  });
};

mostrarLugares();