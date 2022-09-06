<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { scrollTo } from '@/utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    //总数据量
    total: {
      required: true,
      type: Number
    },
    //页码
    page: {
      type: Number,
      default: 1
    },
    //每页显示的个数
    limit: {
      type: Number,
      default: 10
    },
    //显示数据选择器
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30]
      }
    },
    //组件布局,子组件名用逗号分隔
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    //分页按钮背景色
    background: {
      type: Boolean,
      default: true
    },
    //
    autoScroll: {
      type: Boolean,
      default: true
    },
    //是否显示分页
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    //计算属性-页码
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    //计算属性-每页显示条目个数
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    }
  },
  methods: {
    //pageSize 每页条数改变时会触发
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    //currentPage 当前页改变时会触发
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 32px 16px;
}
.pagination-container.hidden {
  display: none;
}
/deep/.el-input {
  min-width: 0px;
}
/deep/.el-select > .el-input {
  width: 150px;
}
</style>
