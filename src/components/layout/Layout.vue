<template>
  <div class="app-wrapper">
		<div class="main-container">
      <navbar></navbar>
		</div>
	</div>
</template>


<script>
import Navbar from "components/layout/Navbar";
export default {
  name: "layout",
  components: {
    Navbar
  },
  computed: {}
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
    z-index: 1001;
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
