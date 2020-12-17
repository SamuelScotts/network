<template>
  <v-app style=" background: #FEC0AA">
      <!-- <Nav/> -->
      <Body/>
  </v-app>
</template>

<script>

  //import Nav from "../components/Nav.vue"
  import Body from "../components/Body.vue"

  export default {
    name: 'Home',

    components:{
      //Nav,
      Body,
    },

    data: () => ({

    }),
  }

</script>