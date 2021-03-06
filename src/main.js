import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from './store'
import './mock'

import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
