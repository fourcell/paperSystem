<template>
  <el-main>
    <el-container style="height: 100%">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div class="navMenuTitel"></div>
        <el-menu background-color="#d4e7f0" :router="true">
          <el-menu-item v-for="(item,index) in Administrator" :key="index" :index="item.path">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container class="home">
        <el-main>
          <div class="title">位置：{{this.$store.state.title}}</div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </el-main>
</template>
<script>
import { Administrator } from "./const/administrator-list";
export default {
  data() {
    return {
      Administrator
    };
  }
};
</script>
<style lang="scss" scoped>
main {
  padding: 0;
  height: 100%;
  .el-container {
    height: 100%;
    .navMenuTitel {
      height: 46px;
      background-color: #3d96c9;
    }
    .title {
      width: 100%;
      height: 45px;
      border-bottom: 1px solid #d7e4ea;
      line-height: 45px;
      text-indent: 12px;
    }
  }
  .home {
    display: flex;
    flex-direction: column;
  }
}
</style>