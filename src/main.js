// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 1.使用本地 dy-form
// import dyForm from './components/dy-form'
// Vue.component('dy-form', dyForm)

// 2.使用 dy-form npm 包
import dyForm from 'vue-dy-form'
Vue.use(dyForm)

Vue.config.productionTip = false
Vue.use(Element)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
