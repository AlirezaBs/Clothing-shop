import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUsers = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

   return (
    <>
      <h1>sign in page</h1>
      <button onClick={logGoogleUsers} >sign in with google popup</button>
    </>
   )
}

export default SignIn
