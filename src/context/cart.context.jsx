import { createContext, useState, useEffect } from "react"

const addCartItem = (cartItems, productToAdd) => {
   // if item exists
   const isItemExists = cartItems.find((item) => item.id === productToAdd.id)

   if (isItemExists) {
      return cartItems.map((item) =>
         item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
      )
   }

   // if does't exists
   return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   addItemToCart: () => {},
   cartItemsQuantity: 0,
})

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false)
   const [cartItems, setCartItems] = useState([])
   const [cartQuantity, setCartQuantity] = useState(0)

   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
   }

   useEffect(() => {
      const newCartQuantity = cartItems.reduce((sum, item) => {
         return sum + item.quantity
      }, 0)

      setCartQuantity(newCartQuantity)
   }, [cartItems])

   const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      addItemToCart,
      cartQuantity,
   }

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
