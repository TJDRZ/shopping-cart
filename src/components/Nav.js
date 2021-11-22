import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <ul className="nav-ul">
        <NavLink className="NavLink" to="/shopping-cart">
          <li className="nav-home">Home</li>
        </NavLink>
        <NavLink className="NavLink" to="/shop">
          <li className="nav-shop">Shop</li>
        </NavLink>
      </ul>
    </nav>
  );
}
export default Nav;
