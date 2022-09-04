import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { ProductProvider } from "./context/products.context"
import { UserProvider } from "./context/user.context"
import { CartProvider } from "./context/cart.context"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <UserProvider>
            <ProductProvider>
               <CartProvider>
                  <App />
               </CartProvider>
            </ProductProvider>
         </UserProvider>
      </BrowserRouter>
   </React.StrictMode>
)
