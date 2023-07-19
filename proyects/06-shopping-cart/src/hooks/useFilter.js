import { useContext } from "react";
import { FiltersContext } from "../contexts/filtersContext";

export function useFilters() {
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