import "./cart-item.style.scss";

function CartItem({ cartItem }) {
  const { title, quantity, img, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={img} alt={title} />
      <div className="item-details">
        <span className="name">{title}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
