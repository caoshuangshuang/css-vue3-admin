/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-29 14:25:01
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-14 10:26:50
 */
import type { RequestConfigOptions } from "@/utils/request";

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
  tableData: array | null;
  columns: ITableColumn[] | null;
  options?: ITableOptions | null;
}

export interface IApi {
  (
    params: any,
    options = <RequestConfigOptions>{}
  ): Promise<any>;
}
