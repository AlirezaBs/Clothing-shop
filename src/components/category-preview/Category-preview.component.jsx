import ProductCard from "../product-card/Product-card.component"
import "./category-preview.styles.scss"

const CategoryPreview = ({ title, products }) => {
   return (
      <div className="category-preview-container">
         <h2>
            <span className="title">{title}</span>
         </h2>
         <div className="preview">
            {products
               .filter((_, idx) => idx < 4)
               .map((product) => (
                  <ProductCard key={product.id} {...product} />
               ))}
         </div>
      </div>
   )
}

export default CategoryPreview

// tip :
// filter(_, idx)  ===>  _ means that I don't want to use that (product)
