import { Link } from "react-router-dom"
import ProductCard from "../product-card/Product-card.component"
import {
   CategoryPreviewContainer,
   Title,
   Preview,
} from "./category-preview.styles.jsx"

const CategoryPreview = ({ title, products }) => {
   return (
      <CategoryPreviewContainer>
         <h2>
            <Title to={title}>{title}</Title>
         </h2>
         <Preview>
            {products
               .filter((_, idx) => idx < 4)
               .map((product) => (
                  <ProductCard key={product.id} {...product} />
               ))}
         </Preview>
      </CategoryPreviewContainer>
   )
}

export default CategoryPreview

// tip :
// filter(_, idx)  ===>  _ means that I don't want to use that (product)
