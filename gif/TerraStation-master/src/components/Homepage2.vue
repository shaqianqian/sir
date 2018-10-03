<template>
  <el-container>

    <el-header>
      <h2>Terrauime Station2</h2></el-header>
    <navigation/>


    <div class="line"></div>
    <sidebar></sidebar>
    <el-main>
      <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    </el-main>
    <div class="line"></div>
    <myfooter/>
  </el-container>
</template>

<script>
  import sidebar from '@/components/sidebar';
  import navigation from '@/components/navigation';
  import myfooter from '@/components/myfooter'
  var echarts = require('echarts');



  export default {
    name: 'HelloWorld',
    components: {sidebar, navigation, myfooter},

    data() {

    },
    // mounted(){
    //   this.drawLine();
    // },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          title: {text: '在Vue中使用echarts'},
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
