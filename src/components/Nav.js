import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <ul className="nav-ul">
        <li className="nav-home">
          <NavLink className="NavLink" to="/shopping-cart">Home</NavLink>
        </li>
        <li className="nav-shop">
          <NavLink className="NavLink" to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
