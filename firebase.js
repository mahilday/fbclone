import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD_soVGsk6CCSgmkVSb1jFpUQZ26Jp7xIc",
  authDomain: "facebook-clone-84ec5.firebaseapp.com",
  projectId: "facebook-clone-84ec5",
  storageBucket: "facebook-clone-84ec5.appspot.com",
  messagingSenderId: "205911691409",
  appId: "1:205911691409:web:3cfb0d9ade9bd3c878af30",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
