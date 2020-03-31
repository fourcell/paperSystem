<template>
  <div class="manage">
    <el-container>
      <Header />
      <Main />
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