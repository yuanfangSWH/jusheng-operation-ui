<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="150px" inline>
      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">基础信息</span>
        </el-divider>
      </div>
      <el-form-item label="车牌号" prop="vehicleNumber">
        {{ form.vehicleNumber }}
      </el-form-item>
      <el-form-item label="车牌颜色" prop="vehicleColor">
        <el-select
          clearable
          size="small mr5"
          v-model="form.vehicleColor"
          placeholder="请选择车牌颜色"
          disabled
        >
          <el-option
            v-for="(item, key) in vehicleColor_Data"
            :key="key"
            :label="item.dictLabel"
            :value="item.dictValue"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="外廓尺寸(mm)" prop="vehicleSize">
        {{ form.vehicleSize }}
      </el-form-item>
      <el-form-item label="车辆总质量类型" prop="qualityType">
        <el-select
          clearable
          size="small mr5"
          v-model="form.qualityType"
          placeholder="选择总质量类型"
          disabled
        >
          <el-option label="4.5吨及以下" :value="0"></el-option>
          <el-option label="4.5吨以上" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="整备质量(kg)" prop="tonnage">
        {{ form.tonnage }}
      </el-form-item>
      <el-form-item label="准牵引总质量(kg)" prop="hzdQuality">
        {{ form.hzdQuality }}
      </el-form-item>
      <el-form-item label="车辆分类" prop="vehicleType">
        {{ cheState }}
      </el-form-item>
      <el-form-item label="牌照类型" prop="vehicleNumberType">
        <el-select
          clearable
          size="small mr5"
          v-model="form.vehicleNumberType"
          placeholder="请选择牌照类型"
          disabled
        >
          <el-option label="大型汽车号牌" :value="0"></el-option>
          <el-option label="小型汽车号牌" :value="1"></el-option>
          <el-option label="其他号牌" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="车辆所有人" prop="master">
        {{ form.master }}
      </el-form-item>
      <el-form-item label="车辆识别代码" prop="vehicleCode">
        {{ form.vehicleCode }}
      </el-form-item>
      <el-form-item label="车轴数(含悬浮轴)" prop="axleAmount">
        <el-select
          clearable
          size="small mr5"
          v-model="form.axleAmount"
          placeholder="请选择车轴数"
          disabled
        >
          <el-option label="二轴" :value="0"></el-option>
          <el-option label="三轴" :value="1"></el-option>
          <el-option label="四轴" :value="2"></el-option>
          <el-option label="五轴" :value="3"></el-option>
          <el-option label="六轴" :value="4"></el-option>
          <el-option label="六轴以上" :value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="使用性质" prop="nature">
        {{ form.nature }}
      </el-form-item>
      <el-form-item label="能源类型" prop="energyType">
        <el-select
          clearable
          size="small mr5"
          v-model="form.energyType"
          placeholder="请选择能源类型"
          disabled
        >
          <el-option
            v-for="(item, key) in energyType_Data"
            :key="key"
            :label="item.dictLabel"
            :value="item.dictValue"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">证照信息</span>
        </el-divider>
      </div>

      <el-form-item label="车辆行驶证档案编号" prop="licenseNumber">
        {{ form.licenseNumber }}
      </el-form-item>
      <el-form-item label="行驶证发证机关" prop="licenseAward">
        {{ form.licenseAward }}
      </el-form-item>

      <el-form-item label="车辆行驶证注册日期" prop="licenseLoginTime">
        {{ form.licenseLoginTime }}
      </el-form-item>
      <el-form-item label="行驶证发证日期" prop="licenseAwardTime">
        {{ form.licenseAwardTime }}
      </el-form-item>
      <el-form-item label="行驶证到期日期" prop="licenseExpirationTime">
        {{ form.licenseExpirationTime }}
      </el-form-item>
      <el-form-item label="道路运输证字号" prop="dlysNumber">
        {{ form.dlysNumber }}
      </el-form-item>
      <el-form-item label="道路运输证到期日期" prop="dlysExpirationTime">
        {{ form.dlysExpirationTime }}
      </el-form-item>

      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">业户信息</span>
        </el-divider>
      </div>

      <el-form-item label="业户名称" prop="yhName">
        {{ form.yhName }}
      </el-form-item>
      <el-form-item label="业户类型" prop="yhType">
        <span v-if="form.yhType == 1">企业</span>
        <span v-else-if="form.yhType == 0">个体</span>
      </el-form-item>
      <el-form-item
        label="业户社会信用代码 / 身份证"
        prop="yhIdCard"
        label-width="200px"
      >
        {{ form.yhIdCard }}
      </el-form-item>
      <el-form-item label="经营许可证号" prop="businessCertificate">
        {{ form.businessCertificate }}
      </el-form-item>
      <el-form-item label="所属辖区" prop="belongingTo">
        {{ form.belongingTo }}
      </el-form-item>

      <div class="mb20">
        <el-divider content-position="left">
          <span class="weight">证件照片列表</span>
        </el-divider>
      </div>
      <div class="imgdiv">
        <div class="liemg">
          <div class="imgBox">
            <div class="youshang" v-for="(item, key) in urls" :key="key">
              <el-image
                class="imgs"
                :src="item.url"
                lazy
                fit="cover"
                @click="getImg(key)"
              ></el-image>
              <div class="biatwcss">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <div class="xianshu">
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
                      width: 70%;
                      height: 500px;
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                    "
                    :src="item.url"
                  />
                </viewer>
                <div class="textmiaos">{{ item.name }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </el-form>
    <div class="flex justify-center">
      <el-button
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
import { queryVehicleById, queryVehicleEnergyType, queryVehiclePlateColor, queryVehicleType } from '@/api/member/car'
export default {
  data () {
    return {
      cheState: "",
      form: {
        vehicleId: "",
        vehicleNumber: "",
        vehicleColor: "",
        vehicleSize: "",
        qualityType: "",
        tonnage: "",
        hzdQuality: "",
        vehicleType: "",
        vehicleNumberType: "",
        master: "",
        vehicleCode: "",
        axleAmount: "",
        nature: "",
        energyType: "",
        licenseNumber: "",
        licenseAward: "",
        licenseLoginTime: "",
        licenseAwardTime: "",
        licenseExpirationTime: "",
        dlysNumber: "",
        dlysExpirationTime: "",
        yhName: "",
        yhType: "",
        businessCertificate: "",
        belongingTo: "",
        auditStatus: "",
        //行驶证正本
        drivingFront: "",
        //行驶证副本
        drivingReverse: "",
        //最新年检信息
        annualRecord: "",
        //道路运输证正页
        dlysFront: "",
        //道路运输证副页
        dlysReverse: "",
        //人车合照
        rchz: "",
      },
      energyType_Data: [],
      vehicleColor_Data: [],
      vehicleType_Data: [],
      //图片数据
      urls: []
    }
  },
  mounted () {
    this.form.vehicleId = this.$route.query.vehicleId;
    this.queryVehicleEnergyType();
    this.queryVehiclePlateColor();
    this.queryVehicleById();
  },
  methods: {
    //切换图片
    getImg (key) {
      this.$refs.slideCarousel.setActiveItem(key)
    },
    //详情
    queryVehicleById () {
      queryVehicleById({ vehicleId: this.form.vehicleId }).then((res) => {
        if (res.code == 200) {
          this.form.vehicleNumber = res.data.vehicleNumber
          this.form.vehicleColor = res.data.vehicleColor
          this.form.vehicleSize = res.data.vehicleSize
          this.form.qualityType = res.data.qualityType
          this.form.tonnage = res.data.tonnage
          this.form.hzdQuality = res.data.hzdQuality
          this.form.vehicleType = res.data.vehicleType
          this.queryVehicleType()
          this.form.vehicleNumberType = res.data.vehicleNumberType
          this.form.master = res.data.master
          this.form.vehicleCode = res.data.vehicleCode
          this.form.axleAmount = res.data.axleAmount
          this.form.nature = res.data.nature
          this.form.energyType = res.data.energyType
          this.form.licenseNumber = res.data.licenseNumber
          this.form.licenseAward = res.data.licenseAward
          this.form.licenseLoginTime = res.data.licenseLoginTime
          this.form.licenseAwardTime = res.data.licenseAwardTime
          this.form.licenseExpirationTime = res.data.licenseExpirationTime
          this.form.dlysNumber = res.data.dlysNumber
          this.form.dlysExpirationTime = res.data.dlysExpirationTime
          this.form.yhName = res.data.yhName
          this.form.yhType = Number(res.data.yhType)
          this.form.businessCertificate = res.data.businessCertificate
          this.form.belongingTo = res.data.belongingTo
          this.form.auditStatus = res.data.auditStatus
          //图片数据
          this.form.drivingFront = res.data.drivingFront
          this.form.drivingReverse = res.data.drivingReverse
          this.form.annualRecord = res.data.annualRecord
          this.form.dlysFront = res.data.dlysFront
          this.form.dlysReverse = res.data.dlysReverse
          this.form.rchz = res.data.rchz
          //处理图片
          if (this.form?.drivingFront) {
            this.urls.push({
              name: '行驶证正本',
              value: 'drivingFront',
              url: this.form.drivingFront
            })
          } else {
            this.urls.push({
              name: '行驶证正本',
              value: 'drivingFront',
              url: 'http://cc.yunsd56.com/files/2411532fe11d43bc8c6587821504e0f6?2411532fe11d43bc8c6587821504e0f6'
            })
          }
          if (this.form?.drivingReverse) {
            this.urls.push({
              name: '行驶证副本',
              value: 'drivingReverse',
              url: this.form.drivingReverse
            })
          } else {
            this.urls.push({
              name: '行驶证副本',
              value: 'drivingReverse',
              url: 'http://cc.yunsd56.com/files/2411532fe11d43bc8c6587821504e0f6?2411532fe11d43bc8c6587821504e0f6'
            })
          }
          if (this.form?.annualRecord) {
            this.urls.push({
              name: '最新年检信息',
              value: 'annualRecord',
              url: this.form.annualRecord
            })
          } else {
            this.urls.push({
              name: '最新年检信息',
              value: 'annualRecord',
              url: 'http://cc.yunsd56.com/files/2411532fe11d43bc8c6587821504e0f6?2411532fe11d43bc8c6587821504e0f6'
            })
          }
          if (this.form?.dlysFront) {
            this.urls.push({
              name: '道路运输证正页',
              value: 'dlysFront',
              url: this.form.dlysFront
            })
          } else {
            this.urls.push({
              name: '道路运输证正页',
              value: 'dlysFront',
              url: 'http://cc.yunsd56.com/files/2411532fe11d43bc8c6587821504e0f6?2411532fe11d43bc8c6587821504e0f6'
            })
          }
          if (this.form?.dlysReverse) {
            this.urls.push({
              name: '道路运输证副页',
              value: 'dlysReverse',
              url: this.form.dlysReverse
            })
          } else {
            this.urls.push({
              name: '道路运输证副页',
              value: 'dlysReverse',
              url: 'http://cc.yunsd56.com/files/2411532fe11d43bc8c6587821504e0f6?2411532fe11d43bc8c6587821504e0f6'
            })
          }
          if (this.form?.rchz) {
            this.urls.push({
              name: '人车合照',
              value: 'rchz',
              url: this.form.rchz
            })
          } else {
            this.urls.push({
              name: '人车合照',
              value: 'rchz',
              url: 'http://cc.yunsd56.com/files/2411532fe11d43bc8c6587821504e0f6?2411532fe11d43bc8c6587821504e0f6'
            })
          }
        }
      });
    },
    //车辆能源类型分类
    queryVehicleEnergyType () {
      queryVehicleEnergyType().then((res) => {
        if (res.code == 200) {
          this.energyType_Data = res.data
        }
      })
    },
    //查询车辆车牌颜色分类
    queryVehiclePlateColor () {
      queryVehiclePlateColor().then((res) => {
        if (res.code == 200) {
          this.vehicleColor_Data = res.data
        }
      })
    },
    //查询车辆分类
    queryVehicleType () {
      if (this.form.vehicleType != "" && String(this.form.vehicleType) != "null") {
        queryVehicleType({ vehicleTypeCode: this.form.vehicleType }).then((res) => {
          if (res.code == 200) {
            this.cheState = res.data[0].dictLabel
          }
        });
      }
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
.liemg {
  margin-left: 40px;
  margin-right: 40px;
}
.xianshu {
  flex: 1;
  margin-right: 40rpx;
}
.imgBox {
  width: 220px;
  height: 500px;
  overflow: auto;
}
.imgs {
  width: 200px;
  height: 200px;
}
.imgdiv {
  display: flex;
  width: 100%;
}
.textmiaos {
  width: 100%;
  height: 20px;
  text-align: center;
  font-size: 16px;
  color: rgb(71, 71, 71);
  line-height: 20px;
}
.annscc {
  display: flex;
  width: 100%;
}
.youshang {
  width: 200px;
  height: 200px;
  position: relative;
  cursor: pointer;
}
.biatwcss {
  width: 100%;
  position: absolute;
  bottom: 2px;
  left: 0;
  text-align: center;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
}
</style>
