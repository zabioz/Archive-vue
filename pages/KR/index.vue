<template >
  <section class="font">
    <Header/>
    
    <h2>주식회사<hr></h2>
    
    <span>変化が激しい時代において、当社は高い技術力とグローバル感覚を併せ持ったＩＴエンジニア集団として日々進化し、ＩＴ技術を通じて皆様と共に成長できる会社になることを目指しています。</span>
    <membertable />
    <h2>組織図<hr></h2>
    <memberchart />
    <v-img
    position
    max-width="700"
    max-height="1000"
    src="https://zabioz.github.io/Archive_HP/img/4.png"
    > 
    </v-img>
    <h2> 沿革 <hr></h2>
    <!--Time Line-->
    <Tline />

    <!-- <v-img
    position
    max-width="800"
    max-height="1100"
    src="https://zabioz.github.io/Archive_HP/img/3.png"
    >
    </v-img> -->
    <h2> 事業紹介 <hr></h2>
    
    <workinfo />
    
    <h2>当社のエンジニア人物像／技術分野等<hr></h2>
    
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
<h3>保有スキル（言語）<hr></h3>

<skillsheet />
  </section>
</template>
<script>
import Tline from '../../components/KR/Tline'
import memberchart from '../../components/KR/member_chart'
import Header from '../../components/KR/Header'
import skillsheet from "../../components/KR/skillsheet"
import membertable from "../../components/KR/member_table"
import workinfo from "../../components/KR/workinfo"
import chart2 from "../../components/KR/chart2"
import chart from "../../components/KR/chart"
export default {
  components: {
      Tline,
      memberchart,
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
      subtitle: '進化するエンジニアグループ'
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
  padding:0.5em;
  color:rgba(0, 0, 0, 0.87);
}
h3{
  padding:0.5em;
   color:rgba(0, 0, 0, 0.87);
}
span{
  padding:1em;
  color:rgba(0, 0, 0, 0.54);
}
.font{
  font-family: 'Hiragino Kaku Gothic ProN';
}
hr{
  background-color:rgba(0, 0, 0, 0.205);
  border:none;
  height:1px;
}
</style>
