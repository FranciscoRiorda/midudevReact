import { useEffect, useRef, useState } from "react";

export function useSearch() {
    const [query, setQuery] = useState("");
    const [error, setError] = useState();
    const isFirstInput = useRef(true);
  
    useEffect(() => {
      if (isFirstInput.current) {      // se utiliza para saber si es la 1ra vez que renderiza un componente y no large validaciones
        isFirstInput.current = query === "";
        return;
      }
  
      if (query === " ") {
        setError("No se puede realizar una búsqueda vacía");
        return; // Para que no siga ejecutándose
      }
      if (query.length < 3) {
        setError("La búsqueda debe ser como mínimo de 3 carácteres");
        return;
      }
      if (query.match(/^\d+$/)) {
        setError("No se puede buscar sólo números");
        return;
      }
      setError(null);
    }, [query]);
  
    return {query, setQuery, error}
  }