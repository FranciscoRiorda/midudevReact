import "./App.css";

import { useCatImg } from "./hooks/useCatImg";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const {fact, refreshFact} = useCatFact();
  const { imageUrl } = useCatImg({ fact });

  const handleClick = async () => {
    refreshFact()
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
              src={imageUrl}
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

// useEffect(()=>{
//   async function getRandomFact() {
//     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
//     const data = await res.json()
//     setFact(data.fact)
//   }
//   getRandomFact()
// }, [])
