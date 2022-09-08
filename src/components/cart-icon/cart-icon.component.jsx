import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import "./cart-icon.styles.scss"

const CartIcon = () => {
   const { isCartOpen, setIsCartOpen, cartQuantity } = useContext(CartContext)

   const toggleisCartOpen = () => setIsCartOpen(!isCartOpen)

   return (
      <div className="cart-icon-container" onClick={toggleisCartOpen}>
         <ShoppingIcon className="shopping-icon" />
         <span className="item-count">{cartQuantity}</span>
      </div>
   )
}

export default CartIcon
 