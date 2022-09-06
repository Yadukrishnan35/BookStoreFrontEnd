<template>
  <div>
    <v-card class="navigation_bar">
      <v-app-bar color="#A03037">
        <div></div>
        <img
          style="padding-left: 130px"
          class="mr-3"
          :src="require('../assets/education.svg')"
          height="35"
        />
        <v-toolbar-title style="padding-left: 10px; color: white"
          >BookStore</v-toolbar-title
        >
        <v-spacer> </v-spacer>
        <div></div>

        <v-col cols="9">
          <v-text-field
            solo
            label="Search"
            prepend-inner-icon="mdi-magnify"
            hide-details
          ></v-text-field>
        </v-col>

        <div class="right_logos">
          <img style="height: 30px" :src="require('../assets/person.svg')" />
          <img style="height: 30px" :src="require('../assets/cart.svg')" />
        </div>
      </v-app-bar>
    </v-card>
    <!-- <GetAllBooks></GetAllBooks> -->
    <router-view></router-view>
  </div>
</template>
  <script>
//import GetAllBooks from './GetAllBooks.vue';
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  // components: { GetAllBooks }
};
</script>
<style>
.navigation_bar {
  margin-top: -60px;
  padding: 0;
  width: 1500px;
  height: 65px;
}
.v-text-field {
  width: 500px;
  padding-right: 100px;
}
.right_logos {
  /* width: 60px; */
  opacity: 0.5;

  display: flex;
  flex-direction: row;
}
.ma-3 {
  padding-left: 10px;
}
</style>