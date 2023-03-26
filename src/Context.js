import { createContext, useState, useEffect } from "react"

export const Cart = createContext()

const Context = ({children}) => {
    const [cart, setCart] = useState([])
    const [allProducts, setAllProducts] = useState([]) 

    const getProductsData = async() => {
        const data = await fetch("https://dummyjson.com/products")
        const json = await data.json()
        setAllProducts(json.products)
      }
    
      useEffect(() => {
        getProductsData()
      }, [])
      console.log("allProducts--> ", allProducts)
    return (
        <Cart.Provider value={{ cart, setCart, allProducts }}>
            {children}
        </Cart.Provider>
    )
}

export default Context