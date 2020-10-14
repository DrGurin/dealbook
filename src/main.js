import Vue from 'vue'
import App from './App.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import {i18n} from "./plugins/i18n.js"


Vue.config.productionTip = false
Vue.component('VueSlickCarousel', VueSlickCarousel)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
