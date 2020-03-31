<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item,index) in columns "
        :prop="item.prop"
        :label="item.label"
        :min-width="item.minWidth"
        :key="index"
      ></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentPage: 1,
      total: 10,
      value: true,
      tableData: [
        {
          id: "1",
          studentName: "王小虎",
          studentId: "20160252",
          specialty: "计算机",
          grade: "161",
          studentPhone: "188888888",
          studentEmail: "2747@163.com",
          paperTopic: "划水",
          teacherId: "10086",
          teacherName: "呼哈大",
          teacherAcademic: "全职",
          teacherPhone: "18888888",
          teacherEmail: "545@163.com",
          disposeResult: "审核通过",
          备注: ""
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.table {
  .pagination {
    .el-pagination {
      padding-top: 10px;
      float: right;
    }
  }
}
</style>