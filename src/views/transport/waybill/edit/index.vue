<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="基础信息">
        <Basic></Basic>
      </el-tab-pane>
      <el-tab-pane label="附件信息">
        <Settlement></Settlement>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Basic from './basic/index'
import Settlement from './settlement/index'
export default {
  components: {
    Basic,
    Settlement,
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {

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
