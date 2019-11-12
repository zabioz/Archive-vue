
    <script src="language_data"></script>
    
<script>
import skillsheet from "../components/skillsheet"
import membertable from "../components/membertable"
import workinfo from "../components/workinfo"
import chart2 from "../components/chart2"
import chart from "../components/chart"
export default {
  components: {
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
      totime:"",
      language_data: require("../nodejs/index.js")
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
