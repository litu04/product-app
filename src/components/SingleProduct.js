import React, { useContext } from 'react'
import { Cart } from '../Context'

const SingleProduct = ({prod}) => {
    const { title, description, price, rating, thumbnail } = prod
    const {cart, setCart} = useContext(Cart)
    console.log("cart in single product page--> ", cart)
  return (
    <div className="product-card">
        <img src={thumbnail} alt="img" />
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <h5>{rating} ratings</h5>
        {cart.includes(prod) ? (
            <button onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}>Remove from Cart</button>
        ) : (
            <button onClick={() => setCart([...cart, prod])}>Add to Cart</button>
        )}
        
    </div>
  )
}

export default SingleProduct