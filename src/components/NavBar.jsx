import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Homepage</Link>
      </li>
      <li>
        <NavLink to={"/AboutUs"}>Chi siamo</NavLink>
      </li>
      <li>
        <NavLink to={"/ProductList"}>Lista Prodotti</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
