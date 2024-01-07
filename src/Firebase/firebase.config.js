// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//     apiKey:import.meta.env.CAR_apikey,
//     authDomain:import.meta.env.CAR_authdomain,
//     projectId:import.meta.env.CAR_projectid,
//     storageBucket:import.meta.env.CAR_storagebucket,
//     messagingSenderId:import.meta.env.CAR_messagingsenderid,
//     appId:import.meta.env.CAR_appid
// };

const firebaseConfig = {
    apiKey: "AIzaSyA-FaKcFlQ2JC7MuSxtHEd_P3-f_riPFoU",
    authDomain: "car-service-2dc17.firebaseapp.com",
    projectId: "car-service-2dc17",
    storageBucket: "car-service-2dc17.appspot.com",
    messagingSenderId: "185085652890",
    appId: "1:185085652890:web:dd10a2342972fd23d41423"
};

// const firebaseConfig = {
//     apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
//     // other configuration options
// };




// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;