<template>
  <v-app >
    <Header/>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer>
    <v-flex row justify-center class="footer">
    <li>株式会社アーカイブ</li>
    <li>115-0045 東京都北区赤羽3-22-6-102</li>
    <li>tel:03-5939-4070</li>
    <li>info@archive-asia.co.jp</li>
    </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '../components/Header'
export default {
  components: {
      Header,
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