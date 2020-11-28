<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary">
      <template #icon>
        <CloudDownloadOutlined />
      </template>
    </a-button>
  </div>
</template>
<script>
import {
  CloudDownloadOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    CloudDownloadOutlined,
  }
}
</script>
