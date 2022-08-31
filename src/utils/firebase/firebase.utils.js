import { initializeApp } from "firebase/app"
import {
   getAuth,
   signInWithPopup,
   createUserWithEmailAndPassword,
   GoogleAuthProvider,
} from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig = {
   apiKey: "AIzaSyBbxBBUp1cJ8hyjff1_BHktLmNtafQwzbY",
   authDomain: "clothing-shop-bf926.firebaseapp.com",
   projectId: "clothing-shop-bf926",
   storageBucket: "clothing-shop-bf926.appspot.com",
   messagingSenderId: "938090526296",
   appId: "1:938090526296:web:e1fb9938a9cfe62de23c2d",
   measurementId: "G-TBTCEDN51T",
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
