import Vue from 'vue';
import App from './App.vue';
import VueSlickCarousel from 'vue-slick-carousel';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {i18n} from "./plugins/i18n.js";
import Chart from 'chart.js';
import VueScrollTo from 'vue-scrollto';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Chart.defaults.global.defaultFontColor = 'transparent';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;


Vue.config.productionTip = false;
Vue.component('VueSlickCarousel', VueSlickCarousel);

Vue.use(VueAxios, axios)

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -46,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');
