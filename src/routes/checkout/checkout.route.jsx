import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.style.scss";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <main>
      <div className="checkout-container">
        <div className="title">
          <h1>Checkout</h1>
          <div className="underline"></div>
        </div>
        <div className="checkout-header">
          <div className="header-blocks">
            <span>Succulent</span>
          </div>
          <div className="header-blocks">
            <span>Description</span>
          </div>
          <div className="header-blocks">
            <span>Quantity</span>
          </div>
          <div className="header-blocks">
            <span>Price</span>
          </div>
          <div className="header-blocks">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className="total">total: ${cartTotal}</span>
      </div>
    </main>
  );
}

export default Checkout;
