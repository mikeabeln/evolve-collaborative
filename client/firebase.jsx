import firebase from 'firebase/app'
import 'firebase/auth'

export const config = {
    apiKey: 'AIzaSyDET_geKH87n5W0yA6EDQzvl4_2pFAS4mA',
    authDomain: 'evolve-collaborative.firebaseapp.com',
    databaseURL: 'https://evolve-collaborative.firebaseio.com',
    projectId: 'evolve-collaborative',
    storageBucket: 'evolve-collaborative.appspot.com',
    messagingSenderId: '461325237357'
}

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
