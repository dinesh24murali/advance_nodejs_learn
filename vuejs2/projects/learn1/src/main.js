import Vue from 'vue'

import App from './App.vue'
import VueRouter from 'vue-router'
import router from './modules/router'
import store from './store/store'

import './styles/app.scss';

Vue.config.productionTip = false
Vue.use(VueRouter)


new Vue({
  store: store,
  router,
  render: h => h(App),
}).$mount('#app')
