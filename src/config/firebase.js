import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
 /// DIT VAN FIREBASE
}

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { app, database }
