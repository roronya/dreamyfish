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

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == 'dreamyfish')
  port.onMessage.addListener(msg => {
    console.log('recive message')
    db.collection('games')
      .get()
      .then(querySnapshot => {
        const games = querySnapshot.docs.map(doc => doc.data())
        port.postMessage(games)
      })
  })
})
