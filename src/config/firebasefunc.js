import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaSidazRlnzWaU_mGHQj9c8YYDxVCt4QQ",
  authDomain: "first-project-31a93.firebaseapp.com",
  databaseURL: "https://first-project-31a93-default-rtdb.firebaseio.com",
  projectId: "first-project-31a93",
  storageBucket: "first-project-31a93.appspot.com",
  messagingSenderId: "519997727667",
  appId: "1:519997727667:web:4092da188ef311044f61c6",
  measurementId: "G-M7F0QDG76T"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

let userLogin = (obj) => {
  console.log(obj);
};

let signUp = (obj, navigate) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        let uid = user.uid;
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};

export { userLogin, signUp };

