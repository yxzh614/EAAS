<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>添加资金记录</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form class="half-form" label-width="70px">
      <el-form-item label="原因">
        <el-input type="text" v-model="form.reason"></el-input>
      </el-form-item>
      <el-form-item label="金额">
        <el-input-number v-model="form.cost" @change="changeNum" :min="0" :max="9999" :step="0.01" label="金额"></el-input-number>
      </el-form-item>
      <el-form-item label="方式">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onSubmit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import myAxs from '../../services/my-axios'
export default {
  data () {
    return {
      form: {
        reason: '',
        cost: 0,
        type: 'sr'
      },
      options: [
        {
          label: '收入',
          value: 'sr'
        },
        {
          label: '支出',
          value: 'zc'
        }
      ]
    }
  },
  methods: {
    changeNum () {
      console.log(this.num)
    },
    onSubmit () {
      myAxs.newMoney(this.form).then(_ => {
        let data = _.data
        console.log(data)
        this.$message({
          message: '成功添加了资金记录！',
          type: 'success'
        })
        this.$router.push({name: 'GoodMoneyRecord'})
      })
    }
  }
}
</script>

<style scoped>
.el-input-number {
  width: 50%;
  margin-left: 25%;
}
.el-select {
  width: 50%;
  margin-left: 25%;
}
.el-form {
  margin-top: 130px;
}
.el-button {
  width: 30%;
  margin-left: 35%;
}
</style>
