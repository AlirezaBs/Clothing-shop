import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { CategoriesProvider } from "./context/categories.context"
import { UserProvider } from "./context/user.context"
import { CartProvider } from "./context/cart.context"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <UserProvider>
            <CategoriesProvider>
               <CartProvider>
                  <App />
               </CartProvider>
            </CategoriesProvider>
         </UserProvider>
      </BrowserRouter>
   </React.StrictMode>
)
