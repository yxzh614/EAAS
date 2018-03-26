<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item> 
      <el-breadcrumb-item>通知信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div slot="header" class="clearfix">
        <span>{{title}}</span>
      </div>
      <div>
        {{detail}}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '标题',
      detail: '内容'
    }
  },
  props: [
    'id'
  ]
}
</script>

<style>

</style>
