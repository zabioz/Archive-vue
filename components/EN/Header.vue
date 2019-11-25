<template >
  <v-layout text-center class="font">
   <v-flex >
     <!--language menu-->
     <v-menu >
       <template v-slot:activator="{on}">
         <v-icon style="float:right;" v-on="on">mdi-web</v-icon>
         </template>
         <v-list>  
         <v-list-item
          v-for="(language, index) in language_list"
          :key="index"
          @click="click_language(index)"
         > 
         <v-list-item-title>
           {{language.title}}
         </v-list-item-title>
         </v-list-item>
         </v-list>
      </v-menu>
      <!--logo-->
     <v-img max-width="30%" max-height="30%" src="https://github.com/zabioz/Archive-vue/blob/Dev_test/assets/img/logo.png?raw=true" />
   <!--title-->
    <v-col>
      <h1> {{head.title}} </h1>
      <h4> {{head.subtitle}} </h4>
    </v-col>
    <!---->
    <v-card class="content" outlined dark style="background-color:#5b88ee">
      <v-row justify="space-around">
        <v-col xs="4">
       <v-icon>mdi-map-marker</v-icon>
     <li>〒115-0045 Akabane Kita-ku, Tokyo 3-22-6-102</li>
     </v-col>
     <v-col xs="4">
      <v-icon>mdi-cellphone-iphone</v-icon>
      <li>03-5939-4070</li>
     </v-col>
     <v-col xs="4">
      <v-icon>mdi-email-outline</v-icon>
      <li>info@archive-asia.co.jp</li>
     </v-col>
     </v-row>
    </v-card>
    </v-flex>
  </v-layout>  
</template>

<script>

export default {
 data: () =>({
      head:{
        title: "Archive Corporation",
        subtitle: "We are an evolving group of engineers"
      },

      language_list: [
        {title: "日本語"},
        {title: "한국어"},
        {title: "English"}
      ],
  }),
methods:{
  click_language(index){
    if(index == 0){
      this.$router.push(`/`)
    } else if(index == 1){
      this.$router.push(`/KR`)
    } else {
      this.$router.push(`/EN`)
    }
    
    
  }
}
};
</script>
<style>
h1{
  font-size:35px;
   color:rgba(0, 0, 0, 0.87);
}
h4{
  color:rgba(0, 0, 0, 0.54);
}

.font{
  font-family: 'Hiragino Kaku Gothic ProN'
}
.content {
  list-style: none;
}
</style>