<template>

    <GChart
      class="chart ma-2"
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
    />

</template>
<script>
import { GChart } from 'vue-google-charts';
export default {
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ['contry', 'atai' ],
        ['日本', 33.3],
        ['韓国', 58.3],
        ['中国', 8.3],
      ],
      chartOptions:{
              colors:[
                '#E87B76',
                '#F2A999',
                '#DB9A7A'
                ],
                backgroundColor:{
                    fill:'#424242'
                },
                legend:{
                    textStyle: {color: 'white'}
                }
      }
    };
  }
};
</script>
<style>

.chart{
    width:350px;
    height:400px;
   
}
</style>