// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'
import VueResource from "vue-resource"
import Firebase from "firebase/app"
import VueTypedJs from 'vue-typed-js'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDx7NRK-a1qctoF9z36CSf_H2gyJmY9u3s",
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueResource)
Vue.use(VueTypedJs)
Vue.use(VueParticles)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
