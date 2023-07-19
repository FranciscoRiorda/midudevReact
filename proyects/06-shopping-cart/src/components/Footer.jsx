import { IS_DEVELOMENT } from "../config";
import { useFilters } from "../hooks/useFilter";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();

  return (
    <footer className="footer">
      <h4>
        Prueba técnica de React ⚛️ － <span>@franriorda</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {IS_DEVELOMENT && JSON.stringify(filters, null, 2)}
    </footer>
  );
}
