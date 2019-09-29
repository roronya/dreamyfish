import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC85CazvdVEixJkAo5PWQPiCWFTLgnH8sk',
  authDomain: 'dreamyfish-4dabb.firebaseapp.com',
  databaseURL: 'https://dreamyfish-4dabb.firebaseio.com',
  projectId: 'dreamyfish-4dabb',
  storageBucket: 'dreamyfish-4dabb.appspot.com',
  messagingSenderId: '125954044031',
  appId: '1:125954044031:web:35bb4169aa724de9f54f4a',
  measurementId: 'G-FZFB7G5M9M'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

console.log('loaded')
db.collection('games')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  })
