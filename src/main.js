import Vue from 'vue'
import App from './App.vue'
import router from './router'
import toast from "./components/common/toast"
import store from "./store"

Vue.use(toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
