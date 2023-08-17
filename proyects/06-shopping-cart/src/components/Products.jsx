import { useCart } from "../hooks/useCart";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons.jsx";

export function Products({ products }) {
  const { addToCart, cart, removeFormCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <>
      <main className="products">
        <ul>
          {products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart(product);
            return (
              <li key={product.id}>
                <img src={`${product.thumbnail}`} alt={`${product.title}`} />
                <div>
                  <strong>
                    {product.title} - ${product.price}
                  </strong>
                </div>
                <div>
                  <button
                    style={{
                      backgroundColor: isProductInCart ? "red" : "#09f",
                    }}
                    onClick={() => {
                      isProductInCart
                        ? removeFormCart(product)
                        : addToCart(product);
                    }}
                  >
                    {isProductInCart ? (
                      <RemoveFromCartIcon />
                    ) : (
                      <AddToCartIcon />
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
