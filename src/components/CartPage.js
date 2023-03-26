import React, {useContext, useState, useEffect} from 'react'
import { Cart } from '../Context'
import SingleProduct from './SingleProduct'

const CartPage = () => {
    const { cart } = useContext(Cart)
    const [total, setTotal] = useState()
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])
  return (
    <div style={{textAlign: "center", marginTop: "20px"}}>
        <span>My Cart</span>
        <br/>
        <span style={{ fontSize: 30, marginTop: "10px"}}>Total: {total}</span>
        <div className='product-list'>
        {cart.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  )
}

export default CartPage