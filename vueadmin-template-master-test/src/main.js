// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Local from 'element-ui/lib/locale/lang/en'
import './permission' // 进度条
import './icons'
import ElementUI from 'element-ui'
import './style/index.css'
Vue.config.productionTip = false
Vue.use(ElementUi, {Local})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
