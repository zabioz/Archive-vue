<template >
  <section class="font">
    <Header/>
    
    <h2>Company Profile</h2>
    <hr>
    <span>In an era of rapid change, we aim to evolve daily as an IT engineer group with high technology and global sense, and to become a company that can grow with you through IT technology.</span>
    <membertable />
    <h2>Organization chart</h2>
    <hr>
    <memberchart />
    <v-img
    position
    max-width="700"
    max-height="1000"
    src="https://zabioz.github.io/Archive_HP/img/4.png"
    > 
    </v-img>
    <h2> History </h2>
    <hr>
    <!--Time Line-->
    <Tline />

    <!-- <v-img
    position
    max-width="800"
    max-height="1100"
    src="https://zabioz.github.io/Archive_HP/img/3.png"
    >
    </v-img> -->
    <h2> Business introduction </h2>
    <hr>
    <workinfo />
    
    <h2>Technical field / nationality of engineers currently belonging to our company</h2>
    <hr>
    
    <span>We call it an Archive style, and we are focusing on developing engineers who can think and act as follows.</span>
    
        <h3>Archive style</h3>
        <v-card class="content" outlined>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Positive Thinking</v-list-item-title>
        <v-list-item-title>Act spontaneously</v-list-item-title>
        <v-list-item-title>Active learning (technical learning) motivation</v-list-item-title>
        <v-list-item-title>Active communication</v-list-item-title>
        <v-list-item-title>Cooperation to grow with friends</v-list-item-title>
        <v-list-item-title>Overwhelming skills that can achieve work content</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
            </v-card>
        <h3>Our engineer's image / technical field etc</h3>
        <hr>
<v-flex row justify-center>
<chart />
<chart2 />
</v-flex>
<h3>Owned skills (language)</h3>
<hr>
<skillsheet />
  </section>
</template>
<script>
import Tline from '../../components/EN/Tline'
import memberchart from '../../components/EN/member_chart'
import Header from '../../components/EN/Header'
import skillsheet from "../../components/EN/skillsheet"
import membertable from "../../components/EN/member_table"
import workinfo from "../../components/EN/workinfo"
import chart2 from "../../components/EN/chart2"
import chart from "../../components/EN/chart"
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
