<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body .el-table th.gutter {
  display: table-cell !important;
}
.el-input--small .el-input__inner {
  height: 36px !important;
}
.paging_css {
  width: 750px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
}
.transposition {
  flex-wrap: wrap;
}
.el-form-item__label {
  color: #000;
  font-weight: bold;
}
.el-dialog__headerbtn .el-dialog__close {
  font-size: 24px;
}
.el-tag {
  margin-left: 4px;
}
.el-icon-warning {
  color: #e6a23c;
  margin-left: 2px;
  font-size: 20px;
}
.el-icon-success {
  color: #67c23a;
  margin-left: 2px;
  font-size: 20px;
}
.el-icon-error {
  color: #f56c6c;
  margin-left: 2px;
  font-size: 20px;
}
</style>
