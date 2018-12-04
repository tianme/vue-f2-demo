import 'vue-stone/dist/vue-stone.css';
import Vue from 'vue';
import Stone from 'vue-stone';
import App from './App.vue';

Vue.use(Stone);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

