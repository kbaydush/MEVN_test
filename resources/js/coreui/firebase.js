import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
  projectId: 'test-3f35f',
  databaseURL: 'https://test-3f35f.firebaseio.com',
})

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export const db = firebase.firestore()
//
//   <script src="https://www.gstatic.com/firebasejs/5.7.2/firebase.js"></script>
//   <script>
// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyDQqVC5zx4MmFrJOH2O5vzq0wRokA7ip3o",
//   authDomain: "test-3f35f.firebaseapp.com",
//   databaseURL: "https://test-3f35f.firebaseio.com",
//   projectId: "test-3f35f",
//   storageBucket: "test-3f35f.appspot.com",
//   messagingSenderId: "886888765269"
// };
// firebase.initializeApp(config);
// </script>
