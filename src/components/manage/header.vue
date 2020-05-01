<template>
  <el-header>
    <div class="title">
      <ul>
        <li>帮助</li>
        <li>关于</li>
        <li>退出</li>
      </ul>
      <p>
        <i class="el-icon-user"></i>
        <span id="name" v-text="name">99999</span>
      </p>
    </div>
  </el-header>
</template>
<script>
  export default {
    data(){
      return{
        name:''
      }
    },
    created() {
     this.name = window.localStorage.getItem("userId");
    }
  };
</script>
<style lang="scss" scoped>
header {
  height: 100px !important;
  margin-top: 10px;
  background-color: #046dae;
  .title {
    height: 100%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    ul {
      width: 180px;
      height: 14px;
      list-style: none;
      li {
        float: left;
        width: 50px;
        color: #fff;
        font-size: 14px;
        border-right: 1px dashed #000;
        text-align: center;
        cursor: pointer;
      }
      li:nth-child(3) {
        border: none;
      }
    }
    p {
      width: 100px;
      height: 35px;
      border-radius: 20px;
      text-align: center;
      line-height: 35px;
      background-color: #055483;
      color: #fff;
      span{
          text-indent: 5px;
          display: inline-block;
      }
    }
  }
}
</style>