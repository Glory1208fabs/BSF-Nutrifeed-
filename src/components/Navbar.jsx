import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-green-600">
        BSF-Nutrifeed
      </h1>

      <div className="hidden md:flex gap-8 text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Login</button>
        </Link>
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;