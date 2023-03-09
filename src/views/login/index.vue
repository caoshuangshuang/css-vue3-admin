<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: 曹双双
 * @Date: 2022-09-20 10:20:53
 * @LastEditors: 曹双双
 * @LastEditTime: 2022-09-27 16:41:40
-->
<template>
  <div class="login-wrap">
    <div class="form-block">
      <h3>欢迎登录</h3>
      <ElForm :model="form" size="large" :rules="rules" ref="loginFormRef">
        <ElFormItem prop="account">
          <ElInput
            prefix-icon="User"
            v-model="form.account"
            placeholder="账号"
          />
        </ElFormItem>
        <ElFormItem prop="password">
          <ElInput
            prefix-icon="Lock"
            v-model="form.password"
            type="password"
            placeholder="密码"
            show-password
          />
        </ElFormItem>
        <ElFormItem>
          <ElButton
            class="btn-large"
            type="primary"
            @click="handleLogin(loginFormRef)"
            >登录</ElButton
          >
        </ElFormItem>
      </ElForm>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { FormInstance, FormRules } from "element-plus";
import { ElForm, ElFormItem, ElInput, ElButton } from "element-plus";
import { accountRule, passwordRule } from "@/utils/validate";
import { useUserStore } from "@/stores/user";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

const loginFormRef = ref<FormInstance>();
const form = reactive({
  account: "",
  password: "",
});
const rules = reactive<FormRules>({
  account: [...accountRule],
  password: [...passwordRule],
});

/**
 * 登录
 */
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (!valid) {
      return false;
    }
    userStore.login({ ...form }).then(() => {
      handleRedirect();
    });
  });
};

/**
 * 重定向
 */
const handleRedirect = () => {
  const { redirect } = route.query as any;
  if (redirect) {
    router.replace(redirect);
  } else {
    router.replace("/");
  }
};
</script>
<style lang="scss" scoped>
.login-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: rgb(50, 54, 69);

  h3 {
    margin-bottom: 40px;
    font-size: 26px;
    color: #eee;
    text-align: center;
  }

  .form-block {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 300px;
    height: 400px;
    border-radius: 4px;
    text-align: center;

    .btn-large {
      width: 100%;
    }
  }
}
</style>
