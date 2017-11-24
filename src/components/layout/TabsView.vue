<template>
  <div class='tabs-view-container'>

  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    // 添加路由
    addViewTabs() {
      const route = this.generateRoute();
      console.log(route);
    },
    // 获取route
    generateRoute() {
      if (this.$route.name) {
        return this.$route;
      }
      return false;
    }
  },
  watch: {
    $route() {
      this.addViewTabs();
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tabs-view-container {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  .tabs-view {
    margin-left: 10px;
  }
}
</style>
