<template>
  <div class="app-container">
    <div class="mb20 flex transposition justify-end">
      <el-input
        class="search mr5"
        v-model="carriageId"
        placeholder="请输入运单号"
        clearable
      ></el-input>
      <el-select
        clearable
        size="small mr10"
        v-model="carriageState"
        placeholder="运单状态"
      >
        <el-option value="0" label="全部"></el-option>
        <el-option value="1" label="已接单"></el-option>
        <el-option value="2" label="发车中"></el-option>
        <el-option value="3" label="已到达"></el-option>
        <el-option value="4" label="已签收"></el-option>
        <el-option value="5" label="已关闭"></el-option>
        <el-option value="6" label="新建"></el-option>
      </el-select>
      <el-input
        class="search mr5"
        v-model="contractId"
        placeholder="请输入合同号"
        clearable
      ></el-input>
      <el-select
        clearable
        size="small mr10"
        v-model="contractType"
        placeholder="合同类型"
      >
        <el-option value="0" label="托运人合同"></el-option>
        <el-option value="1" label="承运人合同"></el-option>
      </el-select>
      <el-select
        clearable
        size="small mr10"
        v-model="contractState"
        placeholder="合同状态"
      >
        <el-option value="0" label="未签署"></el-option>
        <el-option value="1" label="签署成功"></el-option>
        <el-option value="2" label="签署失败"></el-option>
      </el-select>

      <el-button type="primary" @click="query">查询</el-button>
      <el-button type="danger" @click="empty">清空</el-button>
    </div>
    <div class="mb20 flex transposition justify-end">
      <el-select
        clearable
        size="small mr5"
        v-model="time_value"
        placeholder="选择时间条件"
      >
        <el-option :value="1" label="合同创建时间"></el-option>
        <el-option :value="2" label="合同签订时间"></el-option>
        <el-option :value="3" label="创建时间"></el-option>
        <el-option :value="4" label="最后修改时间"></el-option>
      </el-select>

      <el-date-picker
        class="mr5"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd 00:00:00"
        v-model="startTime"
        type="date"
        placeholder="选择起始日期"
      >
      </el-date-picker>
      <el-date-picker
        class="mr5"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd 23:59:00"
        v-model="endTime"
        type="date"
        placeholder="选择结束日期"
      >
      </el-date-picker>
    </div>

    <!-- <div class="mb20">
      <el-button type="primary">重新生成合同</el-button>
      <el-button type="warning">更新合同状态</el-button>
    </div> -->

    <el-table
      height="600px"
      max-height="600px"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column
        prop="contractId"
        label="合同编号"
        width="220px"
      ></el-table-column>
      <el-table-column
        prop="carriageId"
        label="运单编号"
        width="220px"
      ></el-table-column>
      <el-table-column prop="contractType" label="合同类型">
        <template slot-scope="data">
          <span v-if="data.row.contractType == 0">托运人合同</span>
          <span v-if="data.row.contractType == 1">承运人合同</span>
        </template>
      </el-table-column>
      <el-table-column prop="carriageState" label="运单状态">
        <template slot-scope="data">
          <span v-if="data.row.carriageState == 0">草稿</span>
          <span v-if="data.row.carriageState == 1">已提交</span>
          <span v-if="data.row.carriageState == 2">已分配承运人</span>
          <span v-if="data.row.carriageState == 3">已接单</span>
          <span v-if="data.row.carriageState == 4">提货中</span>
          <span v-if="data.row.carriageState == 5">发车中</span>
          <span v-if="data.row.carriageState == 6">已到达</span>
          <span v-if="data.row.carriageState == 7">卸货中</span>
          <span v-if="data.row.carriageState == 8">已签收</span>
          <span v-if="data.row.carriageState == 9">已作废</span>
        </template>
      </el-table-column>
      <el-table-column prop="contractState" label="合同状态" width="120">
        <template slot-scope="data">
          <span v-if="data.row.contractState == 0">未签署</span>
          <span v-if="data.row.contractState == 1">签署成功</span>
          <span v-if="data.row.contractState == 2">签署失败</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="contractTime"
        label="合同签订时间"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="contractCreateTime"
        label="合同创建时间"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="contractPartyA"
        label="甲方"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="contractPartyB"
        label="乙方"
        width="150px"
      ></el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="150px"
      ></el-table-column>
      <el-table-column label="操作" fixed="right" width="200px">
        <template slot-scope="data">
          <span class="operate mr10" @click="getContract(data.row)"
            >查看合同</span
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
  </div>
</template>

<script>
import { getList } from "../../../api/transform/contract"
import Pagination from "@/components/Pagination";

export default {
  components: {
    Pagination
  },
  data () {
    return {
      tableData: [],
      //页码
      pageSize: 10,
      //数量
      pageNum: 1,
      //总数据量
      total: 0,
      carriageId: "", //运单编号
      contractId: "",
      contractState: "",
      //选择的时间条件
      time_value: 1,
      //选择的时间字段
      time_dataA: "contractCreateStartTime",
      time_dataB: "contractCreateEndTime",
      //条件参数
      startTime: "",
      endTime: "",
      carriageState: "", //运单状态
      contractType: "", //合同类型
    }
  },
  watch: {
    time_value: function (val) {
      switch (Number(val)) {
        case 1:
          this.time_dataA = "contractCreateStartTime"
          this.time_dataB = "contractCreateEndTime"
          break;
        case 2:
          this.time_dataA = "contractStartTime"
          this.time_dataB = "contractEndTime"
          break;
        case 3:
          this.time_dataA = "createTimeStartTime"
          this.time_dataB = "createTimeEndTime"
          break;
        case 4:
          this.time_dataA = "updateTimeStartTime"
          this.time_dataB = "updateTimeEndTime"
          break;
      }
    },
  },
  mounted () {
    this.getList()
  },
  methods: {
    getContract (data) {
      window.open(data.contractUrl)
    },
    //清空
    empty () {
      this.carriageId = "";
      this.contractId = "";
      this.contractState = "";
      this.startTime = "";
      this.endTime = "";
      this.pageSize = 10;
      this.pageNum = 1;
      this.getList();
    },
    //查询
    query () {
      //   this.$router.push({ path: "/transport/contract/details/index", query: { vehicleId: 1 } })
      //   return
      this.pageNum = 1;
      this.getList();
    },
    //分页
    pagination (val) {
      this.pageSize = val.limit;
      this.pageNum = val.page;
      this.getList();
    },
    // 条件查询合同
    getList () {
      let data = {
        carriageId: this.carriageId,
        contractId: this.contractId, //合同编号
        contractState: this.contractState,
        carriageState: this.carriageState, //运单状态
        contractType: this.contractType, //合同类型
      }
      data[this.time_dataA] = this.startTime;
      data[this.time_dataB] = this.endTime;
      getList(data, { pageSize: this.pageSize, pageNum: this.pageNum }).then(res => {
        if (res.code == 200) {
          this.tableData = res.rows
          this.total = res.total
        }
      })
    }
  }
}
</script>

<style scoped>
</style>

