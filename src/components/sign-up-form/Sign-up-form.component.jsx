import { useState } from "react"
import {
   createAuthUserWithEmailAndPassword,
   createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/Button.component"

import {SignUpContainer} from "./sign-up-form.styles.jsx"

const defaultFormFields = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: "",
}

const SignUpForm = () => {
   const [formFields, setFormFirelds] = useState(defaultFormFields)
   const { displayName, email, password, confirmPassword } = formFields


   const resetFormFields = () => {
      setFormFirelds(defaultFormFields)
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (password !== confirmPassword) {
         alert("password do not match!")
         return
      }

      try {
         const { user } = await createAuthUserWithEmailAndPassword(
            email,
            password
         )
         await createUserDocumentFromAuth(user, { displayName })

         resetFormFields()
      } catch (error) {
         if (error.code === "auth/email-already-in-use") {
            alert("Cannot create user, email already in use")
         } else {
            console.log("user creation encountered on error", error)
         }
      }
   }

   function handleChange(e) {
      const { name, value } = e.target
      setFormFirelds({ ...formFields, [name]: value })
   }

   return (
      <SignUpContainer>
         <h2>Don't have an account?</h2>
         <span>Sign up with your email and password</span>
         <form onSubmit={handleSubmit}>
            <FormInput
               label="Display name"
               type="text"
               name="displayName"
               onChange={handleChange}
               value={displayName}
               required
            />

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

            <FormInput
               label="Confirm Password"
               type="password"
               name="confirmPassword"
               onChange={handleChange}
               value={confirmPassword}
               required
            />

            <Button type="submit">Sign Up</Button>
         </form>
      </SignUpContainer>
   )
}

export default SignUpForm
