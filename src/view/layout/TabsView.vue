<template>
  <div class='tabs-view-container'>
    <router-link class="tabs-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
      <el-tag size="mini" :closable="true" :type="isActive(tag.path)?'primary':''" @close='closeViewTabs(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    visitedViews () {
      return this.$store.state.visitedViews.slice(-6)
    }
  },
  methods: {
    // 添加路由
    addViewTabs () {
      const route = this.generateRoute()
      if (!route) {
        return false
      }
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    // 删除路由
    closeViewTabs (view, $event) {
      this.$store.dispatch('delVisitedViews', view)
      $event.preventDefault()
    },
    // 获取route
    generateRoute () {
      if (this.$route.name) {
        return this.$route
      }
      return false
    },
    // 是否选中
    isActive (path) {
      return path === this.$route.path
    }
  },
  watch: {
    $route () {
      this.addViewTabs()
    }
  }
}
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
