import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { useContext, useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FiltersContext } from "./contexts/filtersContext";

function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: "all",
  //   minPrice: 0,
  // }); Pasa al context para que se pueda acceder de manera global
  const {filters, setFilters} = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filterProducts, setFilters, filters };
}

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters, filters } = useFilters();

  const filtaredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilter={setFilters} />
      <Products products={filtaredProducts} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
