import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOvGoWjxStRdY0vo_i5LK053e7r1UGY3s",
    authDomain: "mydisney-48d73.firebaseapp.com",
    projectId: "mydisney-48d73",
    storageBucket: "mydisney-48d73.appspot.com",
    messagingSenderId: "82123855067",
    appId: "1:82123855067:web:98ba450b800f184ef3e8fe",
    measurementId: "G-L4YVH92WZH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;