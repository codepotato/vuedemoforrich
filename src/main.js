import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter, {
  symbol : '£',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
});

window.axios = Axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
