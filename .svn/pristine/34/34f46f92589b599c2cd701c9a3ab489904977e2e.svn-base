<template>
  <div class="app-container">
    <div class="mb20 flex transposition justify-end">
      <el-date-picker
        class="mr10"
        size="small"
        v-model="time"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>

      <el-select clearable size="small mr5" value="">
        <el-option value="" label="船东姓名"></el-option>
        <el-option value="1" label="注册手机号"></el-option>
      </el-select>
      <el-input class="search mr5" size="small" clearable></el-input>
      <el-button size="small" type="primary" plain>查询</el-button>
    </div>

    <div class="mb20">
      <el-button size="small" type="primary" @click="goAdd" plain
        >新建</el-button
      >
      <el-button size="small" type="danger" plain>删除</el-button>
      <el-button size="small" type="warning" plain>导出</el-button>
    </div>

    <el-table
      height="600px"
      max-height="600px"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column type="selection"></el-table-column>
      <el-table-column prop="date" label="序号"></el-table-column>
      <el-table-column prop="date" label="船东姓名"></el-table-column>
      <el-table-column prop="date" label="手机号"></el-table-column>
      <el-table-column prop="date" label="身份证号"></el-table-column>
      <el-table-column prop="date" label="审核状态"></el-table-column>
      <el-table-column prop="date" label="身份证状态"></el-table-column>
      <el-table-column prop="date" label="身份证正面"></el-table-column>
      <el-table-column prop="date" label="身份证反面"></el-table-column>
      <el-table-column prop="date" label="创建人"></el-table-column>
      <el-table-column prop="date" label="创建时间"></el-table-column>
      <el-table-column prop="date" label="操作" fixed="right" width="200px">
        <template>
          <span class="operate mr10" @click="goEdit">编辑</span>
          <span class="operate">审核</span>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加收款人"
      :visible.sync="dialogVisible"
      width="30%"
      center
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="150px">
        <el-form-item label="身份证头像面" prop="">
          <ImageUpload></ImageUpload>
        </el-form-item>
        <el-form-item label="身份证国徽面" prop="">
          <ImageUpload></ImageUpload>
        </el-form-item>
        <el-form-item label="船东姓名" prop="companyName">
          <el-input v-model="form.companyName" clearable></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
        <el-form-item label="注册手机号">
          <el-input v-model="form.name" clearable></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ImageUpload from '../../../components/ImageUpload/index'
export default {
  data () {
    return {
      tableData: [
        { date: '1111' }
      ],
      form: {},
      rules: [],
      dialogVisible: false,
      time: []
    }
  },
  components: {
    ImageUpload
  },
  methods: {
    goAdd () {
      // this.$router.push("/member/shipowner/add")
      this.dialogVisible = true
    },
    goEdit () {
      this.$router.push("/member/shipowner/edit")
    }
  }
}
</script>

<style scoped>
</style>

