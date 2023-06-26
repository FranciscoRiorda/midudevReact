import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact`;
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`;
const CAT_PREFIJO_IMG_URL = `https://cataas.com`;

function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // useEffect(()=>{
  //   async function getRandomFact() {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
  //     const data = await res.json()
  //     setFact(data.fact)
  //   }
  //   getRandomFact()
  // }, [])

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const threeFirstWords = fact.split(" ", 3).join(" "); // buscar con mdn en gooogle. Separador de string, segundo parámetro, cuantas palabras quiero guardar

        fetch(
          `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((data) => {
            const { url } = data;
            setImageUrl(url);
          });
      });
  }, []);

  return (
    <>
      <main>
        <h1>App de Gatitos</h1>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIJO_IMG_URL}${imageUrl}`}
            alt={`img de gatos con las primeras 3 palabras de: ${fact
              .split(" ", 3)
              .join(" ")}`}
          ></img>
        )}
      </main>
    </>
  );
}

export default App;
