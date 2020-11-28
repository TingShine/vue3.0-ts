import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Row, Col, message, Space, Form, Button} from 'ant-design-vue'

// // 外部引入样式
import 'ant-design-vue/dist/antd.css';
import '@/assets/style/main.css';

const app = createApp(App);
app.use(store).use(router)
app.use(Row).use(Col).use(Space).use(Form).use(Button)
app.config.globalProperties.$message = message;
app.mount('#app')
