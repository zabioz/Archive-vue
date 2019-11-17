<template class="font">
  <section class="container">
    <Header/>
    <hr>
    <h2>会社概要</h2>
    <span>変化が激しい時代において、当社は高い技術力とグローバル感覚を併せ持ったＩＴエンジニア集団として日々進化し、ＩＴ技術を通じて皆様と共に成長できる会社になることを目指しています。</span>
    <membertable />
    <h2>組織図</h2>
    <span @click="wordtime">
      tt {{today}}  
    </span>
    <span @click="startime">
      ss {{totime}}
    </span>
    <v-img
    position
    max-width="700"  
    max-height="1000"
    src="https://zabioz.github.io/Archive_HP/img/4.png"
    >
    </v-img>
    <h2> 沿革 </h2>
    <v-img
    position
    max-width="800"  
    max-height="1100"
    src="https://zabioz.github.io/Archive_HP/img/3.png"
    >
    </v-img>
    <h2> 事業紹介 </h2>
    <workinfo />
    
    <h2>当社のエンジニア人物像／技術分野等</h2>
    <span>当社はアーカイブスタイルと称し、以下のような考え・行動ができるエンジニアの育成に力を入れています。</span>
    
        <h3>アーカイブスタイル</h3>
        <v-card class="content" outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>ポジティブシンキング（Positive Thinking）</v-list-item-title>
        <v-list-item-title>自発的に行動</v-list-item-title>
        <v-list-item-title>盛んな学習（技術学習）意欲</v-list-item-title>
        <v-list-item-title>積極的なコニュニケーション</v-list-item-title>
        <v-list-item-title>仲間と一緒に成長する協力性</v-list-item-title>
        <v-list-item-title>業務内容を達成できる圧倒的なスキル</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
            </v-card>
        
<v-flex row justify-center>
<chart />
<chart2 />
</v-flex>
<h3>保有スキル（言語）</h3>
<skillsheet />
  <v-footer>
    <v-flex row justify-center class="footer">
      <li>株式会社アーカイブ</li>
      <li>115-0045 東京都北区赤羽3-22-6-102</li>
      <li>tel:03-5939-4070</li>
      <li>info@archive-asia.co.jp</li>
    </v-flex>
  </v-footer>
  </section>
</template>
<script>
import Header from '../components/Header'
import skillsheet from "../components/skillsheet"
import membertable from "../components/membertable"
import workinfo from "../components/workinfo"
import chart2 from "../components/chart2"
import chart from "../components/chart"
export default {
  components: {
      Header,
      skillsheet,
      chart2,
      chart,
      workinfo,
      membertable,
      },  
  data: function(){
    return {
      title: '株式会社アーカイブ',
      subtitle: '進化するエンジニアグループ',
      today:"",
      totime:""
    }
  },
  // created: function(){
  //   setInterval(() => {
  //     const today = new Date();
  //     this.today = today.getHours() + ":" +today.getMinutes() + ":" + today.getSeconds()
  //   })
  // },
  
  methods:{
    
  }
}

</script>
<style>
.content{
    height:auto;
    word-break: break-all;
}
h2{
  padding:0.5em
}
h3{
  padding:0.5em
}
span{
  padding:1em;
}
.font{
  font-family: 'Hiragino Kaku Gothic ProN' 'sans-serif' 'Arial';
}
</style>
