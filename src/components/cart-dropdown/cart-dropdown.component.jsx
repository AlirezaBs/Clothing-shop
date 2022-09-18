import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../context/cart.context"
import Button from "../button/Button.component"
import CartItem from "../cart-item/Cart-item.component"

import { CartDropdownContainer, CartItemss, EmptyMessage } from "./cart-dropdown.styles.jsx"

const CartDropdown = () => {
   const { cartItems, setIsCartOpen } = useContext(CartContext)
   const navigate = useNavigate()

   const goToCheckoutHandler = () => {
      setIsCartOpen(false)
      navigate("/checkout")
   }

   return (
      <CartDropdownContainer>
         <CartItemss>
            {cartItems.length ? (
               cartItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
               ))
            ) : (
               <EmptyMessage>Your cart is empty</EmptyMessage>
            )}
         </CartItemss>
         <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
   )
}

export default CartDropdown
