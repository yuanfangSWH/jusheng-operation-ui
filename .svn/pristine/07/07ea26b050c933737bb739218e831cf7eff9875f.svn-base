<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="150px" inline>
      <div class="mb20">
        <el-form-item label="运单编号">
          {{ form.carriageId }}
        </el-form-item>
        <el-form-item label="运单状态">
          <span v-if="form.carriageState == 0">草稿</span>
          <span v-if="form.carriageState == 1">已提交</span>
          <span v-if="form.carriageState == 2">已分配承运人</span>
          <span v-if="form.carriageState == 3">已接单</span>
          <span v-if="form.carriageState == 4">提货中</span>
          <span v-if="form.carriageState == 5">发车中</span>
          <span v-if="form.carriageState == 6">已到达</span>
          <span v-if="form.carriageState == 7">卸货中</span>
          <span v-if="form.carriageState == 8">已签收</span>
          <span v-if="form.carriageState == 9">已作废</span>
        </el-form-item>
        <el-form-item label="签收时间"> {{ form.signForTime }} </el-form-item>
      </div>
      <div>
        <div>
          <el-form-item label="第二收款人运费">
            {{ tableData.drPaymentAmount }}
            <span style="color: #409eff" v-if="tableData.drSettlementOf == 0"
              >状态：未结清</span
            >
            <span style="color: #409eff" v-if="tableData.drSettlementOf == 1"
              >状态：已结清</span
            >
          </el-form-item>
        </div>
        <div>
          <el-form-item label="司机运费">
            {{ tableData.sjPaymentAmount }}
            <span style="color: #409eff" v-if="tableData.sjSettlementOf == 0"
              >状态：未结清</span
            >
            <span style="color: #409eff" v-if="tableData.sjSettlementOf == 1"
              >状态：已结清</span
            ></el-form-item
          >
        </div>
        <div>
          <el-form-item label="油气">
            {{ tableData.oilAndGasCost }}</el-form-item
          >
        </div>
        <div>
          <el-form-item label="ETC"> {{ tableData.etcCost }}</el-form-item>
        </div>
        <div>
          <el-form-item label="平台服务费">
            {{ tableData.serviceCharge }}</el-form-item
          >
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { queryCarriageSettlementInfo } from '@/api/transform/waybill'
export default {
  props: {
    form: Object
  },
  data () {
    return {
      tableData: {},
    }
  },
  mounted () {
    this.queryCarriageSettlementInfo();
  },
  methods: {
    queryCarriageSettlementInfo () {
      let data = {
        carriageId: this.$store.state.waybill.carriageId
      }
      queryCarriageSettlementInfo(data).then(res => {
        if (res.code == 200) {
          this.tableData = res.data
        }
      })
    },
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
