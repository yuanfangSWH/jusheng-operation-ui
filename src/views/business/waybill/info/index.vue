<template>
  <div class="app-container">
    <div class="mb20">
      <el-divider content-position="left">
        <span class="weight">基本信息</span>
      </el-divider>
    </div>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">运单编号</span>
        <span class="val">{{ form.carriageId }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">运单状态</span>
        <span v-if="form.carriageState == 0" style="color: #909399">草稿</span>
        <span v-else-if="form.carriageState == 1" style="color: #409eff"
          >已提交</span
        >
        <span v-else-if="form.carriageState == 2" style="color: #409eff"
          >已分配承运人</span
        >
        <span v-else-if="form.carriageState == 3" style="color: #409eff"
          >已接单</span
        >
        <span v-else-if="form.carriageState == 4" style="color: #e6a23c"
          >提货中</span
        >
        <span v-else-if="form.carriageState == 5" style="color: #e6a23c"
          >发车中</span
        >
        <span v-else-if="form.carriageState == 6" style="color: #409eff"
          >已到达</span
        >
        <span v-else-if="form.carriageState == 7" style="color: #e6a23c"
          >卸货中</span
        >
        <span v-else-if="form.carriageState == 8" style="color: #67c23a"
          >已签收</span
        >
        <span v-else-if="form.carriageState == 9" style="color: #f56c6c"
          >已作废</span
        >
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">签收时间</span>
        <span class="val">{{ form.signForTime }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">托运人</span>
        <span class="val">{{ form.shipperFullName }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">运输类型</span>
        <span v-if="form.transportType == 0">陆运</span>
        <span v-else-if="form.transportType == 1">水运</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">是否开票</span>
        <span v-if="form.ifInvoice == 0">不开</span>
        <span v-else-if="form.ifInvoice == 1">开</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">承运司机</span>
        <span class="val">{{ form.name }}/{{ form.phone }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">承运车辆</span>
        <span class="val">{{ form.vehicleNumber }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">运费收款人</span>
        <span class="val">{{ form.name }}/{{ form.phone }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">第二收款人</span>
        <span
          class="val"
          v-if="
            form.secondPayment != '' && String(form.anotherPayeeName) != 'null'
          "
          >{{ form.kaihuName }}/{{ form.payeePhone }}</span
        >
        <span class="val" v-else>无</span>
      </el-col>
    </el-row>
    <div class="mb20">
      <el-divider content-position="left">
        <span class="weight">货物信息</span>
      </el-divider>
    </div>
    <el-row class="ma20">
      <el-col :span="4">
        <span class="mr20 label">发货联系人</span>
        <span class="val">{{ form.deliverContacts }}</span>
      </el-col>
      <el-col :span="8">
        <span class="mr20 label">发货地</span>
        <span class="val"
          >{{ form.deliverContactsProvince
          }}{{ form.deliverContactsAddress }}</span
        >
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">计划提货时间</span>
        <span class="val">{{ form.planPickTime }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="4">
        <span class="mr20 label">收货单位</span>
        <span class="val">{{ form.takeContactsCompany }}</span>
      </el-col>
      <el-col :span="8">
        <span class="mr20 label">到货地</span>
        <span class="val"
          >{{ form.takeContactsProvince }}{{ form.takeContactsAddress }}</span
        >
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">计划到货时间</span>
        <span class="val">{{ form.planArrivalTime }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="4">
        <span class="mr20 label">货物名称</span>
        <span class="val">{{ form.goodsName }}</span>
      </el-col>
      <el-col :span="8">
        <span class="mr20 label">实际提货时间</span>
        <span class="val">{{ form.planPickTime }}</span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">实际到货时间</span>
        <span class="val">{{ form.planArrivalTime }}</span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="12">
        <span class="mr20 label">装货量</span>
        <span class="val">
          计划装货量：{{ form.planWeight
          }}<span v-if="form.planWeightUnit == 0">吨</span>
          <span v-else-if="form.planWeightUnit == 1">方</span>
          <span v-else-if="form.planWeightUnit == 2">件</span>
          <span v-else-if="form.planWeightUnit == 3">整车</span>
          ， 实装数量：{{ form.realityInstallNumber
          }}<span v-if="form.realityInstallNumberUnit == 0">吨</span>
          <span v-else-if="form.realityInstallNumberUnit == 1">方</span>
          <span v-else-if="form.realityInstallNumberUnit == 2">件</span>
          <span v-else-if="form.realityInstallNumberUnit == 3">整车</span>
          实收数量：{{ form.realityArriveNumber
          }}<span v-if="form.realityArriveNumberUnit == 0">吨</span>
          <span v-else-if="form.realityArriveNumberUnit == 1">方</span>
          <span v-else-if="form.realityArriveNumberUnit == 2">件</span>
          <span v-else-if="form.realityArriveNumberUnit == 3">整车</span>，
          结算重量：<span v-if="form.settleWeight == 1"
            >按实际收发量最小结算</span
          >
          <span v-else-if="form.settleWeight == 2">按实际收发量最大结算</span>
          <span v-else-if="form.settleWeight == 3">按实际发货量结算</span>
          <span v-else-if="form.settleWeight == 4">按实际收货量结算</span>
        </span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">货物类型</span>
        <span class="val"
          ><el-select v-model="form.goodsType" class="mr5" disabled>
            <el-option
              v-for="item in cargoData"
              :key="item.dict_value"
              :label="item.dict_label"
              :value="item.dict_value"
            >
            </el-option> </el-select
        ></span>
      </el-col>
    </el-row>
    <el-row class="ma20">
      <el-col :span="6">
        <span class="mr20 label">单价</span>
        <span class="val"
          >{{ form.unitPrice }}
          <span v-if="form.unitPriceUnit == 0">元/吨</span>
          <span v-else-if="form.unitPriceUnit == 1">元/方</span>
          <span v-else-if="form.unitPriceUnit == 2">元/件</span>
          <span v-else-if="form.unitPriceUnit == 3">元/车</span>
        </span>
      </el-col>
      <el-col :span="6">
        <span class="mr20 label">结算运费</span>
        <span class="val">{{ form.freightSum }}元</span>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <div class="mb20">
      <el-divider content-position="left">
        <span class="weight">收发货凭证</span>
      </el-divider>
    </div>
    <div style="margin: 80px 0">
      <div class="xianshutt">
        <el-carousel
          ref="slideCarousel"
          height="560px"
          indicator-position="none"
          arrow="always"
          :autoplay="false"
        >
          <el-carousel-item v-for="(item, key) in urls" :key="key">
            <div style="width: 100%">
              <viewer>
                <img
                  style="
                    width: 100%;
                    height: 500px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                  "
                  :src="item.url"
                />
              </viewer>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="biants">
        <div class="hengdiv" v-for="(item, key) in urls" :key="key">
          <el-image
            fit="contain"
            :src="item.url"
            @click="getImg(key)"
            class="imgs"
          ></el-image>
          <div class="lims">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div v-show="keyData == 1">
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">审核</span>
        </el-divider>
      </div>
      <div style="margin-left: 50px; margin-bottom: 40px; padding-top: 40px">
        风险控制：<span style="color: #f56c6c">{{
          form.riskControlRemake
        }}</span>
      </div>
      <div style="margin-left: 50px; margin-bottom: 40px">
        审核结果：
        <el-radio-group v-model="form.checkState">
          <el-radio :label="2">审核通过</el-radio>
          <el-radio :label="3">审核不通过</el-radio>
        </el-radio-group>
      </div>
      <div
        style="margin-left: 50px; width: 400px; padding-bottom: 20px"
        v-if="form.checkState == 3"
      >
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入审核内容"
          v-model="form.checkRemake"
        >
        </el-input>
      </div>
    </div>
    <div v-show="keyData == 0">
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">审核</span>
        </el-divider>
      </div>
      <div style="margin-left: 50px; margin-bottom: 40px; padding-top: 40px">
        风险控制：<span style="color: #f56c6c">{{
          form.riskControlRemake
        }}</span>
      </div>
      <div style="margin-left: 50px; margin-bottom: 40px">
        审核结果：
        <span v-if="form.checkState == 2">审核通过</span>
        <span v-if="form.checkState == 3">审核不通过</span>
      </div>
      <div
        style="margin-left: 50px; width: 400px; padding-bottom: 20px"
        v-if="form.checkState == 3"
      >
        {{ form.checkRemake }}
      </div>
    </div>
    <div class="flex justify-center">
      <el-button
        @click="
          () => {
            this.$router.go(-1);
          }
        "
        >返回</el-button
      >
      <el-button v-show="keyData == 1" type="primary" @click="carriageAudit"
        >提交</el-button
      >
    </div>
  </div>
</template>

<script>
import { queryCarriageById, carriageAudit, queryGoodsType } from '@/api/business/waybill'
export default {
  data () {
    return {
      cargoData: [],
      form: {
        carriageId: "",
        checkState: "",
        checkRemake: "",
      },
      keyData: 0,
      urls: [],
      rules: {
        xxx: [
          { required: true, message: '不能为空' }
        ]
      }
    }
  },
  created () {
    this.form.carriageId = this.$route.query.carriageId
    this.keyData = this.$route.query.keyData
    this.queryDriverById();
    this.queryGoodsType();
  },

  mounted () {

  },

  methods: {
    //货物类型
    queryGoodsType () {
      queryGoodsType().then((res) => {
        this.cargoData = res;
      })
    },
    //审核
    carriageAudit () {
      if (this.form.checkState == "") {
        this.$message({
          message: "请选择审核码",
          type: "warning",
          duration: 2000,
        });
        return;
      }
      if (this.form.checkState == 3 && this.form.checkRemake == "") {
        this.$message({
          message: "审核内容不能为空",
          type: "warning",
          duration: 2000,
        });
        return;
      }
      let data = {
        auditState: this.form.checkState,
        checkRemake: this.form.checkRemake,
        carriageIdList: String(this.form.carriageId),
      };
      carriageAudit(data).then((res) => {
        if (res.code == 200) {
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        }
        this.$router.push({ path: "/business/carriageAudit" })
      });
    },
    //详情
    queryDriverById () {
      queryCarriageById({ carriageId: this.form.carriageId }).then((res) => {
        if (res.code == 200) {
          this.form = res.data;
          //处理图片
          if (this.form?.goodsDocuments) {
            this.form.goodsDocuments = this.form.goodsDocuments.split(",")
            for (let url of this.form.goodsDocuments) {
              this.urls.push({
                name: '装货图片',
                value: 'goodsDocuments',
                url: url
              })
            }
          }
          if (this.form?.unloadDocuments) {
            this.form.unloadDocuments = this.form.unloadDocuments.split(",")
            for (let url of this.form.unloadDocuments) {
              this.urls.push({
                name: '卸货图片',
                value: 'unloadDocuments',
                url: url
              })
            }
          }
          if (this.form?.otherDocuments) {
            this.form.otherDocuments = this.form.otherDocuments.split(",")
            for (let url of this.form.otherDocuments) {
              this.urls.push({
                name: '其他单据',
                value: 'otherDocuments',
                url: url
              })
            }
          }
        }
      });
    },
    //切换图片
    getImg (key) {
      this.$refs.slideCarousel.setActiveItem(key)
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

.label {
  color: #333;
  display: inline-block;
  width: 180px;
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
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.xianshutt {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.biants {
  width: 90%;
  height: 220px;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  background-color: #f8f8f8;
}
.hengdiv {
  float: left;
  width: 200px;
  height: 200px;
  cursor: pointer;
  margin-left: 20px;
}
.lims {
  width: 100%;
  bottom: 2px;
  left: 0;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>
