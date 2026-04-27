import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/Logo.png";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-black px-6 h-[70px] flex items-center shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-[90%] mx-auto w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="LMS Logo" className="h-30 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-semibold text-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group relative transition-all duration-300 ${
                  isActive ? "text-[#f49f35]" : "text-black"
                } hover:text-[#f49f35]`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="filled">Register</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i
            className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-line"}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md md:hidden px-4 py-5 flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 px-3 border-b transition ${
                  isActive
                    ? "text-[#f49f35] font-semibold"
                    : "text-black hover:text-[#f49f35]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Auth Buttons */}
          <div className="flex flex-col mt-10 mb-14 items-center justify-center gap-4">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              <Button variant="filled" className="w-full">
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
