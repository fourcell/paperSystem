<template>
  <div class="add-user">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      label-position="left"
    >
      <el-form-item label="学校编号" prop="id">
        <el-input v-model="ruleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="学校名称" prop="stuName">
        <el-input v-model="ruleForm.stuName"></el-input>
      </el-form-item>
      <el-form-item label="学校类型" prop="schoolType">
        <el-select v-model="ruleForm.schoolType" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
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
        id: 20160252, //学校编号
        stuName: "", //学校名称
        schoolType: "" //学校类型
      },
      options: [
        {
          value: 0,
          label: "985"
        },
        {
          value: 1,
          label: "211"
        },
        {
          value: 2,
          label: "一本"
        },
        {
          value: 3,
          label: "二本"
        },
        {
          value: 4,
          label: "专科"
        }
      ],
      rules: {
        id: [
          { required: true, message: "请输入学校编号", trigger: "blur" },
          { message: "学校编号格式有误", pattern: /^\d{0,10}$/ }
        ],
        stuName: [
          { required: true, message: "请输入学校名称", trigger: "blur" },
          {
            message: "学校名称格式有误",
            pattern: /^[\u4e00-\u9fa5a-zA-Z]{0,20}$/
          }
        ],
        schoolType: [
          { required: true, message: "请选择学校类型", trigger: "blur" }
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