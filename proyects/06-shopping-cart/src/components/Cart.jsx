import { useId } from "react";
import "./cart.css";
import { ClearCartIcon, CartIcon } from "./icons.jsx";

export function Cart() {
  const cartCheckboxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://i.dummyjson.com/data/products/6/thumbnail.png"
              alt="mac"
            />
          </li>
          <div>
            <strong>MacBook</strong> - $1999
          </div>

          <footer>
            <small>Cantidad: 1</small>
            <button>+</button>
          </footer>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
