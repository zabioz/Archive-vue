<template >
  <v-layout text-center class="font">
   <v-flex >
     <!--language menu-->
     <v-menu >
       <template v-slot:activator="{on}">
         <v-icon style="float:right;" v-on="on">language</v-icon>
         </template>
         <v-list>  
         <v-list-item
          v-for="(language, index) in language_list"
          :key="index"
          @click=""
         > 
         <v-list-item-title>
           {{language.title}}
         </v-list-item-title>
         </v-list-item>
         </v-list>
      </v-menu>
      <!--logo-->
     <v-img max-width="35%" src="http://archive-asia.co.jp/wp-content/uploads/2016/12/logo-e1482967707769.jpg" />
   <!--title-->
    <v-col>
      <h1> {{head.title}} </h1>
      <h4> {{head.subtitle}} </h4>
    </v-col>
    <!---->
    <v-card class="content" outlined dark style="background-color:#5b88ee">
      <v-row justify="space-around">
        <v-col xs="4">
       <v-icon>location_on</v-icon>
     <li>〒115-0045東京都北区赤羽3-22-6-102</li>
     </v-col>
     <v-col xs="4">
      <v-icon>phone_iphone</v-icon>
      <li>03-5939-4070</li>
     </v-col>
     <v-col xs="4">
      <v-icon>mail_outline</v-icon>
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
        title: "株式会社アーカイブ",
        subtitle: "進化するエンジニアグループ"
      },

      language_list: [
        {title: "日本語"},
        {title: "한국어"},
        {title: "English"}
      ],
  }),
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