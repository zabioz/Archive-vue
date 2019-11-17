<template>
  <v-app >
    <v-flex class="pa-5">
    <v-content>
        <nuxt />
    </v-content>
    </v-flex>
  </v-app>
</template>

<script>

export default {
  components: {

      }, 
  data () {
    return {
      title:{
        
      },
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>

.footer li{
  padding:0.3em;
  list-style: none;
}
</style>