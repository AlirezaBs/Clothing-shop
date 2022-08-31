import {
   auth,
   signInWithGooglePopup,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

import SignUpForm from "../../components/sign-up-form/Sign-up-form.component"

const SignIn = () => {
   

   const logGoogleUsers = async () => {
      const { user } = await signInWithGooglePopup()
      const userDocRef = await createUserDocumentFromAuth(user)
   }

   return (
      <>
         <h1>sign in page</h1>
         <button onClick={logGoogleUsers}>sign in with google popup</button>
         <SignUpForm />
      </>
   )
}

export default SignIn
