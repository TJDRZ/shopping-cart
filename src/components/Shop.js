import { useState } from "react";
import Nav from "./Nav";
import Item from "./Item";
import "../styles/shop.css";

function Shop() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addTotalItems = (items) => {
    setTotalItems(totalItems + items);
  };

  const addTotalPrice = (price) => {
    const newTotalPrice = Math.round((totalPrice + price) * 100) / 100;
    setTotalPrice(newTotalPrice);
  };

  const checkoutReset = () => {
    setTotalItems(0);
    setTotalPrice(0);
  };

  return (
    <div>
      <Nav />
      <div className="shop">
        <div className="sticky-cart">
          Total Items: {totalItems}
          <hr />
          Total Price: ${totalPrice}
          <button onClick={checkoutReset}>Checkout</button>
        </div>

        <Item
          name="Blueberry"
          price="$7.95"
          description="~A delicate helping of blue joy french toast."
          addItems={addTotalItems}
          addPrice={addTotalPrice}
        />

        <Item
          name="Strawberry"
          price="$6.95"
          description="~A simple blessing of strawberry french toast."
          addItems={addTotalItems}
          addPrice={addTotalPrice}
        />

        <Item
          name="Banana"
          price="$6.95"
          description="~A tasteful serving of banana french toast."
          addItems={addTotalItems}
          addPrice={addTotalPrice}
        />

        <Item
          name="Mixed"
          price="+$1.45"
          description="~Mix and match your favorites."
          addItems={addTotalItems}
          addPrice={addTotalPrice}
        />
      </div>
    </div>
  );
}

export default Shop;