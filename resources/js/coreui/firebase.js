import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire)
// Initialize Firebase
const config = {
  apiKey           : 'AIzaSyDQqVC5zx4MmFrJOH2O5vzq0wRokA7ip3o',
  authDomain       : 'test-3f35f.firebaseapp.com',
  databaseURL      : 'https://test-3f35f.firebaseio.com',
  projectId        : 'test-3f35f',
  storageBucket    : 'test-3f35f.appspot.com',
  messagingSenderId: '886888765269',
}
firebase.initializeApp(config)

const firestore = firebase.firestore();
const settings  = { timestampsInSnapshots: true }
firestore.settings(settings)
export const db = firebase.firestore()
