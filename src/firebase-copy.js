import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { generateUsername } from "./helper";

const firebaseConfig = {
  apiKey: "AIzaSyDuIocTjEzKFWF1J2kcB-9LrFMqGlDKht8",
  authDomain: "calendar-clone-5ce7d.firebaseapp.com",
  projectId: "calendar-clone-5ce7d",
  storageBucket: "calendar-clone-5ce7d.appspot.com",
  messagingSenderId: "211766733542",
  appId: "1:211766733542:web:e0083c9aa7acbb911d2927",
  measurementId: "G-GDML6JP4YG",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

export const fetchRegisteredUser = async (authenticatedUser) => {
  if (!authenticatedUser) return;

  const userRef = db.doc(`users/${authenticatedUser.uid}`);
  const user = await userRef.get();

  let userDoc;

  if (user.exists) {
    return user.data();
  } else {
    try {
      await registerUserToDatabase(authenticatedUser, userRef);
    } catch (error) {
      alert(error);
    }
    userDoc = await userRef.get();
    return userDoc.data();
  }
};

const registerUserToDatabase = async (authenticatedUser, userRef) => {
  let username = await generateUsername(authenticatedUser.displayName);

  await userRef.set({
    name: authenticatedUser.displayName,
    username: username,
    email: authenticatedUser.email,
  });
};
