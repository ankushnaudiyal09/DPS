import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import { NavLink, Link as RouterLink, useLocation } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function Navbar() {

  const location = useLocation();

  return (
    <nav className="navbar">

      <div className="logo">
        <RouterLink to="/">
          <img src="/logo.png" alt="logo" />
        </RouterLink>

        <div>
          <h4>Dehradun Property Solutions</h4>
          <span>Real Estate Experts</span>
        </div>
      </div>

      <div className="nav-menu">

        <NavLink
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </NavLink>

        <ScrollLink to="service" smooth={true} duration={600}>
          Services
        </ScrollLink>

        <NavLink
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </NavLink>

      </div>

    <NavLink
    to="/contact"
    className={({ isActive }) =>
        isActive ? "contact-btn active" : "contact-btn"
    }
    >
    Contact Us <FiArrowUpRight />
    </NavLink>

    </nav>
  );
}