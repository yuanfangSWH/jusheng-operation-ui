<template>
  <div class="app-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="150px" inline>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">基础信息</span>
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="运单编号">
            {{ form.carriageId }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="运单状态">
            <span v-if="form.carriageState == 0" style="color: #909399"
              >草稿</span
            >
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
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="签收时间">
            {{ form.signForTime }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="是否开票">
            <span v-if="form.ifInvoice == 0">否</span>
            <span v-else-if="form.ifInvoice == 1">是</span>
          </el-form-item></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="关联单号">
            {{ form.relevanceCode }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="开单时间">
            {{ form.billingTime }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="计划提货时间">
            {{ form.planPickTime }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="计划到货时间">
            {{ form.planArrivalTime }}
          </el-form-item></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="托运人">
            {{ form.shipperFullName }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="运输类型">
            <span v-if="form.transportType == 0">陆运</span>
            <span v-else-if="form.transportType == 1">水运</span>
          </el-form-item></el-col
        >
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
      </el-row>

      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">发货方</span>
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6">
          <el-form-item label="发货联系人" label-width="200px">
            {{ form.deliverContacts }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="发货联系人电话" label-width="200px">
            {{ form.deliverContactsPhone }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="发货地区" label-width="200px">
            {{ form.deliverContactsProvince }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="发货街道-门牌号" label-width="200px">
            {{ form.deliverContactsAddress }}
          </el-form-item></el-col
        >
      </el-row>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">收货方</span>
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="收货单位" label-width="200px">
            {{ form.takeContactsCompany }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="收货单位电话" label-width="200px">
            {{ form.takeContactsPhone }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="收货地区" label-width="200px">
            {{ form.takeContactsProvince }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="收货街道-门牌号" label-width="200px">
            {{ form.takeContactsAddress }}
          </el-form-item></el-col
        >
      </el-row>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">货物信息</span>
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="货物名称">
            {{ form.goodsName }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="货物类型">
            <el-select v-model="form.goodsType" class="mr5" disabled>
              <el-option
                v-for="item in cargoData"
                :key="item.dict_value"
                :label="item.dict_label"
                :value="item.dict_value"
              >
              </el-option>
            </el-select> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="计划装货量">
            {{ form.planWeight }}
            <span v-if="form.planWeightUnit == 0">吨</span>
            <span v-else-if="form.planWeightUnit == 1">方</span>
            <span v-else-if="form.planWeightUnit == 2">件</span>
            <span v-else-if="form.planWeightUnit == 3">整车</span>
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="货值">
            {{ form.goodsValue }}元
          </el-form-item></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="合理亏吨">
            {{ form.rationalLossWeight }}
            <span v-if="form.rationalLossWeightUnit == 1">%</span>
            <span v-else-if="form.rationalLossWeightUnit == 2">吨</span>
            <span v-else-if="form.rationalLossWeightUnit == 3">方</span>
            <span v-else-if="form.rationalLossWeightUnit == 4">件</span>
            <span v-else-if="form.rationalLossWeightUnit == 5">整车</span>
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="结算重量">
            <span v-if="form.settleWeight == 1">按实际收发量最小结算</span>
            <span v-else-if="form.settleWeight == 2">按实际收发量最大结算</span>
            <span v-else-if="form.settleWeight == 3">按实际发货量结算</span>
            <span v-else-if="form.settleWeight == 4">按实际收货量结算</span>
          </el-form-item></el-col
        >
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">交易信息</span>
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="单价">
            {{ form.unitPrice }}
            <span v-if="form.unitPriceUnit == 0">元/吨</span>
            <span v-else-if="form.unitPriceUnit == 1">元/方</span>
            <span v-else-if="form.unitPriceUnit == 2">元/件</span>
            <span v-else-if="form.unitPriceUnit == 3">元/车</span>
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="付款方式">
            <span v-if="form.payMethod == 0">现付</span>
            <span v-else-if="form.payMethod == 1">到付</span>
            <span v-else-if="form.payMethod == 2">回单付</span>
            <span v-else-if="form.payMethod == 3">月结</span>
            <span v-else-if="form.payMethod == 4">多笔付</span>
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="亏吨单价">
            {{ form.lossWeightNumber }}
            <span v-if="form.lossWeightNumberUnit == 1">%/车</span>
            <span v-else-if="form.lossWeightNumberUnit == 2">吨/车</span>
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="实装数量">
            {{ form.realityInstallNumber }}
            <span v-if="form.realityInstallNumberUnit == 0">吨</span>
            <span v-else-if="form.realityInstallNumberUnit == 1">方</span>
            <span v-else-if="form.realityInstallNumberUnit == 2">件</span>
            <span v-else-if="form.realityInstallNumberUnit == 3">整车</span>
          </el-form-item></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="实收数量">
            {{ form.realityArriveNumber }}
            <span v-if="form.realityArriveNumberUnit == 0">吨</span>
            <span v-else-if="form.realityArriveNumberUnit == 1">方</span>
            <span v-else-if="form.realityArriveNumberUnit == 2">件</span>
            <span v-else-if="form.realityArriveNumberUnit == 3">整车</span>
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="结算运费">
            {{ form.freightSum }}元
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="货运险方案">
            <span v-if="form.insuranceType == 1">不投保</span>
            <span v-else-if="form.insuranceType == 2">综合险</span>
            <span v-else-if="form.insuranceType == 3">基本险</span>
          </el-form-item></el-col
        >
        <el-col :span="6">
          <div>
            <el-form-item label="总运费">
              <span
                >{{ form.freightSum + form.serviceCharge }}元（服务费：{{
                  form.serviceCharge
                }}元；保险费：0元）</span
              >
            </el-form-item>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="承运司机">
            <el-autocomplete
              v-model="shiState"
              :fetch-suggestions="querySearchAsync1"
              placeholder="手机号搜索"
              @select="handleSelect1"
            ></el-autocomplete> </el-form-item
        ></el-col>
        <el-col :span="6">
          <el-form-item label="承运车辆">
            <el-autocomplete
              v-model="cheState"
              :fetch-suggestions="querySearchAsync"
              placeholder="车牌号模糊搜索"
              @select="handleSelect"
            ></el-autocomplete> </el-form-item
        ></el-col>
        <el-col :span="6"></el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight"
            >第二收款人（<span v-if="dierMust">必填</span
            ><span v-else>选填</span>）</span
          >
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="第二收款人">
            <el-autocomplete
              v-model="dierState"
              :fetch-suggestions="querySearchAsync2"
              placeholder="手机号搜索"
              @select="handleSelect2"
            ></el-autocomplete> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="第二收款人收款金额">
            <el-input
              type="Number"
              placeholder="请输入收款金额（元）"
              v-model="form.drPaymentAmount"
              clearable
            >
            </el-input> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="司机收款金额（元）">
            {{ sjPaymentAmount }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="代收款协议">
            <uploadIMG
              ref="uploadIMG"
              @pictureIMG="pictureIMG"
              @pictureDelete="pictureDelete"
              componentText="添加代收款协议"
              fieldText="agentMoneyAgreement"
            ></uploadIMG> </el-form-item
        ></el-col>
      </el-row>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">其它</span>
        </el-divider>
      </div>
      <el-row>
        <el-col :span="6">
          <el-form-item label="车型要求">
            {{ form.trucksType }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="车长要求">
            {{ form.masterRequire }}
          </el-form-item></el-col
        >
        <el-col :span="6"
          ><el-form-item label="货源码">
            {{ form.supplyGoodsNumber }}
          </el-form-item></el-col
        >
        <el-col :span="6">
          <el-form-item label="备注信息">
            {{ form.remake }}
          </el-form-item></el-col
        >
      </el-row>

      <div class="flex justify-center">
        <el-button
          @click="
            () => {
              this.$router.go(-1);
            }
          "
          >返回</el-button
        >
        <el-button type="primary" @click="updateTransport()"
          >编辑提交</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
import { queryCarriageById, updateTransport, queryDeiver, queryVehicle, querySecondPayment, queryGoodsType } from '@/api/transform/waybill'
import uploadIMG from '@/components/uploadIMG/index'
export default {
  components: {
    uploadIMG
  },
  data () {
    return {
      cargoData: [],
      form: {
        //司机收款金额
        sjPaymentAmount: "",
        //第二收款人金额
        drPaymentAmount: ""
      },
      //编辑提交的司机数据
      shiData: {},
      shiState: "",
      //编辑提交的车辆数据
      cheData: {},
      cheState: "",
      //第二收款人数据
      dierData: {},
      dierState: "",
      //是否必填第二收款人
      dierMust: false,
      //验证
      rules: {
        xxx: [
          { required: true, message: '不能为空' }
        ]
      }
    }
  },
  computed: {
    //司机收款金额(计算)
    sjPaymentAmount: function () {
      var i = Number(this.form.freightSum) - Number(this.form.drPaymentAmount);
      i = Math.round(i)
      i = i + ".00"
      return i
    },
  },
  mounted () {
    this.queryCarriageById();
    this.queryGoodsType();
  },
  methods: {
    //货物类型
    queryGoodsType () {
      queryGoodsType().then((res) => {
        this.cargoData = res;
      })
    },
    //详情查询
    queryCarriageById () {
      queryCarriageById({
        carriageId: this.$store.state.waybill.carriageId
      }).then((res) => {
        if (res.code == 200) {
          this.form = res.data;
          this.shiData = { chauffeurId: this.form.secondPayment }
          this.shiState = this.form.name + "/" + this.form.phone
          this.cheData = { value: this.form.vehicleNumber, vehicleColorCode: this.form.vehicleColorCode }
          this.cheState = this.form.vehicleNumber
          //图片组件初始化
          this.$refs.uploadIMG.originalData(this.form.agentMoneyAgreement);
          //判断是否有第二收款人
          if (this.form.secondPayment && this.form.secondPayment != "") {
            this.dierMust = true;
            this.dierData = { payeeId: this.form.secondPayment, kaihuName: this.form.kaihuName, accountBank: this.form.drPaymentAmount, payeePhone: this.form.payeePhone }
            this.dierState = this.form.kaihuName + "/" + this.form.payeePhone
          }
        }
      });
    },
    //修改保存
    updateTransport () {
      //判断是否订单初始已有第二付款人
      if (this.dierMust) {
        //第二付款人必选
        if (this.dierData == "") {
          this.$message({
            message: '请选择第二收款人',
            type: 'warning',
            duration: 3000
          });
          return
        }
      }
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.shiData?.value) {
            this.form.chauffeurId = this.shiData.chauffeurId
          }
          if (this.cheData?.value) {
            this.form.vehicleNumber = this.cheData.value
          }
          if (this.cheData?.vehicleColorCode) {
            this.form.vehicleColorCode = this.cheData.vehicleColorCode
          }
          if (this.dierData?.payeeId) {
            this.form.payeeId = this.dierData.payeeId
          }
          if (this.dierData?.kaihuName) {
            this.form.kaihuName = this.dierData.kaihuName
          }
          if (this.dierData?.payeePhone) {
            this.form.payeePhone = this.dierData.payeePhone
          }
          let data = {
            //运单ID
            carriageId: this.form.carriageId,
            //司机ID
            chauffeur: this.form.chauffeurId,
            //车牌号
            vehicleNumber: this.form.vehicleNumber,
            //车颜色
            vehicleColorCode: this.form.vehicleColorCode,
            //第二收款人ID
            payeeId: this.form.payeeId,
            //第二收款人姓名
            kaihuName: this.form.kaihuName,
            //第二收款人收款金额
            drPaymentAmount: this.form.drPaymentAmount,
            //第二收款人电话
            payeePhone: this.form.payeePhone,
            //代收协议
            agentMoneyAgreement: this.form.agentMoneyAgreement,
            //结算运费
            freightSum: this.form.freightSum
          }
          updateTransport(data).then((res) => {
            if (res.code == 200) {
              this.$message({
                message: '保存成功',
                type: 'success',
                duration: 3000
              });
              this.$router.push({ path: "/transport/carriageManage" })
            }
          });
        }
      });
    },
    //车辆数据
    handleSelect (item) {
      this.cheData = item;
    },
    //车辆数据
    querySearchAsync (queryString, cb) {
      queryVehicle({ vehicleNumber: queryString }).then((res) => {
        if (res.code == 200) {
          var results = [];
          for (var i of res.data) {
            results.push({
              value: i.vehicleNumber,
              vehicleColorCode: i.vehicleColorCode
            })
          }
          cb(results);
        }
      });
    },
    //司机数据
    handleSelect1 (item) {
      this.shiData = item;
      this.cheState = item.vehicleNumber;
      this.cheData = { value: item.vehicleNumber, vehicleColorCode: item.vehicleColorCode };
    },
    //司机数据
    querySearchAsync1 (queryString, cb) {
      queryDeiver({ phone: queryString }).then((res) => {
        if (res.code == 200) {

          var results = [];
          for (var i of res.data) {
            results.push({
              value: i.name + "/" + i.phone,
              chauffeurId: i.chauffeurId,
              vehicleNumber: i.vehicleNumber,
              vehicleColorCode: i.vehicleColorCode
            })
          }
          cb(results);
        }
      });
    },
    //第二收款人数据
    handleSelect2 (item) {
      this.dierData = item;
    },
    //第二收款人数据
    querySearchAsync2 (queryString, cb) {
      querySecondPayment({ payeePhone: queryString }).then((res) => {
        if (res.code == 200) {
          var results = [];
          for (var i of res.data) {
            results.push({
              value: i.kaihuName + "/" + i.payeePhone,
              payeeId: i.payeeId,
              kaihuName: i.kaihuName,
              accountBank: i.accountBank,
              payeePhone: i.payeePhone
            })
          }
          cb(results);
        }
      });
    },
    //添加图片
    pictureIMG (data) {
      if (data?.agentMoneyAgreement) {
        this.form.agentMoneyAgreement = data.agentMoneyAgreement;
      }
    },
    //删除图片
    pictureDelete (data) {
      this.form[data] = "";
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
.mohshou {
  font-size: 16px;
}
</style>
