import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import AntDesignVue from "ant-design-vue";
import 'ant-design-vue/dist/antd.css'

import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.config.productionTip = false;
Vue.use(AntDesignVue);

import VueClipboards from 'vue-clipboards';
Vue.use(VueClipboards);

import uploader from 'vue-simple-uploader'
Vue.use(uploader);

Vue.use(vuescroll);
Vue.prototype.$vuescrollConfig = {
  vuescroll: {
    mode: 'native'
  },
  scrollPanel: {
    scrollingX: false,
  },
  bar: {
    delayTime: 500,
    onlyShowBarOnScroll: true,
    background: "#cecece",
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
