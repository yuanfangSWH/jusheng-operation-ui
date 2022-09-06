<template>
  <div class="app-container">
    <div class="mb20 flex transposition justify-end">
      <el-button type="primary" @click="goAdd">新建</el-button>
      <el-button class="mr5" type="warning">导出</el-button>
      <el-date-picker
        class="mr5"
        v-model="startTime"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd 00:00:00"
        type="date"
        placeholder="选择创建起始日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr5"
        v-model="endTime"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd 23:59:00"
        type="date"
        placeholder="选择创建结束日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr5"
        v-model="updateTimeStartTime"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd 00:00:00"
        type="date"
        placeholder="选择最后修改起始日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr5"
        v-model="updateTimeEndTime"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd 23:59:00"
        type="date"
        placeholder="选择最后修改结束日期"
      >
      </el-date-picker>
      <el-input
        class="search mr5"
        v-model="vehicleNumber"
        placeholder="请输入车牌号"
        clearable
      ></el-input>
      <el-button type="primary" @click="query">查询</el-button>
      <el-button type="danger" @click="empty">清空</el-button>
    </div>
    <div class="mb20 flex transposition justify-end">
      <el-select
        clearable
        size="small mr5"
        v-model="auditStatus"
        placeholder="请选择审核状态"
      >
        <el-option
          v-for="item in auditStatusData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        clearable
        size="small mr5"
        v-model="licenseState"
        placeholder="请选择行驶证状态"
      >
        <el-option
          v-for="item in licenseStateData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select
        clearable
        size="small mr5"
        v-model="dlysState"
        placeholder="请选择道路运输证状态"
      >
        <el-option
          v-for="item in dlysStateData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <el-table
      height="600px"
      max-height="600px"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column prop="id" label="序号" type="index"></el-table-column>
      <el-table-column prop="vehicleNumber" label="车牌号" width="200">
        <template slot-scope="data">
          <span
            style="cursor: pointer; color: #67c23a"
            @click="datail(data.row)"
            >{{ data.row.vehicleNumber }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="auditStatus" label="审核状态" width="120">
        <template slot-scope="data">
          <span v-if="data.row.auditStatus == 0">待审核</span>
          <span v-else-if="data.row.auditStatus == 1">审核通过</span>
          <span v-else-if="data.row.auditStatus == 2">审核不通过</span>
        </template>
      </el-table-column>
      <el-table-column prop="vehicleNumberType" label="牌照类型" width="120px">
        <template slot-scope="data">
          <span v-if="data.row.vehicleNumberType == 0">大型汽车号牌</span>
          <span v-else-if="data.row.vehicleNumberType == 1">小型汽车号牌</span>
          <span v-else-if="data.row.vehicleNumberType == 2">其他号牌</span>
        </template>
      </el-table-column>
      <el-table-column prop="vehicleType" label="车辆分类"></el-table-column>
      <el-table-column
        prop="hzdQuality"
        label="准牵引总质量(kg)"
        width="150"
      ></el-table-column>
      <el-table-column
        prop="dlysNumber"
        label="道路运输证字号"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="businessCertificate"
        label="经营许可证号"
        width="120"
      ></el-table-column>
      <el-table-column
        prop="yhName"
        label="业户名称"
        width="200"
      ></el-table-column>
      <!-- 行驶证状态 -->
      <el-table-column prop="licenseState" label="行驶证状态" width="120">
        <template slot-scope="data">
          <span v-if="data.row.licenseState == 0">正常</span>
          <span v-else-if="data.row.licenseState == 1">即将过期</span>
          <span v-else-if="data.row.licenseState == 2">已过期</span>
          <span v-else-if="data.row.licenseState == 3">审核失败</span>
        </template>
      </el-table-column>
      <el-table-column prop="dlysState" label="道路运输证状态" width="120">
        <template slot-scope="data">
          <span v-if="data.row.dlysState == 0">正常</span>
          <span v-else-if="data.row.dlysState == 1">即将过期</span>
          <span v-else-if="data.row.dlysState == 2">已过期</span>
          <span v-else-if="data.row.dlysState == 3">审核失败</span>
        </template>
      </el-table-column>
      <el-table-column prop="drivingFront" label="行驶证">
        <template slot-scope="data">
          <span class="operate mr10" @click="detailsIMG(data.row.drivingFront)"
            >查看</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="dlysFront" label="道路运输证" width="120">
        <template slot-scope="data">
          <span class="operate mr10" @click="detailsIMG(data.row.dlysFront)"
            >查看</span
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="200px"
      ></el-table-column>
      <el-table-column prop="date" label="操作" fixed="right" width="200px">
        <template slot-scope="data">
          <span
            class="operate mr10"
            style="color: #409eff"
            @click="goEdit(data.row)"
            >编辑/审核</span
          >
          <span
            class="operate mr10"
            style="color: #67c23a"
            @click="datail(data.row)"
            >详情</span
          >
          <span
            class="operate"
            style="color: #f56c6c"
            @click="deleteVehicle(data.row)"
            >删除</span
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="paging_css">
      <Pagination
        :total="total"
        :page="pageNum"
        :limit="pageSize"
        @pagination="pagination"
      ></Pagination>
    </div>
    <!-- 查看 -->
    <el-dialog :visible.sync="dialogIMG" :append-to-body="true">
      <viewer>
        <img style="width: 100%" :src="dialogImageUrl" />
      </viewer>
    </el-dialog>
  </div>
</template>

<script>
import { getList, deleteVehicle, queryWhetherVehicleIsBind } from "@/api/member/car"
import Pagination from "@/components/Pagination/index"
export default {
  components: {
    Pagination,
  },
  data () {
    return {
      urls: [

      ],
      dialogIMG: false,
      dialogImageUrl: "",
      auditStatus: "",
      auditStatusData: [{
        value: "0",
        label: "待审核",
      }, {
        value: "1",
        label: "审核通过 ",
      }, {
        value: "2",
        label: "审核不通过",
      }],
      licenseState: "",
      licenseStateData: [{
        value: "0",
        label: "正常",
      }, {
        value: "1",
        label: "即将过期 ",
      }, {
        value: "2",
        label: "已过期",
      }, {
        value: "3",
        label: "审核失败",
      }],
      dlysState: "",
      dlysStateData: [{
        value: "0",
        label: "正常",
      }, {
        value: "1",
        label: "即将过期 ",
      }, {
        value: "2",
        label: "已过期",
      }, {
        value: "3",
        label: "审核失败",
      }],
      startTime: "",
      endTime: "",
      updateTimeStartTime: "",
      updateTimeEndTime: "",
      vehicleNumber: "",
      tableData: [],
      //页码
      pageSize: 10,
      //数量
      pageNum: 1,
      //总数据量
      total: 0,
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    /**查看 */
    detailsIMG (url) {
      this.dialogIMG = true;
      this.dialogImageUrl = url;
    },
    //删除
    deleteVehicle (data) {
      queryWhetherVehicleIsBind({ vehicleId: data.vehicleId }).then((res) => {
        if (res.code == 200) {
          this.$confirm("确认删除该车辆数据吗？", '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.confirmDelete(data.vehicleId)
          })
        } else {
          this.$confirm(res.msg, '提示', {
            confirmButtonText: '继续删除',
            cancelButtonText: '取消操作',
            type: 'warning'
          }).then(() => {
            this.confirmDelete(data.vehicleId)
          })
        }
      })
    },
    //确认删除
    confirmDelete (vehicleId) {
      deleteVehicle({ vehicleId: vehicleId }).then((res) => {
        if (res.code == 200) {
          this.getList();
          this.$message({
            message: '删除成功',
            type: 'success',
            duration: 3000
          });
        }
      })
    },
    //清空
    empty () {
      this.startTime = "";
      this.endTime = "";
      this.updateTimeStartTime = "";
      this.updateTimeEndTime = "";
      this.vehicleNumber = "";
      this.auditStatus = "";
      this.licenseState = "";
      this.dlysState = "";
      this.pageSize = 10;
      this.pageNum = 1;
      this.getList();
    },
    //查询
    query () {
      this.pageNum = 1;
      this.getList();
    },
    //分页
    pagination (val) {
      this.pageSize = val.limit;
      this.pageNum = val.page;
      this.getList();
    },
    //列表
    getList () {
      let data = {
        startTime: this.startTime,
        endTime: this.endTime,
        updateTimeStartTime: this.updateTimeStartTime,
        updateTimeEndTime: this.updateTimeEndTime,
        vehicleNumber: this.vehicleNumber,
        auditStatus: this.auditStatus,
        licenseState: this.licenseState,
        dlysState: this.dlysState
      }
      getList(data, {
        pageSize: this.pageSize,
        pageNum: this.pageNum
      }).then(res => {
        this.tableData = res.rows;
        this.total = res.total
      })
    },
    //添加
    goAdd () {
      this.$router.push({ path: "/member/car/add" })
    },
    //修改
    goEdit (row) {
      this.$router.push({ path: "/member/car/edit", query: { vehicleId: row.vehicleId } })
    },
    //详情
    datail (row) {
      this.$router.push({ path: "/member/car/datail", query: { vehicleId: row.vehicleId } })
    },
  }
}
</script>

<style scoped>
</style>

