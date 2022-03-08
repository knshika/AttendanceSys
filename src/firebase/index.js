import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()