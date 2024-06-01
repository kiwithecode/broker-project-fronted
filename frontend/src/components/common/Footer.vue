<!-- src/components/common/Footer.vue -->
<template>
    <footer class="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      <div class="text-sm">&copy; 2024 Insurance Broker. All rights reserved.</div>
      <nav class="hidden md:flex gap-4">
        <RouterLink to="/terms" class="hover:underline">Terms of Service</RouterLink>
        <RouterLink to="/privacy" class="hover:underline">Privacy Policy</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
      </nav>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  </script>
  
  <style scoped>
  /* Aquí puedes agregar los estilos específicos de este componente */
  </style>
  