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
    <el-carousel :autoplay="false" height="650px" indicator-position="outside">
      <el-carousel-item>
        <h3>学生评价统计</h3>
        <iframe src="h.html" width="700px" height="500px" frameborder="0"></iframe>
      </el-carousel-item>
      <el-carousel-item>
        <div id="attendChart"></div>
      </el-carousel-item>
    </el-carousel>
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
        {trainId: '', trainName: ''}
      ],
      attendChart: null,
      heatChart: null,
      lineChart: null
    }
  },
  methods: {
    handleChange (e) {
      this.selected = true
      // this.setAttendChart()
      // this.setHeatChart()
      axios.getCiYun(e).then(_ => {
        if (_.data.status === 'ok') {
          this.signList = _.data.result
        }
      })
      axios.getChuXi(e).then(_ => {
        axios.getRSSI(e).then(_2 => {
          this.setAttendChart(_.data.result.chuxi, _.data.result.weichuxi, _2.data.result.ximienum, _2.data.result.allnum - _2.data.result.ximienum)
        })
      })
    },
    setAttendChart (chuxi, weichuxi, ximie, dianliang) {
      let attendChartOption = {
        color: ['#448aff', '#ff5252', '#e040fb', '#69f0ae', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
        title: {
          text: '活动分析',
          subtext: '到场比例图                                                                                  手机亮屏占比图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        series: [
          {
            name: '到场情况',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data: [
                {value: chuxi, name: '出席'},
                {value: weichuxi, name: '未出席'}
            ]
          },
          {
            name: '亮屏比例',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'radius',
            data: [
              {value: ximie, name: '熄灭'},
              {value: dianliang, name: '点亮'}
            ]
          }
        ]
      }
      this.attendChart.setOption(attendChartOption)
    }
  },
  mounted () {
    this.attendChart = echarts.init(document.getElementById('attendChart'))
    axios.getTrainList().then(_ => {
      this.trainList = _.data.result
    })
    this.train = this.trainList[0]
    axios.getChuXi(this.trainList[0].trainId).then(_ => {
      this.setAttendChart(_.data.result.chuxi, _.data.result.weichuxi)
    })
    window.onload = () => { this.selected = false }
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
#attendChart {
  width: 1000px;
  height: 550px;
  margin-left: 0px;
}
.el-carousel {
  width: 100%;
  height: 700px;
  text-align: center;
}
</style>
