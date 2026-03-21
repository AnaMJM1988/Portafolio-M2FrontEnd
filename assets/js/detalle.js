import lugares from "./lugares.js";

// Marcar enlace activo en el navbar
var links = document.querySelectorAll('.nav-link');

links.forEach(function(link) {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
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
/*const lugarEncontrado=()=> {
  const lugar=lugares.find((lugar) => {
    console.log(`Buscando en array lugares en el lugar con id: ${locationId}`);
      return lugar.id ==locationId;
});

return lugar;
};
*/
const lugarEncontrado = () => {
  // Aseguramos que locationId sea un número antes de comparar
  const lugar = lugares.find((lugar) => {
    console.log(`Buscando en array lugares, lugar con id: ${locationId}`);
    return lugar.id === Number(locationId); // Convertimos locationId a número antes de la comparación
  });

  return lugar;
};
//Ejecutar la función a través de su ID para obtener el lugar encontrado
const ciudadActual = lugarEncontrado();

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
//console.log(ciudadActual.pronosticoSemanal);
ciudadActual.pronosticoSemanal.forEach((dia)=>{
  const content =`
          <li class="list-group-item">
              <i class="bi ${ICONOS[dia.estado]}"></i> ${dia.dia} : ${dia.max}°C
              </li>
`;
pronosticoContainer.innerHTML += content;
});
//TODO: mostrar estsadísticas semanales.
//5. Obtener estadísticas semanales y resumir datos

// 5.1 Capturar elementos de la tabla (td -> table datacell)
const minTempContainer = document.getElementById('minTemp')
const maxTempContainer = document.getElementById('maxTemp')
const avTempContainer = document.getElementById('avTemp')

// Función para formaterar Números decimales que en vez de puntos tengan comas
const formatFloatNumber = (num)=>{
  return num.toLocaleString('es-CL')
};
   
const definirEstadoPredominante = (conteoEstados) => {
    let estadoPredominante;

    if(
        (conteoEstados.Soleado || 0) > (conteoEstados.Nublado || 0) &&
        (conteoEstados.Soleado || 0) > (conteoEstados.Lluvioso || 0) &&
        (conteoEstados.Soleado || 0) > (conteoEstados['Nubosidad parcial'] || 0) &&
        (conteoEstados.Soleado || 0) > (conteoEstados.Tormenta || 0)
    ){
        estadoPredominante = 'Soleado';
    } else if(
        (conteoEstados.Nublado || 0) > (conteoEstados.Soleado || 0) &&
        (conteoEstados.Nublado || 0) > (conteoEstados.Lluvioso || 0) &&
        (conteoEstados.Nublado || 0) > (conteoEstados['Nubosidad parcial'] || 0) &&
        (conteoEstados.Nublado || 0) > (conteoEstados.Tormenta || 0)
    ){
        estadoPredominante = 'Nublado';
    } else if(
        (conteoEstados.Lluvioso || 0) > (conteoEstados.Soleado || 0) &&
        (conteoEstados.Lluvioso || 0) > (conteoEstados.Nublado || 0) &&
        (conteoEstados.Lluvioso || 0) > (conteoEstados['Nubosidad parcial'] || 0) &&
        (conteoEstados.Lluvioso || 0) > (conteoEstados.Tormenta || 0)
    ){
        estadoPredominante = 'Lluvioso';
    } else if(
        (conteoEstados['Nubosidad parcial'] || 0) > (conteoEstados.Soleado || 0) &&
        (conteoEstados['Nubosidad parcial'] || 0) > (conteoEstados.Nublado || 0) &&
        (conteoEstados['Nubosidad parcial'] || 0) > (conteoEstados.Lluvioso || 0) &&
        (conteoEstados['Nubosidad parcial'] || 0) > (conteoEstados.Tormenta || 0)
    ){
        estadoPredominante = 'de Nubosidad parcial';
    } else if (
        (conteoEstados.Tormenta|| 0) > (conteoEstados.Soleado || 0) &&
        (conteoEstados.Tormenta|| 0) > (conteoEstados.Nublado || 0) &&
        (conteoEstados.Tormenta || 0) > (conteoEstados.Lluvioso || 0) &&
        (conteoEstados.Tormenta|| 0) > (conteoEstados['Nubosidad parcial'] || 0)
    ){
        estadoPredominante = 'de Tormenta';
    }else{
      estadoPredominante = 'variado'
    }

    return estadoPredominante;
};


// 5.2 Función para caocular estadísticas, devolverá un objeto con los resultados
const estadisticasPronostico = () => {
  // 5.2.1 obtener temperatura mínima semanal
  const temperaturasMinimas = ciudadActual.pronosticoSemanal.map((dia)=>dia.min);
  //console.log(temperaturasMinimas)
  const minimaSemanal = Math.min(...temperaturasMinimas);
  console.log(minimaSemanal);
  
  // 5.2.2 obtener temperatura máxima semanal
  const temperaturasMaximas = ciudadActual.pronosticoSemanal.map((dia)=>dia.max);
  //console.log(temperaturasMaximas)
  
  const maximaSemanal = Math.max(...temperaturasMaximas);
  // 5.2.3 calcular promedio de temperaturas semanales
  const sumaTemperaturasMaximas = temperaturasMaximas.reduce((acumulador,actual)=> acumulador + actual, 0);

  // promedio = sumaElementos / cantidadElementos 
  let promedioSemanal = parseFloat( 
  (sumaTemperaturasMaximas / temperaturasMaximas.length).toFixed(2));
  //TODO: crear un mensaje resumen de las estadísticas: canntidad de días por tipo de clima, resumen textual 
  // 5.2.4: Calcular conteo de días por estado del clima
  const estadosSemanal = ciudadActual.pronosticoSemanal.map((dia)=>dia.estado);
  //console.log(estadosSemanal);
  const estadosUnicos = [... new Set(estadosSemanal)]
  //console.log(estadosUnicos);
  const conteoEstados = {}

  estadosUnicos.forEach((estado)=>{
    conteoEstados[estado] = ciudadActual.pronosticoSemanal.filter(
      (dia)=>dia.estado===estado

    ).length;
  //console.log(conteoEstados);
  });
//5.2.5 Determinar estado predominante (el más frecuente) de la semana

const estadoPredominante = definirEstadoPredominante(conteoEstados);
  return{
    minimaSemanal,
    maximaSemanal,
    promedioSemanal: formatFloatNumber(promedioSemanal),
    conteoEstados,
    estadoPredominante,
    };
  
  };
const estadisticas = estadisticasPronostico();
minTempContainer.textContent = estadisticas.minimaSemanal;
maxTempContainer.textContent = estadisticas.maximaSemanal;
avTempContainer.textContent = estadisticas.promedioSemanal;
  
console.log(estadisticas);


//Usar el conteo de estados de la función estadisticasPronostico
//5.2.6 Crear resumen textual 
const generarMensajeResumen = (estado, tempMax, tempMin)=>{
  return `Semana con clima  ${estado}. La temperatura máxima de la semana fue ${tempMax}°C, la mínima de ${tempMin}°C.`;
};

const mensajeResumen = generarMensajeResumen(
  estadisticas.estadoPredominante, 
  estadisticas.maximaSemanal, 
  estadisticas.minimaSemanal
);

console.log(generarMensajeResumen);

const containerMensajeResumen = document.getElementById('resumen')

containerMensajeResumen.innerHTML =`<p class = "text-muted">${mensajeResumen}</p>`

const encabezadosTablaEstadistica = document.getElementById(
  'titulosEstadistica'
);

const contenidoTablaEstadistica = document.getElementById(
  'filaEstadistica'
);

//Ocupar conteo de estados de la función estadísticaPronostico
Object.entries(estadisticas.conteoEstados)
  .forEach(([estado, contador])=>{
  encabezadosTablaEstadistica.innerHTML += `<th scope="col">Días ${estado}</th>`;
  contenidoTablaEstadistica.innerHTML += `<th>${contador}</th>`;
});