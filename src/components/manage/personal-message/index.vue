<template>
  <div class="personal-message">
    <div class="title">
      <p>基本信息</p>
    </div>
    <el-form ref="form" :rules="rules" :model="formData" label-width="100px" label-position="left">
      <div class="update">
        <el-checkbox v-model="formData.checked">修改基本信息</el-checkbox>
      </div>
      <el-form-item label="管理员编号" prop="id">
        <el-input v-model="formData.id" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item label="系名" prop="depName">
        <el-input v-model="formData.depName" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item label="学历" prop="education">
        <el-input v-model="formData.education" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="formData.phone" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="formData.pass" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" :disabled="!formData.checked"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        checked: "", //修改状态
        name: "", //姓名
        id: "", //管理员编号
        depName: "", //系名
        education: "", //学历
        phone: "", //电话
        email: "", //邮箱
        pass:""//密码
      },
      rules: {
        id: [
          { required: true, message: "请输入管理员编号", trigger: "blur" },
          { message: "管理员编号格式有误", pattern: /^\d{0,10}$/ }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { message: "姓名格式有误", pattern: /^[\u4e00-\u9fa5]{0,20}$/ }
        ],
        depName: [
          { required: true, message: "请输入系名", trigger: "blur" },
          { message: "系名格式有误", pattern: /^[\u4e00-\u9fa5]{0,20}$/ }
        ],
        education: [
          { required: true, message: "请输入学历", trigger: "blur" },
          { message: "学历格式有误", pattern: /^[\u4e00-\u9fa5]{0,20}$/ }
        ],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { message: "电话格式有误", pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/}
        ],
        pass: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { message: "密码格式有误", pattern: /^\w{6,16}$/}
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { message: "邮箱格式有误", pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}
        ],
      },
      create:function () {
        this.axios.get()
      }
    };
  }
};
</script>
<style lang="scss">
.personal-message {
  padding: 20px;
  .title {
    height: 30px;
    border-bottom: 1px solid #d0dee5;
    p {
      width: 70px;
      line-height: 30px;
      border-bottom: 2px solid #66c9f3;
    }
  }
  .el-form {
    padding-top: 30px;
    input {
      width: 390px;
    }
    .update {
      margin-bottom: 22px;
    }
  }
}
</style>