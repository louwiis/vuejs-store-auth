<script setup>
import { RouterView } from 'vue-router'
import DefaultNavbar from '@/components/DefaultNavbar.vue'

</script>

<template>
  <DefaultNavbar />
  <main>
    <RouterView />
  </main>
</template>