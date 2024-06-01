<template>
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li v-for="item in items" :key="item._id">{{ item.name }} - {{ item.age }}</li>
        </ul>
    </div>
  </template>
  
  <script lang="ts" >
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  interface Client {
    _id: string;
    name: string;
    age: number;
  }
  
  export default defineComponent({
    data() {
      return {
        items: [] as Client[]
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/clients');
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    }
  });
  </script>
  
  <style scoped>
  </style>
  