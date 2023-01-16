// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2a1rT7v-vpHEehfk0okGcirSgtLp2ccA",
  authDomain: "login-svelte-477d0.firebaseapp.com",
  projectId: "login-svelte-477d0",
  storageBucket: "login-svelte-477d0.appspot.com",
  messagingSenderId: "380527205830",
  appId: "1:380527205830:web:3bc1921e470f7a8c1166c7"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
 
