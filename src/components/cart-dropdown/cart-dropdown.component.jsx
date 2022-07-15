import CartItem from "../cart-item/cart-item.component";

import {useContext} from 'react';
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.style.scss";

function CartDropdown() {
  const {cartItems} = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
      {cartItems.map((item)=>{
        return <CartItem key={item.id} cartItem={item}/>
      })}
      </div>
      <button className="btn-primary">GO TO CHECKOUT</button>
    </div>
  );
}

export default CartDropdown;
