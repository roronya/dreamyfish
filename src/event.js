import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
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
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

// onConnect
chrome.runtime.onConnect.addListener(port => {
  console.assert(port.name == 'dreamyfish')
  port.onMessage.addListener(msg => {
    db.collection('recommends')
      .where('id', '==', Number(msg.id))
      .get()
      .then(qs => qs.docs.map(d => d.data()))
      .then(recommends => {
        const promises = recommends.map(recommend =>
          db
            .collection('games')
            .where('id', '==', recommend.recommend_id)
            .get()
        )
        return Promise.all(promises)
      })
      .then(gameQSs => gameQSs.map(qs => qs.docs.map(d => d.data())).flat())
      .then(games => port.postMessage({ games }))
      .catch(err => {
        console.log(err)
        port.postMessage({ error: err })
      })
  })
})
