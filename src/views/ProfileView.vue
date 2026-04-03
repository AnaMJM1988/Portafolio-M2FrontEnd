<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const user = computed(() => store.state.user)

/* 
displayName
email
emailVerified
uid
*/

const estadoVerificacion = computed(() => {
  return user.emailVerified ? 'Tu email está verificado' : 'Tu email no ha sido verificado'
})
</script>

<template>
  <main class="container my-5">
    <h1 class="mb-3 profile-title">Bienvenido a tu perfil, {{ user.displayName }}</h1>
    <div class="border rounded-3 p-4 shadow-sm d-inline-block profile-card">
      <h2>Tus datos:</h2>
      <p>Email: {{ user.email }}</p>
      <p :class="user.emailVerified ? 'text-success' : 'text-danger'">{{ estadoVerificacion }}</p>
      <p>Id de Usuario: {{ user.uid }}</p>
    </div>

  </main>
</template>

<style scoped>
.profile-title {
  color: #5f2744;
}

.profile-card {
  background: rgba(255, 255, 255, 0.84);
  border-color: #efccda !important;
}
</style>