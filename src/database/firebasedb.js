import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBexOgzIkfnsidTTFwvFTIBDoyfsw0QkSs',
  authDomain: 'donchicoin.firebaseapp.com',
  databaseURL: 'https://donchicoin.firebaseio.com',
  projectId: 'donchicoin',
  storageBucket: 'donchicoin.appspot.com',
  messagingSenderId: '1066916503780',
  appId: '1:1066916503780:web:4ce68ec0aa136cd01eccf1',
  measurementId: 'G-VNRVZ8LZKG',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
