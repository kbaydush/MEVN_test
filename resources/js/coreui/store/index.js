import Vue from 'vue'
import Vuex from 'vuex'
import * as getters  from './getters';
import * as actions  from './actions';
import * as mutations  from './mutations';
import {getLoggedinUser} from '../partials/auth'

const user = getLoggedinUser()

Vue.use(Vuex)
const API_KEY = 'AIzaSyDQqVC5zx4MmFrJOH2O5vzq0wRokA7ip3o'
// const WEATHER_API_KEY = '<< your OpenWeather api key here >>'
// const NPS_API_KEY = '<< your NPS api key here >>'

export const store = new Vuex.Store({
  state: {
      currentUser: user,
      isLoggedIn: !!user,
      loading: false,
      auth_error: null,
      reg_error: null,
      registeredUser: null,
      message: 'Loading...',
      apiKey: API_KEY,
      // apiWeatherKey: OW_API_KEY
    },
    mutations,
    actions,
    getters,
})

export default store
