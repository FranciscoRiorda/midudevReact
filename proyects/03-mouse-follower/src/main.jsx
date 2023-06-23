import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* StrictMode: No funciona en producción, es para que tengamos codigo actualizado y nos ayuda a depurar el código, 
     ver si tenemos errores al ejecutar la app. */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
