import { useId } from "react";
import "./filters.css";
import { useFilters } from "../hooks/useFilter";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor={minPriceFilterId}>Precio mínimo</label>
          <input
            type="range"
            id={minPriceFilterId}
            min="0"
            max="2000"
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
        </div>
        <div>
          <label htmlFor={categoryFilterId}>Categoría</label>
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value="all">Todas</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Celulares</option>
          </select>
        </div>
      </section>
    </>
  );
}
