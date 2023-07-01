import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact() {
    const [fact, setFact] = useState();
    
    const refreshFact = () => {
      getRandomFact().then((newFact) => setFact(newFact)); // Se puede pasar sin la función completa then(setFact)
    }
    useEffect(refreshFact, []); // Renderizamos el randomFact desde la primer inicialización.
  
    return {fact, refreshFact}
  }