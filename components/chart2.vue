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
        ['group', 'atai' ],
        ['PM', 46.7],
        ['PG', 20.0],
        ['SE', 33.3],
      ],
      chartOptions:{
              colors:[
                '#5F7DE8',
                '#61A5ED',
                '#65BEDB'
                ],
                backgroundColor:{
                    fill:'transparent'
                },
                legend:{
                    textStyle: {color: '#1C1F24'}
                }
      }
    };
  }
};
</script>
<style>
.chart{
    width: 350px;
    height: 400px;  
}
</style>