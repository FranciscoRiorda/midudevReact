const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact`;

 export const getRandomFact = async () => { //Actualizar el random fact desde el botón. 
    try {
         const res = await fetch(CAT_ENDPOINT_RANDOM_FACT_URL);
         if (!res.ok) throw new Error("Error en el fetching fact"); // Si aparece un error en la respuesta
         const data = await res.json(); // devuelve una promise
         const { fact } = data;
         return fact; // Retornar el fact, pero no traer a este componente el setFact ya que es propio del otro componente
     } catch (err) { }
  };

  // Archivo JS, que no tengan dependencias de REACT