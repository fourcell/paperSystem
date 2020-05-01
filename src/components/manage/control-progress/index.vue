<template>
  <div class="control-progress">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="menu" label="菜单"></el-table-column>
      <el-table-column prop="userName" label="使用者" width="220"></el-table-column>
      <el-table-column prop="state" label="状态" width="220"></el-table-column>
      <el-table-column prop="state" label="操作" width="240">
        <template slot-scope="scpoe">
        <el-switch v-model="!!scpoe.row.state" active-color="#13ce66" inactive-color="#ff4949" @change="onBtn()" />
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          menu: '',
          userName: '',
          state: 1,
        },
      ]
    };

  },
  created() {
    let that = this;
    this.axios.get("http://localhost:9091/administrator/selectControl", {})
            .then(function (res) {
              console.log(res);
              that.tableData = res.data;
            })
  },
  methods:{
    onBtn(val){
      window.console.log(val)
    }
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