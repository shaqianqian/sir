<template>

  <el-container direction="horizon">
    <h1>Terrauime Station</h1>
  <el-header>
    <h2>Sonde</h2>
  </el-header>
    <el-container>
  <!--<navigation/>-->

    <sidebar>
    </sidebar>
    <el-main>

      <div id="main" style=" margin-left:300px; width: 650px;height:430px;" >

      </div>

    </el-main>
    </el-container>
  <div class="line"></div>
   <myfooter/>
  </el-container>
</template>

<script>
  import sidebar from '@/components/sidebar';
  import navigation from '@/components/navigation';
  import myfooter from '@/components/myfooter'



  export default {
  name: 'HelloWorld',
  components: {sidebar,navigation,myfooter},

  data () {

  },
  methods(){

  },
    mounted(){
      var echarts = require('echarts');

      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption({
          title : {
            text: 'temperature',
            // subtext: '纯属虚构'
          },
          tooltip : {
            trigger: 'axis'
          },
          toolbox: {
            show : true,
            feature : {
              mark : {show: true},

              legend: {
                data:['max','min']
              },   dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['lundi','mecredi','mardi','jeudi','vendredi','samedi','dimanche']
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel : {
                formatter: '{value} °C'
              }
            }
          ],
          series : [
            {
              name:'max',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint : {
                data : [
                  {type : 'max', name: 'max'},
                  {type : 'min', name: 'min'}
                ]
              },
              markLine : {
                data : [
                  {type : 'average', name: 'average'}
                ]
              }
            },
            {
              name: 'min',
              type: 'line',
              data: [1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: 'min_week', value: -2, xAxis: 1, yAxis: -1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: 'average'}
                ]
              }

            }]
      }


      );


    }
}
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
.el-header {
  background-color: rgb(84,92,100);
  color: #ffffff;
  text-align: center;
  /*line-height: 60px;*/
  /*border-style: solid;*/
  border-bottom-color: aliceblue;
  border-bottom-width: 1px;
  border-bottom-style: solid;

}


</style>
