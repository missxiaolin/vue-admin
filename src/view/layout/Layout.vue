<template>
  <div class="app-wrapper" :class="{hideSidebar:opened}">
    <sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
		</div>
	</div>
</template>


<script>
import { mapGetters } from "vuex";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AppMain from "./AppMain";

export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    ...mapGetters(["opened"]),
    isCollapse() {
      return this.opened;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "~common/css/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  &.hideSidebar {
    .sidebar-container {
      width: 36px;
      overflow: inherit;
    }
    .main-container {
      margin-left: 36px;
    }
  }
  .sidebar-container {
    transition: width 0.28s ease-out;
    width: 180px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 2000;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s ease-out;
    margin-left: 180px;
  }
}
</style>
