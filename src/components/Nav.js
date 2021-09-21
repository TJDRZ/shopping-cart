import { NavLink } from "react-router-dom";
import "../styles/nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/shopping-cart">Home</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
