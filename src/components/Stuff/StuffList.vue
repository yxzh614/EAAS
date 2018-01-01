<template>
  <div>
    <el-card v-for="stuff in dataList" :key='stuff.stuffID' class="box-card">
      <div slot="header" class="clearfix">
      <span>{{stuff.name}}</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="goDetail(stuff.stuffID)">详细信息</el-button>
      </div>
      <div v-for="(o, key) in stuff" :key="o" class="text item">
        {{key}}:{{o}}
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'StuffList',
  data () {
    return {
      msg: '2233',
      dataList: [
        {
          stuffID: 1,
          name: 'stuff1',
          information: 'info1',
          memberAmount: 100
        },
        {
          stuffID: 2,
          name: 'stuff1',
          information: 'info1',
          memberAmount: 100
        },
        {
          stuffID: 3,
          name: 'stuff1',
          information: 'info1',
          memberAmount: 100
        },
        {
          stuffID: 4,
          name: 'stuff1',
          information: 'info1',
          memberAmount: 100
        },
        {
          stuffID: 5,
          name: 'stuff1',
          information: 'info1',
          memberAmount: 100
        },
        {
          stuffID: 6,
          name: 'stuff1',
          information: 'info1',
          memberAmount: 100
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goDetail: function (ID) {
      this.$router.push({path: '/Stuff/Dept/' + ID})
    }
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
  }
</style>
