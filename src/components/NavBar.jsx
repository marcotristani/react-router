import { Link, NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";

function NavBar() {
  const links = [
    { path: "/AboutUs", label: "Chi siamo" },
    { path: "/ProductList", label: "Lista Prodotti" },
  ];
  return (
    <nav>
      <Link to={"/"} className="img-homepage">
        <FaHome />
      </Link>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
