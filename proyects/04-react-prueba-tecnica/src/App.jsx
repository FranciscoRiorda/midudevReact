import { useEffect, useState } from "react";
import "./App.css";

const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact`;
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

function App() {
  const [fact, setFact] = useState("Hola, soy el nuevo gato");

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
      .then((res) => res.json())
      .then((data) => setFact(data.fact));
  }, []);

  return (
    <>
      <h1>App de Gatitos</h1>
      <p>{fact}</p>
    </>
  );
}

export default App;
