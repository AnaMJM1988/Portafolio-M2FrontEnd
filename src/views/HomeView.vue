<script setup>
import { ref, onMounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import WeatherApp from '@/services/WeatherApp';
import { getWeatherIcon } from '@/utils/weatherIcons';

const props = defineProps({
  busqueda: String
})

const weather = new WeatherApp()

const climas = ref([])
const tempSystem = ref(true)

const tempDisplay = computed(() => {
  return tempSystem.value ? 'Celsius' : 'Fahrenheit'
})

const climasFiltrados = computed(() => {
  return climas.value.filter(clima => clima.location.name.toLowerCase().includes(props.busqueda.toLowerCase()))
})

const lugares = [
  'Valparaiso',
  'La Serena',
  'Viña del Mar',
  'Pucón',
  'Puerto Varas',
  'Punta Arenas'
]

// Consumo de la API
onMounted(async () => {
  await weather.fetchWeather(lugares)
  climas.value = weather.weather
  console.log(climas.value)
})
</script>

<template>
  <main class="container my-4">
    <h1 class="text-center page-title">Reporte del tiempo en Chile</h1>
    <!-- Elegir si mostrar la temp en C o F -->
    <div class="form-check form-switch switch-box">

      <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked
        v-model="tempSystem">
      <label class="form-check-label" for="switchCheckChecked">{{ tempDisplay }}</label>
    </div>
    <div class="row row-cols-1 row-cols-md-4 row-cols-lg-6 g-4 justify-content-center" id="lugares">
      <!-- Acá se insertarán dinámicamente los lugares -->
      <TransitionGroup name="slide-fade">
        <div class="col" v-for="lugar in climasFiltrados" :key="`${lugar.location.lat}-${lugar.location.lon}`">
          <div class="card h-100 text-center city-card">
            <Icon
              :icon="getWeatherIcon(lugar.current.condition.text).icon"
              class="weather-icon"
              :style="{ color: getWeatherIcon(lugar.current.condition.text).color }"
            />
            <div class="card-body">
              <h5 class="card-title">{{ lugar.location.name }}</h5>
              <p class="card-text">{{ tempSystem ? `${lugar.current.temp_c}°C` : `${lugar.current.temp_f}°F` }}</p>
              <p class="card-text">{{ lugar.current.condition.text }}</p>
            </div>
            <div class="card-footer bg-transparent border-0">
              <RouterLink class="card-link" :to="{ name: 'Detalle', params: { ciudad: lugar.location.name } }">Ver
                detalle
              </RouterLink>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </main>
</template>

<style scoped>
.page-title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  color: #5f2744;
}

.switch-box {
  width: fit-content;
  margin: 0 auto 1rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid #efccda;
}

.city-card .card-title {
  font-size: 1.35rem;
  color: #5f2744;
}

.city-card .card-text {
  color: #6f4a5c;
}

.weather-icon {
  width: 66px;
  height: 66px;
  margin: 1rem auto 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>