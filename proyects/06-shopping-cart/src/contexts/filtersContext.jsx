import { createContext, useState } from "react";

// 1- Crear el contexto
export const FiltersContext = createContext();

// 2- Crear el provider para proveer el contexto
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

// 3- Consumir el contexto

// Ejemplos - No es solo para estados globales. Se pueden pasar datos estáticos. Se usan para tokens. Para cambios chicos, que no cambien tanto como inicio de sesión
