import Vue from 'vue'
import Vuex from 'vuex'
import * as getters  from './getters';
import * as actions  from './actions';
import * as mutations  from './mutations';
import {getLoggedinUser} from '../partials/auth'

const user = getLoggedinUser()

Vue.use(Vuex)
// const WEATHER_API_KEY = '<< your OpenWeather api key here >>'
// const NPS_API_KEY = '<< your NPS api key here >>'

export const store = new Vuex.Store({
  state: {
    loading: false,
    users: [],
    fbError: '',
    orderBy: 'name',
    loadedTask: null,
    hideNav: false,
    currentUser: user,
    isLoggedIn: !!user,
    auth_error: null,
    reg_error: null,
    registeredUser: null,
    message: 'Loading...',
    version: __VERSION,
    appName: 'All Users',
    tasks: [],
    },
    mutations,
    actions,
    getters,
})

export default store
