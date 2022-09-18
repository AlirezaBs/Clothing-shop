import { useState } from "react"
import {
   signInAuthUserWithEmailAndPassword,
   signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component"

import { SignUpContainer, ButtonContainer } from "./sign-in-form.styles.jsx"

const defaultFormFields = {
   email: "",
   password: "",
}

const SignInForm = () => {
   const [formFields, setFormFirelds] = useState(defaultFormFields)
   const { email, password } = formFields

   const resetFormFields = () => {
      setFormFirelds(defaultFormFields)
   }

   const signInWithGoogle = async () => {
      await signInWithGooglePopup()
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      try {
         const { user } = await signInAuthUserWithEmailAndPassword(
            email,
            password
         )

         resetFormFields()
      } catch (error) {
         switch (error.code) {
            case "auth/wrong-password":
               alert("incorrect password for email")
               break
            case "auth/user-not-found":
               alert("no users associated with this email")
               break
            default:
               console.log(error)
         }
      }
   }

   function handleChange(e) {
      const { name, value } = e.target
      setFormFirelds({ ...formFields, [name]: value })
   }

   return (
      <SignUpContainer>
         <h2>Already have an account?</h2>
         <span>Sign in with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Email"
               type="email"
               name="email"
               onChange={handleChange}
               value={email}
               required
            />

            <FormInput
               label="Password"
               type="password"
               name="password"
               onChange={handleChange}
               value={password}
               required
            />
            <ButtonContainer>
               <Button type="submit">Sign In</Button>
               <Button
                  type="button"
                  buttonType={BUTTON_TYPE_CLASSES.google}
                  onClick={signInWithGoogle}
               >
                  Google sign In
               </Button>
            </ButtonContainer>
         </form>
      </SignUpContainer>
   )
}

export default SignInForm
