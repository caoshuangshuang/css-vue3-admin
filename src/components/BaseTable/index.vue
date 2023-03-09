<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-12-14 15:48:12
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-12-16 17:27:45
-->
<template>
  <ElTable
    :data="tableData"
    :stripe="options?.stripe"
    :height="options?.height"
    :border="options?.border"
    :highlight-current-row="options?.highlightCurrentRow"
    :empty-text="options?.emptyText"
    @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
    @select-all="handleSelectAll"
    @expand-change="handleExpandChange"
  >
    <ElTableColumn
      v-if="options?.isSelectionTable"
      type="selection"
      width="55"
      :align="options?.align"
    />
    <ElTableColumn
      v-if="options?.isIndexTable"
      type="index"
      :label="options?.indexName"
      width="75"
      :align="options?.align"
    />
    <ElTableColumn v-if="options?.isExpandTable" type="expand" width="55" />
    <ElTableColumn
      v-for="column of columns"
      :prop="column.prop"
      :label="column.label"
      :fixed="column.fixed"
      :width="column.width"
      :min-width="column.minWidth"
      :formatter="column.formatter"
      :show-overflow-tooltip="column.showOverflowToltip"
      :align="column.align || options?.align"
    />
    <ElTableColumn label="操作" :align="options?.align">
      <template #default="scope">
        <slot v-bind="scope"></slot>
      </template>
    </ElTableColumn>
  </ElTable>
</template>
<script lang="ts" setup>
import { ElTable, ElTableColumn } from "element-plus";

export interface ITableColumn {
  label: string;
  prop: string;
  width?: number;
  minWidth?: number;
  fixed?: boolean;
  formatter?: any;
  showOverflowToltip?: boolean;
  align?: string;
}

export interface ITableOptions {
  stripe?: boolean;
  border?: boolean;
  highlightCurrentRow?: boolean;
  emptyText?: string;
  isSelectionTable?: boolean;
  isIndexTable?: boolean;
  indexName?: string;
  isExpandTable?: boolean;
  height?: number;
  align?: string;
}

export interface ITableProps {
  tableData: any;
  columns: ITableColumn[] | null;
  options?: ITableOptions | null;
}
const props = withDefaults(defineProps<ITableProps>(), {
  tableData: null,
  columns: null,
  options: () => {
    return {
      stripe: false,
      border: true,
      highlightCurrentRow: true,
      emptyText: "暂无数据",
      isSelectionTable: false,
      isIndexTable: true,
      isExpandTable: false,
      indexName: "序号",
      align: "center",
      height: 300,
    };
  },
});
const emit = defineEmits([
  "current-change",
  "selection-change",
  "select-all",
  "expand-change",
]);

const { tableData, columns, options } = toRefs(props);

//单选
const handleCurrentChange = (...rest: any) => {
  emit("current-change", ...rest);
};

// 多选
const handleSelectionChange = (...rest: any) => {
  emit("selection-change", ...rest);
};

//全选
const handleSelectAll = (...rest: any) => {
  emit("select-all", ...rest);
};

//展开
const handleExpandChange = (...rest: any) => {
  emit("expand-change", ...rest);
};
</script>
