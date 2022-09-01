<template>
    <div class="home">
      <ForgetPassword></ForgetPassword>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import Dashboard from "@/components/DashboardBar.vue";
  

import ForgetPassword from "@/components/ForgetPassword.vue";
  export default {
    name: "LoginUI",
  
    components: {
    
    ForgetPassword
},
  };
  </script>