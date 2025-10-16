import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFsjbAMZhp3IKTtaXgpX1Ldikxjf1N2aM",
  authDomain: "calcimc-ee41e.firebaseapp.com",
  projectId: "calcimc-ee41e",
  storageBucket: "calcimc-ee41e.firebasestorage.app",
  messagingSenderId: "740210922069",
  appId: "1:740210922069:web:23eedbc786b12d78237adc",
  measurementId: "G-C6RH6KTXSG",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
