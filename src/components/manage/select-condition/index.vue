<template>
  <div class="select-condition">
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="80px"
      class="demo-dynamic"
    >
      <el-form-item label="学生姓名">
        <el-input v-model="dynamicValidateForm.studentName"></el-input>
      </el-form-item>
      <el-form-item label="学生学号">
        <el-input v-model="dynamicValidateForm.studentId"></el-input>
      </el-form-item>
      <el-form-item label="论文题目">
        <el-input v-model="dynamicValidateForm.paperTopic"></el-input>
      </el-form-item>
      <el-form-item label="教师姓名">
        <el-input v-model="dynamicValidateForm.teacherName"></el-input>
      </el-form-item>
      <el-form-item label="教师编号">
        <el-input v-model="dynamicValidateForm.teacherId"></el-input>
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
import { consequence } from "../const/select";
import Table from "../../table/index";
export default {
  data() {
    return {
      consequence,
      dynamicValidateForm: {
        studentName: "", //学生姓名
        studentId: "", //学生学号
        paperTopic: "", //论文题目
        teacherName: "", //教师姓名
        teacherId: "", //教师编号
        disposeResult: "" //处理结果
      },
      columns: [
        {
          prop: "id",
          label: "编号",
          'min-width':120,
        },
        {
          prop: "studentName",
          label: "学生姓名",
          minWidth:120,
        },
        {
          prop: "studentId",
          label: "学生学号",
          minWidth:120,
        },
        {
          prop: "specialty",
          label: "专业",
          minWidth:120,
        },
        {
          prop: "grade",
          label: "班级",
          minWidth:120,
        },
        {
          prop: "studentPhone",
          label: "电话",
          minWidth:120,
        },
        {
          prop: "studentEmail",
          label: "邮箱",
          minWidth:120,
        },
        {
          prop: "paperTopic",
          label: "论文题目",
          minWidth:120,
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
          prop: "teacherAcademic",
          label: "教师职称",
          minWidth:120,
        },
        {
          prop: "teacherPhone",
          label: "电话",
          minWidth:120,
        },
        {
          prop: "teacherEmail",
          label: "邮箱",
          minWidth:120,
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