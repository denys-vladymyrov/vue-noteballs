import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAMnD_acU2a70lR62x4M3NbTUJRoifGH08",
  authDomain: "noteballs-231cc.firebaseapp.com",
  projectId: "noteballs-231cc",
  storageBucket: "noteballs-231cc.appspot.com",
  messagingSenderId: "178498724950",
  appId: "1:178498724950:web:1f7191a56d070e3a8807f7"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}