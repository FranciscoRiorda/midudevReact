import { useId, useState } from "react";
import "./filters.css";

export function Filters({ changeFilter }) {
  const [minPrice, setMinPrice] = useState(0);

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
    changeFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    changeFilter((prevState) => ({
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
          />
          <span>${minPrice}</span>
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
