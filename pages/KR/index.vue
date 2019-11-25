<template >
  <section class="font">
    <Header/>
    
    <h2>회사소개<hr></h2>
    
    <span>변화가 심한 시대에 우리는 높은 기술력과 글로벌 감각을 겸비한 IT 엔지니어 집단으로 나날이 발전하고 IT 기술을 통해 여러분과 함께 성장할 수있는 회사가 될 것을 목표로하고 있습니다.</span>
    <membertable />
    <h2>조직도<hr></h2>
    <memberchart />
    <h2> 연혁 <hr></h2>
    <!--Time Line-->
    <Tline />
    <h2> 사업소개 <hr></h2>
    
    <workinfo />
    
    <h2>당사의 엔지니어 인물 / 기술 분야 등<hr></h2>
    
    <span>당사는 아카이브 스타일이라 칭하고 다음과 같은 생각과 행동을 하는 엔지니어의 육성에 힘을 쏟고 있습니다.</span>
    
        <h3>아카이브 스타일</h3>
        <v-card class="content" outlined color="#5b88ee">
    <v-list-item class="white">
      <v-list-item-content>
        <v-list-item-title>긍정적 사고 (Positive Thinking)</v-list-item-title>
        <v-list-item-title>자발적 행동</v-list-item-title>
        <v-list-item-title>활발한 학습(기술 교육)의욕</v-list-item-title>
        <v-list-item-title>적극적인 커뮤니케이션</v-list-item-title>
        <v-list-item-title>동료와 함께 성장하는 협력성</v-list-item-title>
        <v-list-item-title>업무 내용을 달성 할 수있는 압도적인 스킬</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
            </v-card>
    <h3>현재 당사에 소속 된 엔지니어의 기술 분야 / 국적</h3>
    <hr>
    <v-flex row justify-center>
    <chart />
    <chart2 />
    </v-flex>
<h3>보유 기술 (언어)<hr></h3>

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
      title: '',
      subtitle: ''
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
.v-list-item-content{
  padding:3px;
}

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
  margin:0.2em;
  background-color:#5b88ee;
  border:none;
  height:1px;
}
</style>
