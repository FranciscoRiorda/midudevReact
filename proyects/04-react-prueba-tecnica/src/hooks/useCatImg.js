import { useEffect, useState } from "react";

const CAT_PREFIJO_IMG_URL = `https://cataas.com`;

export function useCatImg({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return; // Si el fact es vacio como está inicializado, no haga nada.

    const threeFirstWords = fact.split(" ", 3).join(" "); // buscar con mdn en gooogle. Separador de string, segundo parámetro, cuantas palabras quiero guardar

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIJO_IMG_URL}${imageUrl}` };
}
