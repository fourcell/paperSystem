<template>
  <div class="progress-header">
    <el-form :inline="true" :model="progressData" class="demo-form-inline">
      <el-form-item label="菜单">
        <el-input v-model="progressData.menu" placeholder></el-input>
      </el-form-item>
      <el-form-item label="使用者">
        <el-select v-model="progressData.userName" placeholder="使用者">
          <el-option label="全部" value="3"></el-option>
          <el-option v-for="item in Role" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="progressData.state" placeholder="状态">
          <el-option label="全部" value="3"></el-option>
          <el-option v-for="item in State" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { Role, State } from "../../const/administrator-list";
export default {
  data() {
    return {
      Role,
      State,
      progressData: { menu: "", userName: "3", state: 1 }
    };
  },
  created() {
    let that = this;
    this.axios.get("http://localhost:9091/administrator/selectControl", {})
            .then(function (res) {

              console.log(res);
              that.tableData = res.data;
            })
  }
};
</script>
<style lang="scss" scoped>
.progress-header {
  padding: 10px 10px 0 10px;
}
</style>