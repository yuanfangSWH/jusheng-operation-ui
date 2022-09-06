<template>
  <div class="app-container">
    <div class="mb20">
      <el-divider content-position="left">
        <span class="weight">基础信息</span>
      </el-divider>
    </div>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">申请单编号</span>
        <span class="val">{{ form.applyCode }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">托运人</span>
        <span class="val">{{ form.shipperName }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">申请人</span>
        <span class="val">{{ form.nickName }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">申请时间</span>
        <span class="val">{{ form.createTime }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">含管理费总运费</span>
        <span class="val">{{ form.invoiceTotalMoney }}元</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">不含管理费总运费</span>
        <span class="val">{{ moneyDon }}元</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">管理费</span>
        <span class="val">{{ form.serviceCharge }}元</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">总计划装货量</span>
        <span class="val">{{ form.sumPlanWeight }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">业务管理公司</span>
        <span class="val">{{ form.companyName }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">实发重量</span>
        <span class="val">{{ form.sumTransmitNumber }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">实收重量</span>
        <span class="val">{{ form.sumArriveNumber }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">发票备注栏信息</span>
        <span class="val">{{ form.remark }}</span>
      </el-col>
    </el-row>

    <div class="mb20">
      <el-divider content-position="left">
        <span class="weight">运单记录</span>
      </el-divider>
    </div>

    <!-- <div class="mb20 flex transposition">
      <el-select clearable class="mr20" value="" placeholder="运单审核状态">
        <el-option value="1" label="待审核"></el-option>
        <el-option value="1" label="审核通过"></el-option>
        <el-option value="1" label="未上传"></el-option>
        <el-option value="1" label="审核不通过"></el-option>
      </el-select>

      <el-select clearable class="mr20" value="" placeholder="司机审核状态">
        <el-option value="1" label="待审核"></el-option>
        <el-option value="1" label="审核通过"></el-option>
        <el-option value="1" label="审核不通过"></el-option>
      </el-select>

      <el-select clearable size="small " class="mr20" value="" placeholder="车辆审核状态">
        <el-option value="1" label="待审核"></el-option>
        <el-option value="1" label="审核通过"></el-option>
        <el-option value="1" label="审核不通过"></el-option>
      </el-select>

      <el-button type="primary" @click="query">查询</el-button>
      <el-button type="danger" @click="empty">清空</el-button>
    </div> -->
    <div style="margin-bottom: 10px; display: flex">
      <el-button type="warning" @click="exportWaybillRecord">导出</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column prop="carriageId" label="运单编号" width="300px">
        <template slot-scope="data">
          {{ data.row.carriageId }}
          <el-tag type="info" v-if="data.row.checkState == 0">待审核</el-tag>
          <el-tag type="warning" v-else-if="data.row.checkState == 1"
            >审核中</el-tag
          >
          <el-tag type="success" v-else-if="data.row.checkState == 2"
            >审核通过</el-tag
          >
          <el-tag type="danger" v-else-if="data.row.checkState == 3"
            >审核不通过</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="checkState" label="运单状态" width="140px">
        <template slot-scope="data">
          <span v-if="data.row.carriageState == 0" style="color: #909399"
            >草稿</span
          >
          <span v-else-if="data.row.carriageState == 1" style="color: #409eff"
            >已提交</span
          >
          <span v-else-if="data.row.carriageState == 2" style="color: #409eff"
            >已分配承运人</span
          >
          <span v-else-if="data.row.carriageState == 3" style="color: #409eff"
            >已接单</span
          >
          <span v-else-if="data.row.carriageState == 4" style="color: #e6a23c"
            >提货中</span
          >
          <span v-else-if="data.row.carriageState == 5" style="color: #e6a23c"
            >发车中</span
          >
          <span v-else-if="data.row.carriageState == 6" style="color: #409eff"
            >已到达</span
          >
          <span v-else-if="data.row.carriageState == 7" style="color: #e6a23c"
            >卸货中</span
          >
          <span v-else-if="data.row.carriageState == 8" style="color: #67c23a"
            >已签收</span
          >
          <span v-else-if="data.row.carriageState == 9" style="color: #f56c6c"
            >已作废</span
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="shipperFullName"
        label="托运人全称"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="shipperShortName"
        label="托运人简称"
        width="150px"
      ></el-table-column>
      <el-table-column prop="payeeName" label="承运司机" width="150px">
        <template slot-scope="data">
          {{ data.row.payeeName }}
          <i
            class="el-icon-warning"
            v-if="
              data.row.driverAuditStatus == 0 || data.row.driverAuditStatus == 1
            "
          ></i>
          <i
            class="el-icon-success"
            v-else-if="data.row.driverAuditStatus == 2"
          ></i>
          <i
            class="el-icon-error"
            v-else-if="data.row.driverAuditStatus == 3"
          ></i>
        </template>
      </el-table-column>
      <el-table-column prop="vehicleNumber" label="承运车辆" width="150px">
        <template slot-scope="data">
          {{ data.row.vehicleNumber }}
          <i
            class="el-icon-warning"
            v-if="data.row.vehicleAuditStatus == 0"
          ></i>
          <i
            class="el-icon-success"
            v-else-if="data.row.vehicleAuditStatus == 1"
          ></i>
          <i
            class="el-icon-error"
            v-else-if="data.row.vehicleAuditStatus == 2"
          ></i>
        </template>
      </el-table-column>

      <el-table-column label="含管理费运费" width="150px">
        <template slot-scope="data">
          {{ data.row.freightSum + data.row.serviceCharge }}元
        </template>
      </el-table-column>
      <el-table-column prop="freightSum" label="不含管理费运费" width="150px">
        <template slot-scope="scope"> {{ scope.row.freightSum }}元 </template>
      </el-table-column>

      <el-table-column prop="serviceCharge" label="管理费">
        <template slot-scope="scope">
          {{ scope.row.serviceCharge }}元
        </template>
      </el-table-column>

      <el-table-column
        prop="rate"
        label="管理费率"
        width="150px"
      ></el-table-column>

      <el-table-column prop="payState" label="支付状态" width="150px">
        <template slot-scope="data">
          <span v-if="data.row.payState == 0" style="color: #909399"
            >未付款</span
          >
          <span v-else-if="data.row.payState == 1" style="color: #409eff"
            >部分付款</span
          >
          <span v-else-if="data.row.payState == 2" style="color: #67c23a"
            >已结清</span
          >
        </template>
      </el-table-column>

      <el-table-column
        prop="lastTimeOfPayment"
        label="最后付款时间"
        width="160px"
      ></el-table-column>
      <el-table-column
        prop="planPickTime"
        label="计划提货时间"
        width="160px"
      ></el-table-column>
      <el-table-column
        prop="deliverContactsProvince"
        label="装货地"
        width="250px"
      ></el-table-column>
      <el-table-column
        prop="takeContactsProvince"
        label="卸货地"
        width="250px"
      ></el-table-column>
      <el-table-column
        prop="planWeight"
        label="计划装货量"
        width="150px"
      ></el-table-column>
      <el-table-column prop="realityInstallNumber" label="实发量" width="150px">
        <template slot-scope="data">
          {{ data.row.realityInstallNumber
          }}<span v-if="data.row.realityInstallNumberUnit == 0">吨</span>
          <span v-else-if="data.row.realityInstallNumberUnit == 1">方</span>
          <span v-else-if="data.row.realityInstallNumberUnit == 2">件</span>
          <span v-else-if="data.row.realityInstallNumberUnit == 3">整车</span>
        </template>
      </el-table-column>
      <el-table-column prop="realityArriveNumber" label="实收量" width="150px">
        <template slot-scope="data">
          {{ data.row.realityArriveNumber
          }}<span v-if="data.row.realityArriveNumberUnit == 0">吨</span>
          <span v-else-if="data.row.realityArriveNumberUnit == 1">方</span>
          <span v-else-if="data.row.realityArriveNumberUnit == 2">件</span>
          <span v-else-if="data.row.realityArriveNumberUnit == 3">整车</span>
        </template>
      </el-table-column>

      <el-table-column prop="settleWeight" label="结算重量" width="150px">
        <template slot-scope="data">
          <span v-if="data.row.settleWeight == 1">按实际收发量最小结算</span>
          <span v-if="data.row.settleWeight == 2">按实际收发量最大结算</span>
          <span v-if="data.row.settleWeight == 3">按实际发货量结算</span>
          <span v-if="data.row.settleWeight == 4">按实际收货量结算</span>
        </template>
      </el-table-column>

      <el-table-column prop="unitPrice" label="单价">
        <template slot-scope="data"> {{ data.row.unitPrice }}元 </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-center">
      <el-button
        style="margin-top: 30px"
        @click="
          () => {
            this.$router.go(-1);
          }
        "
        >返回</el-button
      >
    </div>
  </div>
</template>

<script>
import { queryInvoiceById, queryCarriagesByApplyCode, exportWaybillRecord } from "@/api/business/invoice"
export default {
  data () {
    return {
      form: {
        applyCode: ""
      },
      tableData: [],
      auditRemark: "",
      auditStatus: 1,
      moneyDon: ""
    }
  },

  created () {
    this.form.applyCode = this.$route.query.applyCode
    this.queryDriverById()
    this.queryCarriagesByApplyCode()
  },

  methods: {
    //导出
    exportWaybillRecord () {
      exportWaybillRecord({ applyCode: this.form.applyCode }).then(res => {
        //通用下载方法
        this.downloadData(res)
      })
    },
    //详情
    queryDriverById () {
      queryInvoiceById({ applyCode: this.form.applyCode }).then((res) => {
        if (res.code == 200) {
          if (res.data) {
            this.form = res.data;
            this.moneyDon = this.form.invoiceTotalMoney - this.form.serviceCharge;
            //处理成只需要2位小数
            if (Number(this.moneyDon) >= 1) {
              this.moneyDon = String(this.moneyDon);
              let group = [];
              if (this.moneyDon.indexOf('.') != -1) {
                group = this.moneyDon.split(".");
                this.moneyDon = group[0] + '.' + group[1].substring(0, 2)
              }
            }
          }
        }
      });
    },

    //对应的运单列表
    queryCarriagesByApplyCode () {
      queryCarriagesByApplyCode({ applyCode: this.form.applyCode }).then(res => {
        if (res.code == 200) {
          this.tableData = res.data;
        }
      })
    }

  }
}
</script>

<style scoped>
.el-divider--vertical {
  width: 5px;
  height: 1.5em;
  background-color: #1890ff;
}

.label {
  color: #333;
  display: inline-block;
  width: 160px;
  text-align: right;
}
.val {
  color: #999;
}
.imgBox {
  height: 500px;
  min-width: 600px;
  width: 100%;
}

.imgs {
  height: 150px;
}
</style>
