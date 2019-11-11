  <template>
  
  <v-layout text-center>
   <v-flex >

      <div class = "language" style="float:right;">
                <a href = index.html>日本語</a>
                <a href = index.kr.html>한국어</a>
                <a href = index.en.html>English</a>
            </div>
            
    <v-container>
    <v-col>
      <h1> {{head.title}} </h1>
      <h4> {{head.subtitle}} </h4>
    </v-col>
    <v-card class="content" max-width="35%" outlined>
      <li>株式会社アーカイブ</li>
      <li>115-0045 東京都北区赤羽3-22-6-102</li>
      <li>tel:03-5939-4070</li>
      <li>info@archive-asia.co.jp</li>
    </v-card>
    </v-container>
    </v-flex>
  </v-layout>  
</template>

<script>

export default {
 data: function(){
    return {
      head:{
        title: '株式会社アーカイブ',
        subtitle: '進化するエンジニアグループ'
      }
    };
  },
};
</script>
<style>
.language{
  
}
.content {
  padding:0.5em;
  list-style: none;
}
</style>