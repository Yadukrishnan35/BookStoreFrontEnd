<template>
    <div class="home">
      <Dashboard></Dashboard>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  //import Dashboard from "@/components/DashboardBar.vue";
  import Dashboard from "@/components/DashboardBar.vue"
  export default {
    name: "DashboardUI",
  
    components: {
      Dashboard,
    },
  };
  </script>