<template>
    <div class="home">
  <GetAllBooks></GetAllBooks>
  
  </div>
  </template>
  
  <script>
  
import GetAllBooks from '@/components/GetAllBooks.vue';
  // @ is an alias to /src
  export default {
    name: 'GetNote',
    components: {
    GetAllBooks
}
  }
  </script>
  