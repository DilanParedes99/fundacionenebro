import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios';
import Axios from 'axios';
import {interceptors_axios} from './helpers/interceptors';
const moment = require('moment');
require('moment/locale/es');

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, Axios)
 
Vue.use(require('vue-moment'), {
    moment
})

interceptors_axios.setup_request();
interceptors_axios.setup_response();


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
