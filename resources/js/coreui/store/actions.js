import Vue from 'vue';
import { db } from '../firebase'
import router from '../router/index'
// import {HTTP} from '../axios';
import UsersApi from '@/api/Users';
// import {login} from "./mutations";

export const loadTasks = ({commit, state}) => {
  const tasks = db.collection('tasks').orderBy('createdAt')
    //.orderBy(state.orderBy)

  tasks.onSnapshot(querySnapshot => {
    const Tasks = []
    querySnapshot.forEach(doc => {
      Tasks.push({ id: doc.id, ...doc.data() })
    })
    commit('loadTasks', Tasks)
    commit('setLoading', false)
  })
};

export const getUsers = (context) => {
  UsersApi
    .getUsers()
    .then(response => {
      context.commit('setUsers', response.data);
    })
    .catch(error => {
      console.log(error)
      // @TODO handle the error -> notification system
    });
};

export const addNewTask = ({commit}, newTask) => {
  db.collection('tasks').add(newTask)
  router.push('/tasks')
};

// export const loadTask = ({commit, state}, park) => {
//   commit('clearLoadedPark')
//   HTTP.get('parks?parkCode=' + park.parkCode + '&api_key=' + state.apiKey)
//     .then(response => {
//       let objPark = response.data.data[0]
//       commit('loadParkImage', park.image)
//       commit('loadPark', objPark)
//       let strLatLong = objPark.latLong
//       let arrLatLong = strLatLong.split(",");
//       let lat = arrLatLong[0].replace('lat:', '').trim()
//       let longitude = arrLatLong[1].replace('long:', '').trim()
//
//       let str = `weather?lat=${lat}&lon=${longitude}&APPID=${state.apiWeatherKey}`
//
//       HTTP2.get(`${str}`)
//         .then(response => {
//           commit('loadParkWeather', response.data)
//           router.push('parkDetails')
//         })
//     })
//     .catch(err => {
//       console.log(err);
//     })
// };

export const deleteTask = ({commit}, id) => {
  db.collection('tasks').doc(id).delete()
  router.push('/tasks')
};

export const clearParks = ({commit}) => {
  commit('clearTasks')
  router.push('/')
};

export const orderBy = ({commit, dispatch}) => {
  commit('orderBy')
  dispatch('loadTasks', 'yes')
  router.push('/tasks')
};

export const clearMessage = ({commit}) => {
  commit('clearMessage')
};

// export const setTaskState = ({commit}, strState) => {
//   if(strState === 'United States Virgin Islands'){
//     commit('setTaskState', 'VI')
//   } else {
//     commit('setTaskState', strState)
//   }
// };

export const setLoading = ({commit}, status) => {
  commit('setLoading', status)
};

export const login = context => {
  context.commit("login");
}
