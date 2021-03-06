import { useContext } from "react";
import {CartContext} from '../../contexts/cart.context';

import {BsCart2} from 'react-icons/bs'

import './cart-icon.style.scss'

function CartIcon() {
  const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <BsCart2 className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
