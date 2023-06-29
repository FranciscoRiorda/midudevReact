import { useEffect, useState } from "react";
import "./App.css";


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

  useEffect(getRandomFact, []); // Renderizamos el randomFact desde la primer inicialización. 

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

  const handleClick = () => {
    getRandomFact();
  };

  return (
    <>
      <main className="main">
        <h1>App de Gatitos</h1>
        <button onClick={handleClick}>Get a new Fact</button>
        <section>
          {fact && <p>{fact}</p>}
          {imageUrl && (
            <img
              src={`${CAT_PREFIJO_IMG_URL}${imageUrl}`}
              alt={`img de gatos con las primeras 3 palabras de: ${fact
                .split(" ", 3)
                .join(" ")}`}
            ></img>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
