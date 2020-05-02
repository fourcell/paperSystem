<template>
  <div class="add-user">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="编号" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="系别" prop="className">
        <el-input v-model="ruleForm.className"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toSub">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Role } from "../../../const/administrator-list";
export default {
  data() {
    return {
      Role,
      id: "",
      ruleForm: {
        id: 20160252, //学号
        className: "" //系别
      },
      rules: {
        id: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { message: "学号格式有误", pattern: /^\d{0,10}$/ }
        ],
        className: [
          { required: true, message: "请输入系别", trigger: "blur" },
          {
            message: "系别格式有误",
            pattern: /^[\u4e00-\u9fa5a-zA-Z0-9]{0,20}$/
          }
        ]
      }
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  methods: {
    //在这里请求id的数据
    getData() {},
    //表单校验
    toSub() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.id ? this.toUpdate() : this.toAdd();
        } else {
          return false;
        }
      });
    },
    //提交修改的数据
    toUpdate() {
      window.console.log(this.ruleForm);
    },
    //新增数据
    toAdd() {
      window.console.log(this.ruleForm);
    }
  }
};
</script>
<style lang="scss">
.add-user {
  padding: 20px;
  .el-form {
    input,
    .el-input {
      width: 390px;
    }
  }
}
</style>