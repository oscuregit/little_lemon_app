import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Logo = () => (
  <img
    src="./icons_assets/Logo.svg"
    alt="Little Lemon Logo"
  />
);

const showMobileNavbar = () => {
  const mobileNavbar = document.querySelector(".mobile-navbar");
  mobileNavbar.style.display = "flex";
}
const hideMobileNavbar = () => {
  const mobileNavbar = document.querySelector(".mobile-navbar");
  mobileNavbar.style.display = "none";
}

export function NavBar() {
  return (
    <>
    <nav className="navbar">
      <Logo />
      <NavLink className="nav-link" to="/" end>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/menu">
        Menu
      </NavLink>
      <NavLink className="nav-link" to="/reservations" end>
        Reservations
      </NavLink>
      <NavLink className="nav-link" to="/order">
        Order
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
      <NavLink className="nav-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", background:"transparent" }} to="#" onClick={showMobileNavbar}>
        <img
          src="./icons_assets/burger icon.png"
          alt="Cart Icon"
          style={{ width: "40px", height: "", padding: "0px",  borderRadius: "50%" }}
/>
      </NavLink>
    </nav>
    <nav className="mobile-navbar">
      <Logo className="Logo"/>
      <NavLink className="nav-icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", background:"transparent" }} to="#" onClick={hideMobileNavbar}>
        <img
          src="./icons_assets/close icon.png"
          alt="Close Icon"
          style={{ width: "40px", height: "", padding: "0px",  borderRadius: "50%" }}
        />
      </NavLink>
      <NavLink className="nav-link" to="/" end>
        Home
      </NavLink>
      <NavLink className="nav-link" to="/about">
        About
      </NavLink>
      <NavLink className="nav-link" to="/menu">
        Menu
      </NavLink>
      <NavLink className="nav-link" to="/reservations" end>
        Reservations
      </NavLink>
      <NavLink className="nav-link" to="/order">
        Order
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    </nav>
    </>
  );
}
