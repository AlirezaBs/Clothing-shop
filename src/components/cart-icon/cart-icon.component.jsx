import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import {CartIconContainer,ItemCount} from "./cart-icon.styles.jsx"

const CartIcon = () => {
   const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext)

   const toggleisCartOpen = () => setIsCartOpen(!isCartOpen)

   return (
      <CartIconContainer onClick={toggleisCartOpen}>
         <ShoppingIcon className="shopping-icon" />
         <ItemCount>{cartQuantity}</ItemCount>
      </CartIconContainer>
   )
}

export default CartIcon
 