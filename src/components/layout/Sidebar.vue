<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import { asyncRouterMap } from "router";

export default {
  data() {
    return {
      permission_routers: []
    };
  },
  created() {
    let that = this;
    that.permission_routers = asyncRouterMap;
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters(["opened"]),
    isCollapse() {
      let that = this;
      setTimeout(()=>{
        return !that.opened
      },200)
    }
  }
};
</script>
