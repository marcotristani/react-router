import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { FaHome } from "react-icons/fa";

function MainHeader() {
  return (
    <header>
      <Link to={"/"} className="img-homepage">
        <FaHome />
      </Link>{" "}
      <figure>
        <img src="src\assets\logo-fake-shop.png" alt="" />
      </figure>
      <NavBar />
    </header>
  );
}

export default MainHeader;
