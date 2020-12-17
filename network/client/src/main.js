import Vue from 'vue'
import VueAxios from './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.config.productionTip = false
Vue.use(VueAxios)
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
]

const router = new VueRouter({mode: 'history', routes});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
