<script setup>
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()
</script>

<template>
  <div v-if="!authStore.token">
    <span @click="authStore.setToken('oui')">Login</span>
  </div>
  <div v-else>
    <span @click="authStore.logout()">Logout</span>
  </div>

  {{ authStore.token }}

</template>