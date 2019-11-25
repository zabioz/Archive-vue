<template>

    <GChart
      class="chart"
      type="PieChart"
      :data="chartData"
      :options="chartOptions"
      style="width: 400px; height: 250px;"
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
        ['일본', 33.3],
        ['한국', 58.3],
        ['중국', 8.3],
      ],
      chartOptions:{
              colors:[
                '#E87B76',
                '#F2A999',
                '#DB9A7A'
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

</style>