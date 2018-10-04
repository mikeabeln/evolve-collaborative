import firebase from 'firebase/app'
import 'firebase/auth'

export const config = {
    apiKey: 'AIzaSyAazw7naf8Y3u7S4-gn8wo2Bda2HQBVyz8',
    authDomain: 'evolve-collaborative.firebaseapp.com',
    databaseURL: 'https://evolve-collaborative.firebaseio.com',
    projectId: 'evolve-collaborative',
    storageBucket: '',
    messagingSenderId: '878479204216'
}

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
