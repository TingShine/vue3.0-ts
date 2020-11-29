<template>
  <a-row type="flex" justify="center">
    <a-col :span="10" :xxl="8" :xl="8" :lg="10" :md="12" :sm="15" :xs="20">
      <a-card
        title="后台系统"
        style="width: 100%"
        :head-style="{ 'font-size': '2rem', 'font-weight': 'bold' }"
        :hoverable="true"
      >
        <a-form ref="forms" layout="horizontal">
          <a-form-item
            label="账户"
            :label-col="itemCol"
            :wrapper-col="itemWrapperCol"
          >
            <a-input v-model:value="formData.username" />
          </a-form-item>
          <a-form-item
            label="密码"
            :label-col="itemCol"
            :wrapper-col="itemWrapperCol"
          >
            <a-input-password
              v-model:value="formData.password"
              :visibility-toggle="true"
            />
          </a-form-item>

          <a-row
            type="flex"
            justify="space-around"
            align="middle"
            style="margin: 2rem 0rem 2rem 0"
          >
            <a-col :span="12" :push="2" style="text-align: left">
              <a-checkbox v-model="checked">
                七天免登录
              </a-checkbox>
            </a-col>
            <a-col :span="6" :xs="10" :pull="2">
              <a-button type="primary" block size="large" @click="handleLogin">
                登录
              </a-button>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from "vue";
import { Card, Input, Checkbox } from "ant-design-vue";
import { LoginApi } from '../../api/user'; 

export default defineComponent({
  components: {
    "a-card": Card,
    "a-input": Input,
    "a-input-password": Input.Password,
    ACheckbox: Checkbox,
  },
  setup() {
    const formData = reactive({
      username: "",
      password: "",
    });
    const checked = ref(false);


    const handleLogin = async () => {
      const res = await LoginApi(toRaw(formData));
      console.log(res);
    };

    

    return {
      formData,
      checked,
      handleLogin,
    };
  },
  data() {
    return {
      itemCol: {
        span: 4,
      },
      itemWrapperCol: {
        span: 16,
        offset: 1,
      },
    };
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 2rem;
}

.space-align-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;
}
</style>
