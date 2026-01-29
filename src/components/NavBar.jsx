import { NavLink } from "react-router-dom";

function NavBar() {
  const links = [
    { path: "/about_us", label: "Chi siamo" },
    { path: "/products_list", label: "Lista Prodotti" },
  ];
  return (
    <nav>
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
