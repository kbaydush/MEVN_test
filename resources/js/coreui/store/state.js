// root state object.
// each Vuex instance is just a single state tree.

// actions are functions that cause side effects and can involve
// asynchronous operations.
import UsersApi from '@/api/Users';

export const loadTasks = (state, tasks) => {
  state.tasks = tasks
};

export const clearTasks = (state) => {
  state.tasks = []
  state.orderBy = "name"
  state.loadedPark = null
};

export const orderBy = (state) => {
  state.orderBy = "state"
};

export const loadTask = (state, park) => {
  state.loadedPark = park
};

export const clearLoadedTask = state => {
  state.loadedPark = null
};

export const clearMessage = state => {
  state.message = ''
};

export const loadParkImage = (state, image) => {
  state.loadedParkImage = image
};

export const loadParkWeather = (state, objWeather) => {
  state.loadParkWeather = objWeather
};

export const setTaskState = (state, strState) => {
  state.parkState = strState
};

export const setLoading = (state, status) => {
  state.loading = status
};
