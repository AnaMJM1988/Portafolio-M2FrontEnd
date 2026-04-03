<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore()
const router = useRouter()

// Acceso a constantes del store
const user = computed(() => store.state.user)
const authIsReady = computed(() => store.state.authIsReady)

const emit = defineEmits(['cambio-busqueda'])

const busquedaFiltro = ref('')

const handleLogout = async () => {
  await store.dispatch('logout')
  router.push({ name: 'Login' })
}

</script>

<template>
  <nav class="navbar navbar-expand-lg weather-navbar">
    <div class="container">
      <RouterLink class="navbar-brand brand-title" :to="{ name: 'Home' }">El Tiempo</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Búsqueda (filtro) de ciudades -->
      <form class="d-flex mx-lg-4 my-2 my-lg-0">
        <input type="text" placeholder="Ej: Santiago" aria-label="Buscar" class="form-control"
          v-model.trim="busquedaFiltro" @input="$emit('cambio-busqueda', busquedaFiltro)">
      </form>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- ms-auto para que links se muestren a la derecha -->
        <template v-if="authIsReady">
          <ul class="navbar-nav ms-auto align-items-center">
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" :to="{ name: 'Home' }">Inicio</RouterLink>
            </li>
            <template v-if="!user">
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" :to="{ name: 'Login' }">Login</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" :to="{ name: 'Signup' }">Registrarse</RouterLink>
              </li>
            </template>
            <template v-else>
              <p class="small welcome ms-4 mb-0">Hola, {{ user.displayName }}</p>
              <li class="nav-item">
                <RouterLink class="nav-link" active-class="active" :to="{ name: 'Profile' }">Perfil</RouterLink>
              </li>
              <li class="nav-item">
                <button class="btn btn-logout" aria-label="Logout" @click="handleLogout">
                  <Icon icon="lucide:log-out" width="20" height="20" class="text-danger" />
                </button>
              </li>
            </template>
          </ul>
        </template>
        <template v-else>
          <div class="ms-auto spinner-border spinner-border-sm" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.weather-navbar {
  background: rgba(255, 255, 255, 0.84);
  border-bottom: 1px solid #efccda;
  backdrop-filter: blur(10px);
}

.brand-title {
  font-size: 2rem;
  color: #6f2d4d;
}

.nav-link {
  color: #6f2d4d;
  font-weight: 600;
}

.nav-link.active {
  color: #b34f79;
}

.welcome {
  color: #80586a;
}

.btn-logout {
  border-radius: 999px;
  border: 1px solid #efccda;
}
</style>