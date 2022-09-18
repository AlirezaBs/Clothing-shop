import { useContext } from "react"
import CheckOutItem from "../../components/checkout-item/checkout-item.component"
import { CartContext } from "../../context/cart.context"
import {
   CheckoutContainer,
   CheckoutHeader,
   HeaderBlock,
   Total,
} from "./checkout.styles.jsx"

const Checkout = () => {
   const { cartItems, cartTotal } = useContext(CartContext)

   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>Price</HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
         </CheckoutHeader>
         {cartItems.map((cartItem) => (
            <CheckOutItem key={cartItem.id} {...cartItem} />
         ))}
         <Total>Total: ${cartTotal}</Total>
      </CheckoutContainer>
   )
}

export default Checkout
