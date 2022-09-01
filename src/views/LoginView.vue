<template>
    <div class="home">
      <Login></Login>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import Dashboard from "@/components/DashboardBar.vue";
  
import Login from "@/components/Login.vue";
  export default {
    name: "LoginUI",
  
    components: {
    
    Login
},
  };
  </script>