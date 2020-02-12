import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios.js'
import i18n from './i18n'

Vue.use(AllIosIcon)

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
