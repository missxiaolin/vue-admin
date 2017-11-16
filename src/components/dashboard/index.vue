<template>
	<div class="dashboard-editor-container">
    <div class="clearfix">
      <pan-thumb style="float: left" :image="avatar">
        <span class="pan-info-roles">xiaolin</span>
      </pan-thumb>
      <github></github>
      <div class="info-container">
        <span class="display_name">小林</span>
        <span style='font-size:20px;padding-top:20px;display:inline-block;'>admin</span>
      </div>
    </div>
    <div>
      <img class='emptyGif' src="http://oni42o7kl.bkt.clouddn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3">
    </div>
  </div>
</template>

<script>
import PanThumb from 'base/PanThumb'
import Github from 'base/Github'

export default {
  name: 'dashboard-editor',
  components: { PanThumb, Github},
  data() {
    return {
      avatar: 'http://oni42o7kl.bkt.clouddn.com/tx.gif'
    }
  },
  computed: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.emptyGif {
  display: block;
  width: 45%;
  margin: 0 auto;
}

.dashboard-editor-container {
  background-color: #e3e3e3;
  min-height: 100vh;
  margin-top: -50px;
  padding: 100px 60px 0px;
  .pan-info-roles {
    font-size: 12px;
    font-weight: 700;
    color: #333;
    display: block;
  }
  .info-container {
    position: relative;
    margin-left: 190px;
    height: 150px;
    line-height: 200px;
    .display_name {
      font-size: 48px;
      line-height: 48px;
      color: #212121;
      position: absolute;
      top: 25px;
    }
  }
}
</style>
