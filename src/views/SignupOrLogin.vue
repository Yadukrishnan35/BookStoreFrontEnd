<template>
    <div class="home">
      <registerOrLog></registerOrLog>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import registerOrLog from '@/components/RegisterOrLogin.vue'
  export default {
    name: 'LoginUser',
    components: {
      registerOrLog
    }
  }
  </script>