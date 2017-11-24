<template>
	<div class="app-container">
    <el-button style='margin-bottom:20px;' type="primary" icon="document"
              @click="handleDownload"
              :loading="downloadLoading">导出excel</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>

    </el-table>
  </div>
</template>

<script>
import { shopList } from "@/api/shop";
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      downloadLoading: false
    };
  },
  created() {
    this.getShopList();
  },
  methods: {
    handleDownload() {},
    // 获取shop数据
    getShopList() {
      this.listLoading = true
      shopList().then(response => {
        this.list = response.data.data
        this.listLoading = false
      });
    }
  }
};
</script>
