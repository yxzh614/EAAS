<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动统计</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select @change="handleChange" v-model="train" placeholder="请选择培训">
      <el-option
        v-for="train in trainList"
        :key="train.trainId"
        :label="train.trainName"
        :value="train.trainId">
      </el-option>
    </el-select>
    <el-carousel :autoplay="false" v-show="selected" height="550px" indicator-position="outside">
      <el-carousel-item>
        <h3>学生评价统计</h3>
        <iframe src="h.html" width="500px" height="300px" frameborder="0"></iframe>
      </el-carousel-item>
      <el-carousel-item>
        <div class="chartWarp">
          <div id="attendChart"></div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="chartWarp">
          <div id="heatChart"></div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div v-show="!selected" id="lineChart"></div>
  </div>
</template>

<script>
import axios from '../../services/my-axios'
import echarts from 'echarts'
export default {
  data () {
    return {
      train: null,
      selected: true,
      ciy: true,
      CiYunUrl: '',
      trainList: [
        {}
      ],
      attendChart: null,
      heatChart: null,
      lineChart: null
    }
  },
  methods: {
    handleChange (e) {
      this.selected = true
      this.setAttendChart()
      this.setHeatChart()
      axios.getCiYun(e).then(_ => {
        if (_.data.status === 'ok') {
          this.signList = _.data.result
        }
      })
    },
    setAttendChart () {
      let attendChartOption = {
        title: {
          text: '活动出席比例',
          // subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['出席', '未出席']
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {
                value: (Math.random() * 1000).toFixed(),
                name: '出席',
                itemStyle: {
                  color: '#00e5ff'
                }
              },
              {
                value: (Math.random() * 1000).toFixed(),
                name: '未出席',
                itemStyle: {
                  color: '#f50057'
                }
              }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.attendChart.setOption(attendChartOption)
    },
    setHeatChart () {
      let X = []
      let Y = []
      for (let i = 1; i <= 20; i++) {
        X.push(i.toString())
        Y.push(i.toString())
      }
      var data = []
      for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
          if (i > 17) {
            data.push([i, j, (Math.random() * 100).toFixed()])
          } else {
            if (j > 3 && j < 17) {
              data.push([i, j, (Math.random() * 100 * 2).toFixed()])
            } else {
              data.push([i, j, (Math.random() * 70).toFixed()])
            }
          }
        }
      }
      data = data.map(function (item) {
        return [item[1], item[0], item[2] || '-']
      })
      let heatChartOption = {
        title: {
          text: '培训区域热力图',
          // subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          position: 'top'
        },
        animation: false,
        grid: {
          height: '75%',
          y: '10%'
        },
        xAxis: {
          type: 'category',
          data: X,
          splitArea: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: Y,
          splitArea: {
            show: true
          }
        },
        visualMap: {
          min: 0,
          max: 200,
          calculable: true,
          orient: 'horizontal',
          left: 'center',
          bottom: '5%'
        },
        series: [{
          name: '坐标',
          type: 'heatmap',
          data: data,
          label: {
            normal: {
              show: true
            }
          },
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      }
      this.heatChart.setOption(heatChartOption)
    },
    setLineChart () {
      let option = {
        title: {
          text: '培训到场汇总',
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
      this.lineChart.setOption(option)
    }
  },
  mounted () {
    this.attendChart = echarts.init(document.getElementById('attendChart'))
    this.heatChart = echarts.init(document.getElementById('heatChart'))
    this.lineChart = echarts.init(document.getElementById('lineChart'))
    this.setAttendChart()
    this.setHeatChart()
    this.setLineChart()
    // axios.getTrainList().then(_ => {
    //   if (_.data.status === 'ok') {
    //     this.trainList = _.data.result
    //   }
    // })
    this.trainList = [
      {
        trainId: 1,
        trainName: '2018春季第1次培训'
      },
      {
        trainId: 2,
        trainName: '2018春季第2次培训'
      },
      {
        trainId: 3,
        trainName: '2018春季第3次培训'
      }
    ]
    window.onload = () => { this.selected = false }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
#attendChart {
  width: 500px;
  height: 400px;
  margin-left: 300px;
}
#heatChart {
  width: 700px;
  height: 550px;
  margin-left: 15%;
}
#lineChart {
  width: 700px;
  height: 550px;
  margin-left: 100px;
}
#chartWarp {
  width: 500px;
  height: 300px;
  text-align: center;
}
.el-carousel {
  width: 100%;
  height: 700px;
  text-align: center;
}
</style>
