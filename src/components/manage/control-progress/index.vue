<template>
  <div class="control-progress">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="菜单"></el-table-column>
      <el-table-column prop="name" label="使用者" width="220"></el-table-column>
      <el-table-column prop="address" label="状态" width="220">
        <template slot-scope="scpoe">{{scpoe.row.address?'开启':'关闭'}}</template>
      </el-table-column>
      <el-table-column prop="address" label="操作" width="240">
        <template slot-scope="scpoe">
          <el-switch
            v-model="scpoe.row.address"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="onBtn"
          ></el-switch>
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
          address: 1
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: 0
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: 1
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: 0
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {
      //这里是切换一页显示多少条数据
    },
    handleCurrentChange() {
      //切换页数
    },
    onBtn(val) {
      //修改状态  onBtn(id,address) ,在上面的方法可以把id传进来
      let parm = {
        address: val ? 1 : 0
      };
      //parm为修改后的状态
      console.log(parm);
    }
  }
};
</script>
<style lang="scss" scoped>
.control-progress {
  padding: 10px;
  .el-pagination {
    float: right;
  }
}
</style>