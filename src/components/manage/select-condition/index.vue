<template>
  <div class="select-condition">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="80px"
      class="demo-dynamic">
      <el-form-item label="学生学号">
        <el-input v-model="dynamicValidateForm.stuId"></el-input>
      </el-form-item>
      <el-form-item label="处理结果">
        <el-select v-model="dynamicValidateForm.disposeResult" disposeResult="请选择">
          <el-option
            v-for="item in consequence"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-button class="button" type="primary">查询</el-button>
    </el-form>
    <Table :columns="columns" class="table" />
  </div>
</template>
<script>
import { consequence } from "../../const/select";
import Table from "../../table/index";
export default {
  data() {
    return {
      consequence,
      dynamicValidateForm: {
        stuName: "", //学生姓名
        stuId: "", //学生学号
        topicName: "", //论文题目
        teacherName: "", //教师姓名
        teacherId: "", //教师编号
        disposeResult: "" //处理结果
      },
      columns: [
        {
          prop: "id",
          label: "编号",
          'min-width':80,
        },
        {
          prop: "stuName",
          label: "学生姓名",
          minWidth:120,
        },
        {
          prop: "stuId",
          label: "学生学号",
          minWidth:120,
        },
        {
          prop: "className",
          label: "专业",
          minWidth:160,
        },
        {
          prop: "classId",
          label: "班级",
          minWidth:150,
        },
        {
          prop: "stuPhone",
          label: "电话",
          minWidth:160,
        },
        {
          prop: "stuEmail",
          label: "邮箱",
          minWidth:160,
        },
        {
          prop: "topicName",
          label: "论文题目",
          minWidth:130,
        },
        {
          prop: "teacherId",
          label: "教师编号",
          minWidth:120,
        },
        {
          prop: "teacherName",
          label: "教师姓名",
          minWidth:120,
        },
        {
          prop: "education",
          label: "教师职称",
          minWidth:120,
        },
        {
          prop: "teacherPhone",
          label: "电话",
          minWidth:160,
        },
        {
          prop: "teacherEmail",
          label: "邮箱",
          minWidth:160,
        },
        {
          prop: "disposeResult",
          label: "处理结果",
          minWidth:120,
        },
        {
          prop: "remarks",
          label: "备注",
          minWidth:120,
        },
      ]
    };
  },
  components: {
    Table
  }
};
</script>
<style lang="scss" scoped>
.select-condition {
  .demo-dynamic {
    margin-top: 15px;
    .el-form-item {
      width: 190px;
      float: left;
    }
    .button {
      margin-left: 20px;
    }
  }
  .table{
      padding: 20px;
  }
}
</style>