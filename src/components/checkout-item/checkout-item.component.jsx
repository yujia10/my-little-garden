import "./checkout-item.style.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { title, img, price, quantity } = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={img} alt={title} />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">
        <div onClick={removeItemHandler} className="arrow left">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
