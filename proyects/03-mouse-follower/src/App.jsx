import { useEffect, useState } from "react";

function FollowMouse() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // UseEffect para pointermove
  useEffect(() => {
    console.log("effect ", { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      // Se ejectuará cuando se desmonte el componente y también cuando cambie la dependencia.
      // Se utiliza para limpiar todas las sucripciones a eventos.
      // getEventListeners(window) para ver en consola cuantas suscripciones a eventos tenemos activas
      console.log('cleanup')
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  // UseEffect para desaparecer cursor
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled); // toggle permite cada vez que se ejecute cambiar de estado la 
          //visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.

    return() =>{
      document.body.classList.remove('no-cursor');
    }
  },[enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar " : "Activar "}seguir Puntero
      </button>
    </>
  );
}

function App() {
  return (
    <>
      <FollowMouse />
    </>
  );
}

export default App;
