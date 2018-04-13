<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>物资列表</el-breadcrumb-item>
    </el-breadcrumb>
    <p>剩余资金：{{money}}元</p>
    <el-table
      :data="goodsList"
      style="width: 100%">
      <el-table-column
        prop="goodsName"
        label="物品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsCount"
        label="物品数量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="isXiaoHao"
        label="可消耗">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类别">
      </el-table-column>
      <el-table-column
        prop="size"
        label="规格">
      </el-table-column>
      <el-table-column
        prop="location"
        label="位置">
      </el-table-column>
      <el-table-column
        prop=""
        label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.goodsJpgUrl">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import axios from '../../services/my-axios'
export default {
  data () {
    return {
      goodsList: [{
        goodsId: null,
        goodsName: null,
        goodsCount: null,
        isXiaoHao: null,
        goodsJpgUrl: null
      }],
      money: 2000
    }
  },
  methods: {
    handleDelete (index, row) {
      this.deleteGood(row.goodsId)
    },
    deleteGood (goodId) {
      console.log(`删除物资:ID=${goodId}`)
    }
  },
  mounted () {
    this.goodsList = [{
      goodsId: '1',
      goodsName: '继电器',
      goodsCount: '5',
      isXiaoHao: '消耗品',
      goodsJpgUrl: '../src/assets/logo.png',
      size: '大号',
      type: '类别',
      location: 'A01'
    }]
  }
}
</script>

<style scoped>
img {
  width: 70px;
}
p {
  float: right;
}
</style>
