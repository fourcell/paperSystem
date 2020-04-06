<template>
  <div>
    <Header />
    <ControlProgress />
  </div>
</template>
<script>
import Header from "../../../components/manage/control-progress/header";
import ControlProgress from "../../../components/manage/control-progress/index";
export default {
  components: {
    ControlProgress,
    Header
  }
};
</script>