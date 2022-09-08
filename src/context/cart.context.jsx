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

const removeCartItem = (cartItems, cartItemToRemove) => {
   const existingCartItem = cartItems.find(
      (item) => item.id === cartItemToRemove.id
   )

   // if quantity is equal to 1, then remove item
   if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
   }

   return cartItems.map((item) =>
      item.id === cartItemToRemove.id
         ? { ...item, quantity: item.quantity - 1 }
         : item
   )
}

const clearCartItem = (cartItems, cartItemToClear) =>
   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

export const CartContext = createContext({
   isCartOpen: false,
   setIsCartOpen: () => {},
   cartItems: [],
   removeItemFromCart: () => {},
   addItemToCart: () => {},
   clearItemFromCart: () => {},
   cartItemsQuantity: 0,
   cartTotal: 0,
})

export const CartProvider = ({ children }) => {
   const [isCartOpen, setIsCartOpen] = useState(false)
   const [cartItems, setCartItems] = useState([])
   const [cartQuantity, setCartQuantity] = useState(0)
   const [cartTotal, setCartTotal] = useState(0)

   const addItemToCart = (productToAdd) => {
      setCartItems(addCartItem(cartItems, productToAdd))
   }

   const removeItemFromCart = (cartItemToRemove) => {
      setCartItems(removeCartItem(cartItems, cartItemToRemove))
   }

   const clearItemFromCart = (cartItemToClear) => {
      setCartItems(clearCartItem(cartItems, cartItemToClear))
   }

   useEffect(() => {
      const newCartQuantity = cartItems.reduce(
         (sum, item) => sum + item.quantity,
         0
      )

      setCartQuantity(newCartQuantity)
   }, [cartItems])

   useEffect(() => {
      const newCartTotal = cartItems.reduce(
         (sum, item) => sum + item.price * item.quantity,
         0
      )

      setCartTotal(newCartTotal)
   }, [cartItems])

   const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      addItemToCart,
      removeItemFromCart,
      clearItemFromCart,
      cartQuantity,
      cartTotal,
   }

   return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
