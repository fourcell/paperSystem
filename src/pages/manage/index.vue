<template>
  <div class="manage">
    <el-container>
      <Header />
      <Main :type="type" />
    </el-container>
  </div>
</template>
<script>
import Header from "../../components/manage/header";
import Main from "../../components/manage/main";
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {
      type: 0
    };
  },
  created() {
    this.type = window.localStorage.getItem("type");
  }
};
</script>

<style lang="scss" scoped>
.manage {
  height: 100%;
  .el-container {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
}
</style>