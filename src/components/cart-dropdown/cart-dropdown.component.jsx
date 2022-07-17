import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";

import {useContext} from 'react';
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.style.scss";

function CartDropdown() {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckout = ()=>{
    navigate('/checkout')
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map((item)=>{
        return <CartItem key={item.id} cartItem={item}/>
      })}
      </div>
      <button className="btn-primary" onClick={goToCheckout}>GO TO CHECKOUT</button>
    </div>
  );
}

export default CartDropdown;
