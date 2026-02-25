import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          LMS
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/courses" className="hover:text-gray-200">Courses</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-3 flex flex-col space-y-2">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/courses" className="hover:text-gray-200">Courses</Link>
        <Link to="/about" className="hover:text-gray-200">About</Link>
        <Link to="/contact" className="hover:text-gray-200">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;