import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './state'
// 如下两个是网络的请求组件
// import VueAxios from "vue-axios"
import axios from 'axios'

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.axios = axios
// 基础的url地址
axios.defaults.baseURL = 'http://localhost:7070';
// Vue.use(VueAxios, axios);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')