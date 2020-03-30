<template>
  <div class="log">
    <el-container>
      <Header />
      <Main />
      <Footer />
    </el-container>
  </div>
</template>
<script>
import Header from "../../components/log/header";
import Main from "../../components/log/main";
import Footer from "../../components/log/footer";
export default {
  components: {
    Header,
    Main,
    Footer
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.log {
  height: 100%;
  .el-container {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
}
</style>
