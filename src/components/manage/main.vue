<template>
  <el-main>
    <el-container style="height: 100%">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div class="navMenuTitel"></div>
        <el-menu
          background-color="#d4e7f0"
          :router="true"
          text-color="#303133"
          active-text-color="#409EFF"
        >
          <!-- <template v-if="!item.children"> -->
          <!-- <el-menu-item v-for="(item,index) in roleData" :key="index" :index="item.path">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>-->
          <!-- </template> -->
          <div v-for="(item,index) in roleData" :key="index">
            <el-submenu v-if="item.children">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.title}}</span>
              </template>

              <el-menu-item-group v-for="(data,index) in item.children" :key="index">
                <el-menu-item :index="data.path">{{data.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 
            <el-menu-item :index="item.path" v-if="!item.children">
              <i class="el-icon-setting"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>-->
            <template v-if="!item.children">
              <el-menu-item :index="item.path">
                <i class="el-icon-chat-line-square"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </template>
          </div>
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
import { Administrator } from "../const/administrator-list";
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      Administrator,
      roleData: []
    };
  },
  created() {
    this.toRouter(this.type);
  },
  methods: {
    toRouter(value) {
      switch (value) {
        case "0":
          this.roleData = Administrator;
          break;
        case "1":
          this.roleData = Administrator;
          break;
        case "2":
          this.roleData = Administrator;
          break;
      }
    }
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