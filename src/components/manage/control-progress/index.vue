<template>
  <div class="control-progress">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="菜单"></el-table-column>
      <el-table-column prop="name" label="使用者" width="220"></el-table-column>
      <el-table-column prop="address" label="状态" width="220"></el-table-column>
      <el-table-column prop="address" label="操作" width="240">
        <template slot-scope="scpoe">
          <el-switch v-model="scpoe.row.status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
    </el-table>
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
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      total: 20,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          status: false
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: false
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: false
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: false
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>
<style lang="scss" scoped>
.control-progress {
  padding: 10px;
  .el-pagination{
      float: right;
  }
}
</style>