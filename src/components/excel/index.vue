<template>
	<div class="app-container">
    <el-button style='margin-bottom:20px;' type="primary" icon="document"
              @click="handleDownload"
              :loading="downloadLoading">导出excel</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column
        prop="shop_id"
        label="ID"
        width="95">
      </el-table-column>
      <el-table-column
        prop="shop_name"
        label="门店名称"
        width="95">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="95">
      </el-table-column>
      <el-table-column
        prop="city"
        label="城市"
        width="95">
      </el-table-column>
      <el-table-column
        prop="address"
        label="门店地址">
      </el-table-column>
      <el-table-column
        prop="business_hours"
        label="营业时间">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updated_at"
        label="修改时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { shopList } from "@/api/shop";
import { ERR_OK } from "@/api/config";

import { Message } from "element-ui";

// 格式化数据
import { formatJson } from "common/js/excel/util";

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
    // 导出excel
    handleDownload() {
      this.downloadLoading = true;
      require.ensure([], () => {
        const {
          export_json_to_excel
        } = require("common/js/excel/Export2Excel");
        const tHeader = ["门店id", "门店名称"];
        const filterVal = ["shop_id", "shop_name"];
        const list = this.list;
        const data = formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, "列表excel");
        this.downloadLoading = false;
      });
    },
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
