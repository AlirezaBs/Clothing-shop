import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import Button from "../button/Button.component"
import CartItem from "../cart-item/Cart-item.component"

import "./cart-dropdown.styles.scss"

const CartDropdown = () => {
   const { cartItems } = useContext(CartContext)

   return (
      <div className="cart-dropdown-container">
         <div className="cart-items">
            {cartItems.map((item) => (
               <CartItem key={item.id} {...item} />
            ))}
         </div>
         <Button>CHECKOUT</Button>
      </div>
   )
}

export default CartDropdown
