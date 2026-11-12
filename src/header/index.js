import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <nav className="nav">
      <NavLink to="/" end>
        Главная
      </NavLink>
      <NavLink to="/confirmPage">Кнопка согласия</NavLink>
      <NavLink to="/frame">Банк «Решение»</NavLink>
    </nav>
  );
};

export default Header;
