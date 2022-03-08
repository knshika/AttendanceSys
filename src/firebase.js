/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDCJehtuN-hVeheqgHySUn-8XZYCyMdBVc",
	authDomain: "attendancesys-b8ad3.firebaseapp.com",
	projectId: "attendancesys-b8ad3",
	storageBucket: "attendancesys-b8ad3.appspot.com",
	messagingSenderId: "826945681470",
	appId: "1:826945681470:web:900b93158bb75fd44e396f",
	measurementId: "G-HC4M74JB9T"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)