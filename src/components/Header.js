import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context'

const Header = () => {
    const {cart} = useContext(Cart)
  return (
    <div className="header">
        <Link to="/">HOME</Link>
        <input type="text" placeholder="Search..." />
        <Link to="/cart">Cart ({cart.length})</Link>
    </div>
  )
}

export default Header