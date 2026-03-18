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

//Obtener el ID enviado por parametro en la URL

const urlParams = new URLSearchParams(window.location.search);

//Extraer los id de los parámetros
const locationId = urlParams.get('id');
//console.log(locationId);

//2. Filtrar el lugar del array a partir del ID
const lugarEncontrado=()=> {
  const lugar=lugares.find((lugar) => {
    console.log(`Buscando en array lugares en el lugar con id: ${locationId}`);
      return lugar.id ==locationId;
});

return lugar;
};

//Ejecutar la función a través de su ID para obtener el lugar encontrado
const ciudadActual=lugarEncontrado();

// Cappturar contenedor de información del lugar
const LugarContainer=document.getElementById("lugar");

const mostrarLugar=()=>{
  const content =`
          <div class="card mb-3">
  <div class="row g-0">
    <div class="col-lg-4 d-flex justify-content-center align-items-center">
      <i class="bi ${ICONOS[ciudadActual.estadoActual]}" style="font-size: 90px"></i>
    </div>
    <div class="col-lg-8">
      <div class="card-body">
        <h2 class="card-title">${ciudadActual.nombre}</h2>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">${ciudadActual.estadoActual}</li>
           <li class="list-group-item">Temperatura: ${ciudadActual.tempActual}°C </li>
           
        </ul>
        <p class="card-text"><small class="text-body-secondary">Última actualización hace 3 minutos</small></p>
      </div>
    </div>
  </div>
</div>
`;

  LugarContainer.innerHTML=content;

};
mostrarLugar();
//mostrar sección de pronóstico semanal
const pronosticoContainer = document.getElementById('pronosticoSemanal');
console.log(ciudadActual.pronosticoSemanal);
ciudadActual.pronosticoSemanal.forEach((dia)=>{
  const content =`
          <li class="list-group-item">
              <i class="bi ${ICONOS[dia.estado]}"></i> ${dia.dia} : ${dia.max}°C
              </li>
`;
pronosticoContainer.innerHTML += content;
});
//TODO: mostrar estsadísticas semanales.