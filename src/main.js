import Vue from 'vue'
import App from './App.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import {i18n} from "./plugins/i18n.js"
import Chart from 'chart.js'
// 2. Импортируйте метод `generateChart()` для создания компонента vue

// 3. Расширьте один из графиков по умолчанию
// http://www.chartjs.org/docs/latest/developers/charts.html
Chart.defaults.global.defaultFontColor = 'transparent';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0;


Vue.config.productionTip = false
Vue.component('VueSlickCarousel', VueSlickCarousel)

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
