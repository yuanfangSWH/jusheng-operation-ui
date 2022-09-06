<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="基础信息">
        <Basic></Basic>
      </el-tab-pane>
      <el-tab-pane label="承运信息">
        <Carriage></Carriage>
      </el-tab-pane>
      <el-tab-pane label="操作日志">
        <Operating></Operating>
      </el-tab-pane>
    </el-tabs>


  </div>
</template>

<script>
import Basic from './basic/index'
import Carriage from './carriage/index'
import Operating from './operating/index'
export default {
  data(){

    return {
      form:{},
    }
  },
  components:{
    Basic,
    Carriage,
    Operating
  },
  methods:{

  }
}
</script>

<style scoped>
.el-divider--vertical {
  width: 5px;
  height: 1.5em;
  background-color: #1890ff;
}
</style>
