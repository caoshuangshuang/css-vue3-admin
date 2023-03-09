/*
 * @Description:
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2023-01-06 14:56:08
 * @LastEditors: 曹双双
 * @LastEditTime: 2023-01-14 10:28:01
 */
import type { IApi } from "@/typings/public";
import { resetObj } from '@/utils/index'

interface IPageFunc {
  (val: number): void;
}

interface IOpts {
  searchForm?:  {};
  customQueryParams?: {};
  pagination?: {};
  getListApi: IApi;
  sizeChangeFunc?: () => {};
  currentChangeFunc?: () => {};
  resetFunc?: () => {};
}

export default function useList(opts: IOpts) {
  const {
    searchForm,
    customQueryParams,
    pagination: customPagination,
    getListApi,
    sizeChangeFunc,
    currentChangeFunc,
    resetFunc,
  } = opts;

  const pagination = reactive({
    pageSize: 10,
    pageNum: 1,
    total: 50,
    ...customPagination,
  });
  const tableData = ref([]);

  const getList = async () => {
    const params = {
      ...searchForm,
      ...customQueryParams,
      pageSize: pagination.pageSize,
      pageNum: pagination.pageNum,
    };
    const res = await getListApi(params);
    console.log("res", res);
    // if(res&&res.co)
  };

  const handleSearch = () => {
    getList();
  };

  const handleReset = () => {
    resetObj(searchForm)
    resetFunc();
    getList();
  };

  const handleSizeChange: IPageFunc = (val: number) => {
    pagination.pageSize = val;
    sizeChangeFunc();
    getList();
  };

  const handleCurrentChange: IPageFunc = (val: number) => {
    pagination.pageNum = val;
    currentChangeFunc();
    getList();
  };
  return {
    tableData,
    pagination,
    handleSearch,
    getList,
    handleReset,
    handleSizeChange,
    handleCurrentChange,
  };
}
