<template>
	<div class="app-container">
    <el-button style='margin-bottom:20px;' type="primary" icon="document"
              @click="handleDownload"
              :loading="downloadLoading">导出excel</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="门店名称">
        <template scope="scope">
          {{scope.row.shop_name}}
        </template>
      </el-table-column>
      <el-table-column label="省份">
        <template scope="scope">
          {{scope.row.province}}
        </template>
      </el-table-column>
      <el-table-column label="城市">
        <template scope="scope">
          {{scope.row.city}}
        </template>
      </el-table-column>
      <el-table-column label="门店地址">
        <template scope="scope">
          {{scope.row.address}}
        </template>
      </el-table-column>
      <el-table-column label="营业时间">
        <template scope="scope">
          {{scope.row.business_hours}}
        </template>
      </el-table-column>
      <el-table-column label="创建时间">
        <template scope="scope">
          {{scope.row.created_at}}
        </template>
      </el-table-column>
      <el-table-column label="修改时间">
        <template scope="scope">
          {{scope.row.updated_at}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { shopList } from "@/api/shop";
import { ERR_OK } from "@/api/config";

import { Message } from "element-ui";

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
      this.listLoading = true;
      shopList().then(response => {
        let shopData = response.data;
        if (shopData.code == 0) {
          this.list = response.data.data;
          this.listLoading = false;
        } else {
          Message(shopData.message);
        }
      });
    }
  }
};
</script>
