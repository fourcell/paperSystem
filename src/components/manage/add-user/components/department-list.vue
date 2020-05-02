<template>
  <div class="department-list">
    <Table
      :columns="columns"
      :operate="operate"
      :newly="newly"
      @update="toUpdate"
      @Delete="toDelete"
      @pages="toPages"
      @pagination="toPagination"
      @Newly="toNewly"
    />
  </div>
</template>
<script>
import Table from "../../../table/index";
export default {
  components: {
    Table
  },
  data() {
    return {
      operate: true, //是否显示操作栏
      newly: true, //是否显示新增按钮
      columns: [
        {
          prop: "id",
          label: "编号",
          "min-width": 80
        },
        {
          prop: "className",
          label: "系别",
          minWidth: 160
        }
      ]
    };
  },
  methods: {
    //修改的信息，需要传id，去table组件，添加一个参数
    toUpdate(val) {
      window.console.log(val);

      this.$router.push({
        path: "/manage/department/update",
        query: { id: 123 }
      });
    },
    ////删除的信息，也需要一个id
    toDelete(val) {
      window.console.log(val);
    },
    //修改当前页数
    toPages(val) {
      window.console.log(val);
    },
    //修改当前页面显示的条数
    toPagination(val) {
      window.console.log(val);
    },
    toNewly() {
      this.$router.push({
        path: "/manage/department/update"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.department-list {
  padding: 20px;
}
</style>