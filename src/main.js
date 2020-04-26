import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from '../src/router/index.js';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import 'request/style.css';
import 'request/faq.css';
import 'request/cssStyle.css';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// import VueLazyload from 'vue-lazyload';//懒加载工具

import {
  $post,
  $get,
  httpurl,
  isPhoneNumber,
  showToast
} from './request/http'

// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',
//   attempt: 1
// })
Vue.use(Viewer);

Viewer.setDefaults({
  Options: {
    "inline": true,
    "button": true,
    "navbar": true,
    "title": true,
    "toolbar": true,
    "tooltip": true,
    "movable": true,
    "zoomable": true,
    "rotatable": true,
    "scalable": true,
    "transition": true,
    "fullscreen": true,
    "keyboard": true,
    "url": "data-source"
  }
});

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$get = $get;
Vue.prototype.$post = $post;
Vue.prototype.httpurl = httpurl;
Vue.prototype.isPhoneNumber = isPhoneNumber;
Vue.prototype.showToast = showToast;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


//获取基础数据（底部）
function getBaseData() {
  let data = {};
  $get("BaseData", data).then(res => {
    console.log(res.data.seo_keywords)
    document.title = res.data.seo_title || '牛津国际';
    document.querySelector('meta[name="keywords"]').setAttribute('content', res.data.seo_keywords);
    document.querySelector('meta[name="description"]').setAttribute('content', res.data.seo_descript);
    // this.baseData = res.data;
    console.log(res);
  });
}
getBaseData()
