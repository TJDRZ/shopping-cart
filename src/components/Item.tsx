import { useState } from "react";
import { ItemProps } from "../types/types";
import "../styles/item.css";

function Item(props: ItemProps) {
  const { name, price, description, addItems, addPrice } = props;
  const [count, setCount] = useState(0);

  const incrementCount = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const decrementCount = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const inputCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  const addToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const strippedPrice = Number(price.replace("$", ""));
    const totalPrice = strippedPrice * count;
    addItems(count);
    addPrice(totalPrice);
  };

  return (
    <div className="Card" id={name}>
      <header className="card-header">
        <h1>{name}</h1>
        {price}
        <p>{description}</p>
      </header>
      <form className="card-form" onSubmit={(e) => addToCart(e)}>
        <label className="card-form-label" htmlFor="quantity">
          <button onClick={(e) => decrementCount(e)}>-</button>
          <input
            name="quantity"
            type="number"
            onChange={(e) => inputCount(e)}
            value={count}
            required
          />
          <button onClick={(e) => incrementCount(e)}>+</button>
        </label>
        <hr className="form-line" />
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default Item;
