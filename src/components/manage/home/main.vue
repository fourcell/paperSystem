<template>
  <el-main>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']" background-color="#d4e7f0">
          <el-menu-item index="1">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">添加用户</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">数据分析</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">设置数据</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">选题情况</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">控制进度</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
          <div class="title">
              位置：
          </div>
      </el-container>
    </el-container>
  </el-main>
</template>
<script>
export default {
  data() {
      return{}
  }
};
</script>
<style lang="scss" scoped>
main {
  padding: 0;
  height: 100%;
  .el-container{
      height: 100%;
      .title{
          width: 100%;
          height: 45px;
          border-bottom:1px solid #d7e4ea;
          line-height: 45px;
          text-indent: 12px;
      }
  }
}
</style>