// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import VueResource from "vue-resource"
import Firebase from "firebase/app"

Vue.use(VueResource)
Vue.use(VueParticles)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
