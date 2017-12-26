<template>
    <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" :collapse="opened">
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
      permission_routers: [],
      isOpened: true
    };
  },
  created() {
    this.permission_routers = asyncRouterMap;
    this.isOpened = this.opened
  },
  components: {
    SidebarItem
  },
  methods: {
    isCollapse() {
      let that = this;
      setTimeout(()=>{
        that.isOpened = !this.opened
      },200)
    }
  },
  computed: {
    ...mapGetters(["opened"]),

  },
  watch:{
    opened(){
      this.isCollapse();
    }
  }
};
</script>
