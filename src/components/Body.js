import React, { useContext } from 'react'
import SingleProduct from './SingleProduct'
import { Cart } from "../Context"

const Body = () => {

  const { allProducts } = useContext(Cart)
  
  if(!allProducts){
    return null
  }
  return (
    <div className="product-page">
      <div className='product-list'>
        {allProducts.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  )
}

export default Body