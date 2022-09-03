<template>
    <div class="home">
      <ResetPassword></ResetPassword>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import Dashboard from "@/components/DashboardBar.vue";
  

import ResetPassword from "@/components/ResetPassword.vue";

  export default {
    name: "ResetPasswordUI",
  
    components: {
    
    ResetPassword
},
  };
  </script>