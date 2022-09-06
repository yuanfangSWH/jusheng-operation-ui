<template>
  <div class="app-container">
    <div class="flex justify-between mb20">
      <div class="flex">
        <div style="margin-right: 30px">
          <span class="mr10">运单编号：{{ form.carriageId }}</span>
          <span></span>
        </div>
        <div style="margin-right: 30px">
          <span class="mr10">司机：{{ form.name }}/{{ form.phone }}</span>
          <span></span>
        </div>
        <div style="margin-right: 30px">
          <span class="mr10">车辆：{{ form.vehicleNumber }}</span>
          <span></span>
        </div>
        <div style="margin-right: 30px">
          <span class="mr10">托运人：{{ form.shipperFullName }}</span>
          <span></span>
        </div>
      </div>
      <div>
        <el-button type="primary" @click="vehiclePositioning"
          >车辆最新位置查询</el-button
        >
      </div>
    </div>
    <div class="flex justify-between mb20">
      <div class="flex">
        <div style="margin-right: 30px">
          <span class="mr10"
            >运单起运时间、地点：{{ form.arriveTime }}、{{
              form.deliverContactsProvince + form.deliverContactsAddress
            }}</span
          >
          <span></span>
        </div>
      </div>
    </div>
    <div class="flex justify-between mb20">
      <div class="flex">
        <div style="margin-right: 30px">
          <span class="mr10"
            >运单到达时间、地点：{{ form.demountTime }}、{{
              form.takeContactsProvince + form.takeContactsAddress
            }}</span
          >
          <span></span>
        </div>
      </div>
    </div>
    <div class="kairq">
      <el-date-picker
        class="mr5"
        value-format="yyyy-MM-dd HH:mm:00"
        v-model="startTime"
        type="datetime"
        placeholder="选择车辆位置开始日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr5"
        value-format="yyyy-MM-dd HH:mm:00"
        v-model="endTime"
        type="datetime"
        placeholder="选择车辆位置结束日期"
      >
      </el-date-picker>
      <el-button type="primary" @click="carriageTracesByTime"
        >位置查询</el-button
      >
    </div>
    <div class="amap-wrapper">
      <amap ref="myMap" :center="center" :zoom="zoom" @complete="mapLoading">
        <amap-tool-bar />
        <amap-control-bar
          :position="{
            top: '10px',
            left: '10px',
          }"
        />
        <amap-marker ref="myMarker" :position="position" />
        <amap-text
          :position="position"
          :text="text"
          :dom-style="{
            color: '#f00',
          }"
        />
        <amap-marker ref="myMarker2" :position="position2" />
        <amap-text
          :position="position2"
          :text="text2"
          :dom-style="{
            color: '#f00',
          }"
        />
        <amap-polyline :stroke-weight="8" :path="path" stroke-color="#f00" />
        <amap-marker
          v-for="(item, key) in locationDetails"
          :key="key"
          :icon="iconimg"
          :offset="[0, -10]"
          :position.sync="item.path"
          clickable
          @mouseover="showClick(item)"
        />
        <amap-info-window
          :visible="!!coordinatesData"
          :position="coordinatesData ? coordinatesData.path : null"
          :offset="[10, -8]"
          auto-move
          is-custom
        >
          <div v-if="coordinatesData">
            <div v-show="coordinatesTo">
              <div class="parcel">
                <i class="el-icon-close" @click="coordinatesData = null"></i>
                <div class="text_li_css" style="padding-top: 30px">
                  时间：{{ coordinatesData.gtm }}
                </div>
                <div class="text_li_css">
                  经度：{{ coordinatesData.path[0] }}
                </div>
                <div class="text_li_css">
                  维度：{{ coordinatesData.path[1] }}
                </div>
              </div>
              <div class="mark_css"></div>
            </div>
          </div>
        </amap-info-window>
      </amap>
    </div>
  </div>
</template>

<script>
import { carriageTraces, vehiclePositioning, carriageTracesByTime } from '@/api/transform/waybill'
import iconimg from '@/assets/images/transparent.png';
import Amap from '@amap/amap-vue/lib/amap';
import AmapMarker from '@amap/amap-vue/lib/marker';
import AmapText from '@amap/amap-vue/lib/text';
import AmapPolyline from '@amap/amap-vue/lib/polyline';
import AmapControlBar from '@amap/amap-vue/lib/control-bar';
import AmapToolBar from '@amap/amap-vue/lib/tool-bar';
import AmapInfoWindow from '@amap/amap-vue/lib/info-window';
import { wgsToGc } from '@/utils/transformation'
export default {
  components: {
    Amap,
    AmapMarker,
    AmapText,
    AmapPolyline,
    AmapControlBar,
    AmapToolBar,
    AmapInfoWindow
  },
  props: {
    form: Object
  },
  data () {
    return {
      iconimg,
      locationDetails: [],
      coordinatesData: { path: [116.397447, 39.909183], gtm: "" },
      coordinatesTo: false,
      text: "终点位置",
      text2: "起点位置",
      //地图坐标
      center: [116.397447, 39.909183],
      //地图缩放等级
      zoom: 15,
      //终点位置
      position: [0, 0],
      //起点位置
      position2: [0, 0],
      //折线地址
      path: [],
      //异步请求得到的位置数据
      locationData: {},
      startTime: "",
      endTime: ""
    }
  },
  methods: {
    //显示图层
    showClick (data) {
      this.coordinatesTo = true;
      this.coordinatesData = data;
    },
    //时间查询
    carriageTracesByTime () {
      var i = this.datePD(this.startTime, this.endTime);
      if (i == 4) {
        this.$message({
          message: '请选择时间！',
          type: 'warning',
          duration: 3000
        });
      } else if (i == 3) {
        this.$message({
          message: '开始时间不能大于结束时间！',
          type: 'warning',
          duration: 3000
        });
      } else if (i == 2) {
        this.$message({
          message: '时间相差不能大于24个小时！',
          type: 'warning',
          duration: 3000
        });
      } else if (i == 1) {
        carriageTracesByTime({ carriageId: this.$store.state.waybill.carriageId, startTime: this.startTime, endTime: this.endTime }).then((res) => {
          if (res.code == 200) {
            this.$message({
              message: res.msg,
              type: 'success',
              duration: 3000
            });
            this.locationData = res.data;
            if (this.locationData != "" && this.locationData) {
              var map = wgsToGc((this.locationData[0].lon / 600000), (this.locationData[0].lat / 600000));
              this.position2 = [map[0], map[1]];
              var map1 = wgsToGc((this.locationData[this.locationData.length - 1].lon / 600000), (this.locationData[this.locationData.length - 1].lat / 600000));
              this.center = [map1[0], map1[1]];
              this.position = [map1[0], map1[1]];
              //坐标数组
              var path = [];
              var locationDetails = [];
              var map2 = [];
              for (let i of this.locationData) {
                map2 = wgsToGc((i.lon / 600000), (i.lat / 600000));
                path.push([map2[0], map2[1]]);
                //多个点位
                locationDetails.push({
                  path: [map2[0], map2[1]],
                  gtm: i.gtm
                })
              }
              this.path = path;
              this.locationDetails = this.intervalMethods(locationDetails);
            } else {
              this.center = [116.397447, 39.909183];
              this.position = [116.397447, 39.909183];
            }
          }
        });
      }
    },
    //减少点间隔
    intervalMethods (data) {
      const mapData = data;
      var i = 0;
      const value = [];
      const mapMethods = () => {
        i += 60;
        if (i < mapData.length) {
          value.push(mapData[i]);
          mapMethods();
        } else {
          return
        }
      };
      mapMethods();
      return value;
    },
    //位置查询
    vehiclePositioning () {
      vehiclePositioning({ carriageId: this.$store.state.waybill.carriageId, vehicleNumber: this.form.vehicleNumber }).then((res) => {
        if (res.code == 200) {
          this.$message({
            message: res.msg,
            type: 'success',
            duration: 3000
          });
          this.text = "车辆最新位置"
          var map1 = wgsToGc((res.data.lat / 600000), (res.data.lat / 600000));
          this.center = [map1[0], map1[1]]
          this.position = this.center
          this.path.push(this.center)
        }
      });
    },
    //地图初始化
    mapLoading () {
      //初始化地图坐标位置(废弃)
      //   carriageTraces({ carriageId: this.$store.state.waybill.carriageId }).then((res) => {
      //     if (res.code == 200) {
      //       this.locationData = res.data;
      //       if (this.locationData != "" && this.locationData) {
      //   var map = wgsToGc((this.locationData[this.locationData.length - 1].lon / 600000), (this.locationData[this.locationData.length - 1].lat / 600000));
      //       this.position2 = [map[0], map[1]];
      //         this.text = "终点位置"
      //         var map1 = wgsToGc((this.locationData[0].lon / 600000), (this.locationData[0].lat / 600000));
      //         this.center = [map1[0], map1[1]];
      //         this.position = [map1[0], map1[1]];
      //         //坐标数组
      //         var path = [];
      //         var map2 = [];
      //         for (let i of this.locationData) {
      //           map2 = wgsToGc((i.lon / 600000), (i.lat / 600000));
      //           path.push([map2[0], map2[1]]);
      //         }
      //         this.path = path;
      //       } else {
      //   this.$message({
      //         message: res.msg,
      //         type: 'warning',
      //         duration: 3000
      //       });
      //         this.center = [121.455703, 31.247253];
      //         this.position = [121.455703, 31.247253];
      //       }
      //     }
      //   });
    },
    //日期相差时间段判断
    datePD (time1, time2) {
      //判断开始时间是否大于结束日期
      if (time1 > time2) {
        return 3;
      }
      return 1
      if (time1 == "" || time2 == "" || String(time1) == "null" || String(time2) == "null") {
        return 4;
      }
      //截取字符串，得到日期部分"2009-12-02",用split把字符串分隔成数组
      var begin1 = time1.substr(0, 10).split("-");
      var end1 = time2.substr(0, 10).split("-");

      //将拆分的数组重新组合，并实例成化新的日期对象
      var date1 = new Date(begin1[1] + - + begin1[2] + - + begin1[0]);
      var date2 = new Date(end1[1] + - + end1[2] + - + end1[0]);

      //得到两个日期之间的差值m，以分钟为单位
      //Math.abs(date2-date1)计算出以毫秒为单位的差值
      //Math.abs(date2-date1)/1000得到以秒为单位的差值
      //Math.abs(date2-date1)/1000/60得到以分钟为单位的差值
      var m = parseInt(Math.abs(date2 - date1) / 1000 / 60);

      //小时数和分钟数相加得到总的分钟数
      //time1.substr(11,2)截取字符串得到时间的小时数
      //parseInt(time1.substr(11,2))*60把小时数转化成为分钟
      var min1 = parseInt(time1.substr(11, 2)) * 60 + parseInt(time1.substr(14, 2));
      var min2 = parseInt(time2.substr(11, 2)) * 60 + parseInt(time2.substr(14, 2));

      //两个分钟数相减得到时间部分的差值，以分钟为单位
      var n = min2 - min1;

      //将日期和时间两个部分计算出来的差值相加，即得到两个时间相减后的分钟数
      var minutes = m + n;
      if (minutes > 1440) {
        return 2
      } else {
        return 1
      }
    },
  }
}
</script>

<style scoped>
.amap-wrapper {
  width: 100%;
  height: 700px;
}
.kairq {
  margin-bottom: 10px;
  position: relative;
}
.tisxl {
  width: 300px;
  height: 90px;
  position: absolute;
  right: 0px;
  top: -80px;
  font-size: 14px;
  color: #f00;
  margin-left: 40px;
}
.parcel {
  width: 220px;
  height: 120px;
  background-color: #fff;
  border: 2px #3e94f9 solid;
  font-size: 14px;
  color: #000;
  position: relative;
  border-radius: 5px;
}
.el-icon-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
}
.text_li_css {
  width: 90%;
  line-height: 20px;
  margin-left: 18px;
}
.mark_css {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 14px solid #3e94f9;
  margin-left: 100px;
}
</style>