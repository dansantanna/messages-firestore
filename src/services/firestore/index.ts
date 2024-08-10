import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const getFirestoreDb = () => {
  const firebaseConfig = {
    apiKey: process.env.VITE_APIKEY,
    authDomain: process.env.VITE_AUTHDOMAIN,
    projectId: process.env.VITE_PROJECTID,
    storageBucket: process.env.VITE_STORAGEBUCKET,
    messagingSenderId: process.env.VITE_MESSAGINGSENDERID,
    appId: process.env.VITE_APPID,
    measurementId: process.env.VITE_MEASUREMENTID,
  };

  const app = initializeApp(firebaseConfig);
  return getFirestore(app);
};

export default getFirestoreDb;
