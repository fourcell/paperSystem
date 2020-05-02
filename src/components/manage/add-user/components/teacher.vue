<template>
  <div class="add-user">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="老师编号" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="职称" prop="teacherName">
        <el-input v-model="ruleForm.teacherName"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="ruleForm.sex"></el-input>
      </el-form-item>
      <el-form-item label="系别" prop="className">
        <el-input v-model="ruleForm.className"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" show-password></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="mailbox">
        <el-input v-model="ruleForm.mailbox"></el-input>
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
        id: 20160252, //id
        name: "", //姓名
        teacherName: "", //职称
        sex: "", //性别
        className: "", //系别
        phone: "", //电话
        mailbox: "", //邮箱
        pass: "" //密码
      },
      rules: {
        id: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { message: "学号格式有误", pattern: /^\d{0,10}$/ }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { message: "姓名格式有误", pattern: /^[\u4e00-\u9fa5a-zA-Z]{0,20}$/ }
        ],
        teacherName: [
          { required: true, message: "请输入职称", trigger: "blur" },
          { message: "职称格式有误", pattern: /^[\u4e00-\u9fa5a-zA-Z]{0,20}$/ }
        ],
        sex: [
          { required: true, message: "请输入性别", trigger: "blur" },
          { message: "性别格式有误", pattern: /^[\u4e00-\u9fa5a-zA-Z]{0,20}$/ }
        ],
        className: [
          { required: true, message: "请输入系别", trigger: "blur" },
          {
            message: "系别格式有误",
            pattern: /^[0-9a-zA-Z\u4e00-\u9fa5a-zA-Z]{0,20}$/
          }
        ],
        pass: [
          { required: false, message: "请输入密码", trigger: "blur" },
          {
            message: "密码格式有误",
            pattern: /^\w{6,16}$/
          }
        ],
        phone: [
          { required: false, message: "请输入电话", trigger: "blur" },
          {
            message: "电话格式有误",
            pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
          }
        ],
        mailbox: [
          { required: false, message: "请输入邮箱", trigger: "blur" },
          {
            message: "邮箱格式有误",
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
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