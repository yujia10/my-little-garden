import "./cart-dropdown.style.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">Your cart is empty</div>
      <button className="btn-primary">GO TO CHECKOUT</button>
    </div>
  );
}

export default CartDropdown;
