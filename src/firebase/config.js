import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaAfNDiIniOTtGOKph--JV6wEZz1dnb5o",
  authDomain: "nardi-simple-portfolio.firebaseapp.com",
  projectId: "nardi-simple-portfolio",
  storageBucket: "nardi-simple-portfolio.firebasestorage.app",
  messagingSenderId: "91155291022",
  appId: "1:91155291022:web:b7d812d62a4813bfeba2df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Analytics disabled for now (causes CONFIGURATION_NOT_FOUND error in development)
// const analytics = getAnalytics(app);

export { auth, db };
