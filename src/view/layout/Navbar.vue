<template>
	<el-menu background-color="#eef1f6" class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="opened"></hamburger>
    <levelbar></levelbar>
    <tabs-view></tabs-view>
    <screenfull class='screenfull'></screenfull>
    <el-dropdown class="avatar-container" trigger="click">
			<div class="avatar-wrapper">
				<img class="user-avatar" src="../../common/image/avatarImg.gif">
				<i class="el-icon-caret-bottom"></i>
			</div>
			<el-dropdown-menu class="user-dropdown" slot="dropdown">
				<router-link class='inlineBlock' to="/">
					<el-dropdown-item>
						首页
					</el-dropdown-item>
				</router-link>
				<el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出登录</span>
        </el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from 'base/Hamburger'
import Levelbar from './Levelbar'
import TabsView from './TabsView'
import Screenfull from 'base/Screenfull'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['opened'])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch('ToggleSideBar')
    },
    // 退出登录操作
    logout () {}
  },
  components: {
    Hamburger,
    Levelbar,
    TabsView,
    Screenfull
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>
