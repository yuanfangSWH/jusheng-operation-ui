<template>
  <div class="app-container">
    <div class="ti">
      <el-timeline>
        <el-timeline-item
          v-for="(item, index) in activities"
          :key="index"
          :timestamp="item.operationTime"
          color="#409eff"
        >
          {{ item.companyName }} - {{ item.nickName }}：{{ item.operationType }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { queryOperationLog } from '@/api/transform/waybill'
export default {
  data () {
    return {
      activities: []
    }
  },
  mounted () {
    this.queryOperationLog();
  },
  methods: {
    queryOperationLog () {
      let data = {
        carriageId: this.$store.state.waybill.carriageId
      }
      queryOperationLog(data).then(res => {
        if (res.code == 200) {
          this.activities = res.data
        }
      })
    },
  }
}
</script>

<style scoped>
</style>
