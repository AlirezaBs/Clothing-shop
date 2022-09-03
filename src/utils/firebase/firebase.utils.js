import { initializeApp } from "firebase/app"
import {
   getAuth,
   signInWithPopup,
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
   apiKey: import.meta.env.VITE_API_KEY,
   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDER_ID,
   appId: import.meta.env.VITE_APP_ID,
   measurementId: import.meta.env.VITE_MEASUREMENT_ID,
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// just for google
const GoogleProvider = new GoogleAuthProvider() // a class
GoogleProvider.setCustomParameters({
   prompt: "select_account",
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider)

// access to database
export const db = getFirestore()

export const createUserDocumentFromAuth = async (
   userAuth,
   additionalInfo = {}
) => {
   if (!userAuth) return

   const userDocRef = doc(db, "users", userAuth.uid)
   const userSnapshot = await getDoc(userDocRef)

   //if user data does'nt exists
   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth
      const createAt = new Date()
      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createDate: createAt,
            ...additionalInfo,
         })
      } catch (err) {
         console.log(`error creating the user`, err.message)
      }
   }

   return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return

   return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return

   return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => 
   onAuthStateChanged(auth, callback)