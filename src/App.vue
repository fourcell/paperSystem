<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  watch:{
    '$route.meta'(val) {
      this.$store.commit('title',val.title)
    },
  }
}
</script>
<style lang="scss">
html,body{
  height: 100%;
}
*{
  padding: 0;
  margin: 0;
}
#app{
  height: 100%;
}
</style>