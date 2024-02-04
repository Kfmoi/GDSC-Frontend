// firebase configuration document

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// dictionary for firebase configuration attributes
const firebaseConfig = {
    apiKey: "AIzaSyDPVLFqJEHKiveDD9RoSIYQeO2ZpUmtEak",
    authDomain: "typing-assistant-81810.firebaseapp.com",
    projectId: "typing-assistant-81810",
    storageBucket: "typing-assistant-81810.appspot.com",
    messagingSenderId: "327729751390",
    appId: "1:327729751390:web:f894291ed870c7869c9bcf",
    measurementId: "G-X7EF3LP54D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get firebase database
const db = firebase.firestore();

// prevents warnings/errors in console
db.settings({timestampsInSnapshots: true})

export default db;