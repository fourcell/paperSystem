<template>
  <div class="add-user">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="用户角色" prop="role">
        <el-select v-model="ruleForm.role" placeholder="请选择">
          <el-option v-for="item in Role" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学号" prop="studentId">
        <el-input v-model="ruleForm.studentId"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="专业" prop="specialty">
        <el-input v-model="ruleForm.specialty"></el-input>
      </el-form-item>
      <el-form-item label="辅导员" prop="instructor">
        <el-input v-model="ruleForm.instructor"></el-input>
      </el-form-item>
      <el-form-item label="班级" prop="classGrade">
        <el-input v-model="ruleForm.classGrade"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="mailbox">
        <el-input v-model="ruleForm.mailbox"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Role } from "../../const/administrator-list";
export default {
  data() {
    return {
      Role,
      ruleForm: {
        role: 0, //角色id， 0为学生  1为教师  2为管理员
        studentId: "", //学号
        name: "", //姓名
        specialty: "", //专业
        instructor: "", //辅导员
        classGrade: "", //班级
        phone: "", //电话
        mailbox: "" //邮箱
      },
      rules: {
        role: [{ required: true, message: "请选择角色", trigger: "blur" }],
        studentId: [
          { required: true, message: "请输入学号", trigger: "blur" },
          { message: "学号格式有误", pattern: /^\d{0,10}$/ }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { message: "姓名格式有误", pattern: /^[\u4e00-\u9fa5]{0,20}$/ }
        ],
        specialty: [
          { required: true, message: "请输入专业", trigger: "blur" },
          { message: "专业格式有误", pattern: /^[\u4e00-\u9fa5]{0,20}$/ }
        ],
        instructor: [
          { required: true, message: "请输入辅导员", trigger: "blur" },
          { message: "辅导员格式有误", pattern: /^[\u4e00-\u9fa5]{0,20}$/ }
        ],
        classGrade: [
          { required: true, message: "请输入班级", trigger: "blur" },
          {
            message: "班级格式有误",
            pattern: /^[0-9a-zA-Z\u4e00-\u9fa5]{0,20}$/
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
  }
};
</script>
<style lang="scss">
.add-user {
  padding: 20px;
  .el-form {
    input {
      width: 390px;
    }
  }
}
</style>