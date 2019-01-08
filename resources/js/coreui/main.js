// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'
import Notifications from 'vue-notification'
import Sweetalert from 'vue-sweetalert2'
import Loading from './components/Loading'
import Select2 from './components/Select'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import {store} from './store/index'
import Buefy from 'buefy'
import VueFire from 'vuefire'
Vue.use(VueFire)
// import 'buefy/lib/buefy.css'
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: 'veeFields'
});
Vue.use(Buefy);
// const store = new Vuex.Store(storeData);

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(Sweetalert)

Vue.component('b-loading', Loading)
Vue.component('b-select-2', Select2)
Vue.component('b-datepicker', {
  extends: Datepicker,
  props  : {
    bootstrapStyling: {
      type   : Boolean,
      default: true,
    },
    language: {
      type   : Object,
      default: () => id,
    },
  },
})

export default new Vue({
  el        : '#app',
  store     : store,
  router    : router,
  template  : '<App/>',
  components: { App },
  render: h => h(App),
  created(){
    this.$store.dispatch('setLoading', true)
    this.$store.dispatch('loadTasks')
  },
})
