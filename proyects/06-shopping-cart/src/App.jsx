import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilter";
import { Cart } from "./components/Cart";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, filters } = useFilters();

  const filtaredProducts = filterProducts(products);

  return (
    <>
      <Cart />
      <Header />
      <Products products={filtaredProducts} />
      <Footer />
    </>
  );
}

export default App;
