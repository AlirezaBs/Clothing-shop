import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import Button from "../button/Button.component"
import "./product-card.styles.scss"

const ProductCard = (product) => {
   const { name, price, imageUrl } = product
   const { addItemToCart } = useContext(CartContext)

   const addToCart = () => addItemToCart(product)

   return (
      <div className="product-card-container">
         <img src={imageUrl} alt={`${name}`} />
         <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
         </div>
         <Button buttonType="inverted" onClick={addToCart}>
            Add to card
         </Button>
      </div>
   )
}

export default ProductCard
