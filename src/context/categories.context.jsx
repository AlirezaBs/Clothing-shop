import { async } from "@firebase/util"
import { useState, useEffect } from "react"
import { createContext } from "react"
import SHOP_DATA from "../shop-data.js"

export const CategoriesContext = createContext({
   categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
   const [categoriesMap, setCategoriesMap] = useState({})

   useEffect(() => {
      const getCategoriesMap = () => {
         const categoryMap = SHOP_DATA
         setCategoriesMap(categoryMap)
      }

      getCategoriesMap()
   }, [])

   const value = { categoriesMap }

   return (
      <CategoriesContext.Provider value={value}>
         {children}
      </CategoriesContext.Provider>
   )
}
