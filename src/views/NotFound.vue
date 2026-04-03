<script setup>

</script>

<template>
  <div class="text-center not-found">
    <h1>404 - Página no encontrada</h1>
    <p>La página a la que intentas acceder no existe.</p>
    <router-link :to="{ name: 'Home' }">Volver al inicio</router-link>
  </div>
</template>

<style scoped>
.not-found {
  max-width: 640px;
  margin: 4rem auto;
  padding: 2rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid #efccda;
  box-shadow: 0 14px 40px rgba(135, 67, 96, 0.14);
}

h1 {
  color: #5f2744;
}
</style>