import { useContext } from "react";

import { ShopSucculentsContext } from "../../contexts/shop-succulents.context";
import {CartContext} from '../../contexts/cart.context';

import ShopCard from "../../components/shop-card/shop-card.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";


import "./shop.style.scss";

function Shop() {
  const { succulentsForShop } = useContext(ShopSucculentsContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="cart-bar">
        <CartIcon />
        {isCartOpen && <CartDropdown />}
      </div>
      <main>
        <div className="page-title">
          <h1>Shop All Available</h1>
          <div className="underline"></div>
        </div>
        <div className="shop-container">
          {succulentsForShop.map((succulent) => {
            return <ShopCard key={succulent.id} succulent={succulent} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Shop;
