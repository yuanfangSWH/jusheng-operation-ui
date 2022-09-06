<template>
  <div class="app-container">
    <div class="mb20 flex transposition justify-end">
      <el-input
        class="search mr5"
        placeholder="客户名称"
        v-model="shipperFullName"
        clearable
      ></el-input>
      <el-select
        clearable
        size="small mr10"
        v-model="sceneBlacklistData"
        placeholder="选择状态"
      >
        <el-option value="0" label="不是黑名单"></el-option>
        <el-option value="1" label="是黑名单"></el-option>
      </el-select>
      <el-button type="primary" @click="query">查询</el-button>
      <el-button type="danger" @click="empty">清空</el-button>
    </div>

    <div class="mb20">
      <el-button type="primary" @click="allPL">批量黑名单</el-button>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column
        prop="shipperFullName"
        label="客户名称"
      ></el-table-column>
      <!-- <el-table-column prop="date" label="操作人" ></el-table-column> -->
      <el-table-column prop="sceneBlacklist" label="是否为黑名单" width="300">
        <template slot-scope="data">
          <span v-if="data.row.sceneBlacklist == 1" style="color: #409eff"
            >是</span
          >
          <span v-else-if="data.row.sceneBlacklist == 0" style="color: #f56c6c"
            >否</span
          >
        </template>
      </el-table-column>
      <el-table-column
        prop="isDlacklistTime"
        label="进入黑名单的时间"
        width="300"
      ></el-table-column>
      <el-table-column label="操作" fixed="right" width="200px">
        <template slot-scope="data">
          <span
            v-if="data.row.sceneBlacklist == 1"
            class="operate mr10"
            style="color: #67c23a"
            @click="releaseBlacklistDG(data.row.iserialId, 0)"
            >释放</span
          >
          <span
            v-else-if="data.row.sceneBlacklist == 0"
            class="operate mr10"
            style="color: #f56c6c"
            @click="releaseBlacklistDG(data.row.iserialId, 1)"
            >添加</span
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
    <!--    黑名单-->
    <el-dialog
      title="黑名单操作"
      :visible.sync="dialogVisible"
      width="30%"
      center
    >
      <div style="margin-bottom: 20px">
        <el-select
          clearable
          size="small mr10"
          v-model="sceneBlacklist"
          placeholder="选择操作"
        >
          <el-option :value="1" label="全部拉进黑名单"></el-option>
          <el-option :value="0" label="从黑名单中释放"></el-option>
        </el-select>
      </div>
      <div class="biaotk">确认将以下数据进行操作？</div>
      <div class="shengmiaos" style="margin-bottom: 20px">
        <span v-for="(item, key) in multipleSelection" :key="key"
          >{{ item }}，</span
        >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="releaseBlacklist">确定</el-button>
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { queryBlacklists, releaseBlacklist } from "@/api/business/rebate"
import Pagination from "@/components/Pagination";
export default {
  components: {
    Pagination
  },
  data () {
    return {
      tableData: [],
      dialogVisible: false,
      shipperFullName: "",
      sceneBlacklistData: "",
      //多选数据
      multipleSelection: [],
      //页码
      pageSize: 10,
      //数量
      pageNum: 1,
      //总数据量
      total: 0,
      sceneBlacklist: 1
    }
  },
  mounted () {
    this.getList()
  },

  methods: {
    //分页
    pagination (val) {
      this.pageSize = val.limit;
      this.pageNum = val.page;
      this.getList();
    },
    //清空
    empty () {
      this.shipperFullName = ""
      this.sceneBlacklistData = ""
      this.pageSize = 10;
      this.pageNum = 1;
      this.getList();
    },
    query () {
      this.pageNum = 1;
      this.getList();
    },
    // 黑名单列表
    getList () {
      let data = {
        shipperFullName: this.shipperFullName,
        sceneBlacklistData: this.sceneBlacklistData
      }
      queryBlacklists(data, {
        pageSize: this.pageSize,
        pageNum: this.pageNum
      }).then(res => {
        if (res.code == 200) {
          this.tableData = res.rows
          this.total = res.total
        }
      })
    },
    //多选
    handleSelectionChange (val) {
      this.multipleSelection = val.map((item) => item.iserialId);
    },
    //批量弹框
    allPL () {
      if (this.multipleSelection.length <= 0) {
        this.$message({
          message: "请勾选需要操作的数据",
          type: "warning",
          duration: 2000,
        });
        return;
      }
      this.dialogVisible = true;
    },
    //批量操作黑名单
    releaseBlacklist () {
      releaseBlacklist({ sceneBlacklist: this.sceneBlacklist, shipperUserIds: String(this.multipleSelection) }).then(
        (res) => {
          if (res.code == 200) {
            this.dialogVisible = false
            this.getList();
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 3000,
            });
          }
        }
      );
    },
    //操作黑名单
    releaseBlacklistDG (id, sceneBlacklist) {
      releaseBlacklist({ sceneBlacklist: sceneBlacklist, shipperUserIds: String(id) }).then(
        (res) => {
          if (res.code == 200) {
            this.dialogVisible = false
            this.getList();
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 3000,
            });
          }
        }
      );
    }
  }
}
</script>

<style scoped>
</style>

