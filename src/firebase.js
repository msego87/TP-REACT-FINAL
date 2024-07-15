import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBci7s3HslD7rQ98ZwXLBUAwQfbYWy93VA",
  authDomain: "proyecto-final-react-ad24b.firebaseapp.com",
  projectId: "proyecto-final-react-ad24b",
  storageBucket: "proyecto-final-react-ad24b.appspot.com",
  messagingSenderId: "759603668968",
  appId: "1:759603668968:web:a8d4e1bc86b2541f07e65d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence( auth, browserLocalPersistence )
.then(() => {
    console.log("Auth persistence set to LocalStorage succesfully");
})
.catch((error) => {
    console.error("Error setting auth persistence: ", error);
})