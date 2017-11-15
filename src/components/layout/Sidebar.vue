<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="isCollapse">
      <sidebar-item :routes='permission_routers'></sidebar-item>
    </el-menu>
</template>

<script>
import { mapGetters } from "vuex";
import SidebarItem from "./SidebarItem";
import {asyncRouterMap} from 'router'

export default {
  data() {
    return {
      permission_routers: []
    };
  },
  created(){
    let that = this;
    console.log(asyncRouterMap)
    setTimeout(function(){
      that.permission_routers = asyncRouterMap;
    },1000)
  },
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([]),
    isCollapse() {}
  }
};
</script>
