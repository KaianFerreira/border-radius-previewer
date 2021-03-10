import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Input from './components/Input.vue'
// importing global styles
import './assets/scss/app.scss'

// importing global component

Vue.component('K-Input', Input)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
