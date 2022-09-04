import { useContext } from "react"
import ProductCard from "../../components/product-card/Product-card.component"
import { ProductsContext } from "../../context/products.context"
import './shop.styles.scss'

const Shop = () => {
   const { products } = useContext(ProductsContext)
   return (
      <div className="products-container">
         {products.map((product) => {
            return (
               <ProductCard key={product.id} {...product} />
            )
         })}
      </div>
   )
}

export default Shop