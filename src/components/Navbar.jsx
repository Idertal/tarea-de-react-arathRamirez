import { Link } from "react-router-dom";
import style from "./styles/navbar-style.module.css";

export default function Navbar() {
  return (
    <nav className={style["navbar-container"]}>
      <ul className={style["navbar-list"]}>
        <li>
          <Link className={style["link-styles"]} to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={style["link-styles"]} to="/owner">
            Sobre mí
          </Link>
        </li>
      </ul>
    </nav>
  );
}
