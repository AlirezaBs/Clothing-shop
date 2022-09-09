import { useEffect, useContext, useState  } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/Product-card.component'
import { CategoriesContext } from '../../context/categories.context'
import './category.styles.scss'

const Category = () => {
   const {category} = useParams()
   const { categoriesMap } = useContext(CategoriesContext)
   const [products, setProducts] = useState([]);

   useEffect(() => {
      setProducts(categoriesMap[category])
   }, [category, categoriesMap])
   
   return (
      <div className='category-container'>
         {products && products.map(product => (
            <ProductCard key={product.id} {...product} />
         ))}
      </div>
   )
}

export default Category