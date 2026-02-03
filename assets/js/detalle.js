//Manejo del DOM con JS
 
//Manejo de Evento
var cardLinks = document.querySelectorAll(".card-link");
//console.log(cardLinks);
cardLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    window.location.href = "./detalle.html";
  });
});

//Array de lugares: contendrá un listado de ciudades (mínimo 5)
const lugares = [
  {
    id: 1,
    nombre: "La Serena",
    tempActual: 20,
    estadoActual: "Nubosidad parcial",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 10,
        max: 20,
        estado: "Nublado",
      },
      {
        dia: "Martes",
        min: 15,
        max: 24,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Miércoles",
        min: 22,
        max: 25,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 12,
        max: 18,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 15,
        max: 18,
        estado: "Lluvioso",
      },
      {
        dia: "Sábado",
        min: 19,
        max: 22,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Domingo",
        min: 21,
        max: 27,
        estado: "Soleado",
      },
    ],
  },

  {
    id: 2,
    nombre: "Santiago",
    tempActual: 35,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 20,
        max: 30,
        estado: "Soleado",
      },
      {
        dia: "Martes",
        min: 12,
        max: 18,
        estado: "Nublado",
      },
      {
        dia: "Miércoles",
        min: 20,
        max: 29,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 20,
        estado: "Nublado",
      },
      {
        dia: "Viernes",
        min: 20,
        max: 26,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 13,
        max: 20,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Domingo",
        min: 18,
        max: 28,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 3,
    nombre: "Valparaíso",
    tempActual: 17,
    estadoActual: "Nublado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 13,
        max: 21,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Martes",
        min: 10,
        max: 17,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Miércoles",
        min: 20,
        max: 25,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 12,
        max: 23,
        estado: "Nublado",
      },
      {
        dia: "Viernes",
        min: 13,
        max: 17,
        estado: "Lluvioso",
      },
      {
        dia: "Sábado",
        min: 14,
        max: 20,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Domingo",
        min: 21,
        max: 30,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 4,
    nombre: "Viña del Mar",
    tempActual: 28,
    estadoActual: "Soleado",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 16,
        max: 30,
        estado: "Soleado",
      },
      {
        dia: "Martes",
        min: 15,
        max: 24,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Miércoles",
        min: 14,
        max: 17,
        estado: "Nublado",
      },
      {
        dia: "Jueves",
        min: 20,
        max: 26,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 20,
        max: 22,
        estado: "Nublado",
      },
      {
        dia: "Sábado",
        min: 17,
        max: 28,
        estado: "Soleado",
      },
      {
        dia: "Domingo",
        min: 23,
        max: 31,
        estado: "Soleado",
      },
    ],
  },
  {
    id: 5,
    nombre: "Rancagua",
    tempActual: 12,
    estadoActual: "Nubosidad parcial",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 9,
        max: 15,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Martes",
        min: 16,
        max: 20,
        estado: "Nublado",
      },
      {
        dia: "Miércoles",
        min: 22,
        max: 28,
        estado: "Soleado",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 26,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Viernes",
        min: 21,
        max: 27,
        estado: "Soleado",
      },
      {
        dia: "Sábado",
        min: 19,
        max: 23,
        estado: "Nublado",
      },
      {
        dia: "Domingo",
        min: 12,
        max: 16,
        estado: "Lluvioso",
      },
    ],
  },
  {
    id: 6,
    nombre: "Chiloe",
    tempActual: 13,
    estadoActual: "Tormenta",
    pronosticoSemanal: [
      {
        dia: "Lunes",
        min: 15,
        max: 17,
        estado: "Lluvioso",
      },
      {
        dia: "Martes",
        min: 13,
        max: 15,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Miércoles",
        min: 9,
        max: 13,
        estado: "Tormenta",
      },
      {
        dia: "Jueves",
        min: 15,
        max: 22,
        estado: "Soleado",
      },
      {
        dia: "Viernes",
        min: 13,
        max: 18,
        estado: "Lluvioso",
      },
      {
        dia: "Sábado",
        min: 8,
        max: 15,
        estado: "Nubosidad parcial",
      },
      {
        dia: "Domingo",
        min: 17,
        max: 26,
        estado: "Soleado",
      },
    ],
  },
];

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
const locationId = urlParams.get("id");
//console.log(locationId);

//Filtrar el lugar del array a partir del ID
const LugarEncontrado=lugares.find((lugar)=> lugar.id==locationId)
console.log(LugarEncontrado);

// Cappturar contenedor de información del lugar
const LugarContainer=document.getElementById('lugar');

const mostrarLugar=()=>{
  const content =`
          <div class="card mb-3">
  <div class="row g-0">
    <div class="col-lg-4 d-flex justify-content-center align-items-center">
      <i class="bi ${ICONOS[LugarEncontrado.estadoActual]}" style="font-size: 90px"></i>
    </div>
    <div class="col-lg-8">
      <div class="card-body">
        <h2 class="card-title">${LugarEncontrado.nombre}</h2>
         <ul class="list-group list-group-flush">
           <li class="list-group-item">${LugarEncontrado.estadoActual}</li>
           <li class="list-group-item">Temperatura: ${LugarEncontrado.tempActual}°C </li>
           
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