<template>
	<div class="app-container">
    <el-button style='margin-bottom:20px;' type="primary" icon="document" @click="handleDownload" :loading="downloadLoading">导出excel</el-button>
  </div>
</template>

<script>
  export default {
    methods:{
      handleDownload(){

      }
    }
  }
</script>
