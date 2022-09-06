<template>
  <div>
    <div style="margin-bottom: 10px; display: flex">
      <div class="baogtidv" v-show="dialogImageUrl">
        <div class="gbij" @click="deleteImg(key)">
          <i class="el-icon-error"></i>
        </div>
        <el-image
          v-if="!fileTxet"
          style="width: 100%; height: 100%"
          :src="dialogImageUrl"
          :fit="'cover'"
          @click="amplification()"
        ></el-image>
        <el-image
          v-else
          style="width: 100%; height: 100%"
          :src="require('@/assets/images/rarimg01.png')"
          :fit="'cover'"
        ></el-image>
      </div>
    </div>
    <div v-if="fileTxet">
      <el-upload
        action=""
        :show-file-list="false"
        :file-list="fileList"
        :http-request="uploadSectionFile"
      >
        <el-button type="primary">{{ componentText }}</el-button>
      </el-upload>
    </div>
    <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
      <viewer>
        <img style="width: 100%" :src="dialogImageUrl" />
      </viewer>
    </el-dialog>
    <div v-if="!fileTxet">
      <el-button type="primary" @click="scissors">{{
        componentText
      }}</el-button>
    </div>
    <!-- 裁剪工具 -->
    <el-dialog
      :visible.sync="dialogVisibleEX"
      :append-to-body="true"
      width="820px"
    >
      <ImgCutter
        ref="imgCutterModal"
        label="请选择图片"
        fileType="jpeg"
        :crossOrigin="true"
        crossOriginHeader="*"
        rate=""
        toolBgc="none"
        :isModal="false"
        :showChooseBtn="true"
        :lockScroll="true"
        :boxWidth="775"
        :boxHeight="458"
        :cutWidth="500"
        :cutHeight="300"
        :sizeChange="true"
        :moveAble="true"
        :imgMove="true"
        :originalGraph="false"
        :smallToUpload="true"
        :saveCutPosition="true"
        :scaleAble="true"
        :previewMode="true"
        :toolBoxOverflow="true"
        @cutDown="cutDown"
      >
      </ImgCutter>
    </el-dialog>
  </div>
</template>
<script>
import { dataURLtoFile } from "@/utils/compression.js";
import { upload, deleteFile } from "@/api/index.js";
import ImgCutter from 'vue-img-cutter';
export default {
  components: { ImgCutter },
  data () {
    return {
      //数据列表
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      dialogVisibleEX: false
    };
  },
  props: {
    componentText: {
      type: String,
      default: "添加图片",
    },
    fieldText: {
      type: String,
      default: ""
    },
    fileTxet: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    //剪裁工具弹框
    scissors () {
      this.dialogVisibleEX = true;
    },
    //裁剪图片后触发方法
    cutDown (fileName) {
      var imgGs = fileName.dataURL.split(';')[0].split('/')[1]
      //将base64转换为file
      var file = dataURLtoFile(fileName.dataURL, '裁剪图片.' + imgGs)
      //判断文件是否超过大小
      var isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$message.error('上传图片大小不能超过 10MB!');
        return;
      }
      var formData = new FormData()
      formData.append('file', file)
      upload(formData).then((res) => {
        if (res.code == 200) {
          this.dialogVisibleEX = false;
          this.dialogImageUrl = res.data;
          this.$emit('pictureIMG', { [this.fieldText]: res.data })
        }
      });
    },
    //初始化
    originalData (imgUrl = "") {
      this.fileList = [];
      this.IMG_data = [];
      this.dialogImageUrl = imgUrl ? imgUrl : '';
      this.dialogVisible = false;
    },
    //自定义上传
    uploadSectionFile (params) {
      var file = params.file;
      var isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$message.error('上传文件大小不能超过 10MB!');
        return;
      }
      var formData = new FormData();
      formData.append('file', file);
      upload(formData).then((res) => {
        if (res.code == 200) {
          this.dialogImageUrl = res.data;
          this.$emit('pictureIMG', { [this.fieldText]: res.data })
        }
      });
    },
    //删除图片
    deleteImg () {
      deleteFile({ filePath: this.dialogImageUrl }).then((res) => {
        if (res.code == 200) {
          this.dialogImageUrl = "";
          this.$emit('pictureDelete', this.fieldText)
          this.$message({
            message: '删除成功',
            type: 'success',
            duration: 2000
          });
        }
      });
    },
    //放大图片
    amplification () {
      this.dialogVisible = true
    }
  }
}
  </script>
  <style scoped lang="scss">
.tiezlih {
  width: 100px;
  height: 100px;
  border: 1px #d4dadd dashed;
  border-radius: 10px;
  display: flex;
}
.tubd {
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
}
.baogtidv {
  width: 100px;
  height: 100px;
  position: relative;
  border: 1px #d4dadd solid;
  margin-right: 20px;
}
.gbij {
  width: 20px;
  height: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 30;
  cursor: pointer;
}
.gbij i {
  font-size: 20px;
}
</style>
  