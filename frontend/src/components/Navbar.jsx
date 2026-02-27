import { Link } from "react-router-dom";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="bg-white text-black px-6 h-[70px] flex items-center shadow-md fixed w-full top-0 z-50">
      <div className="flex justify-between items-center max-w-[90%] mx-auto w-full">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-[#f49f35]">
          LMS
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 font-semibold text-lg">
          {[
            { to: "/", label: "Home" },
            { to: "/courses", label: "Courses" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-all duration-300 hover:text-[#f49f35]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register">
            <Button variant="filled">Register</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-3 flex flex-col space-y-2 px-4 bg-white shadow-md">
        <Link to="/" className="py-2 border-b hover:text-[#f49f35]">Home</Link>
        <Link to="/courses" className="py-2 border-b hover:text-[#f49f35]">Courses</Link>
        <Link to="/about" className="py-2 border-b hover:text-[#f49f35]">About</Link>
        <Link to="/contact" className="py-2 border-b hover:text-[#f49f35]">Contact</Link>
        <div className="flex space-x-4 mt-3">
          <Link to="/login" className="flex-1">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/register" className="flex-1">
            <Button variant="filled">Register</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;