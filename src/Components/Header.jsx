import { NavLink, useLocation, useNavigate } from "react-router";
import TopLoader from "./TopLoader";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use Heroicons or SVGs

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowMobileMenu(false); // Close menu on route change
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    isActive ? "text-black font-semibold" : "text-gray-700 hover:text-black";

  const navItems = (
    <>
      <NavLink
        to="/"
        className={linkClass + " block md:inline-block px-2 py-1"}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={linkClass + " block md:inline-block px-2 py-1"}
      >
        About
      </NavLink>
      <NavLink
        to="/blog"
        className={linkClass + " block md:inline-block px-2 py-1"}
      >
        Blog
      </NavLink>
      <NavLink
        to="/services"
        className={linkClass + " block md:inline-block px-2 py-1"}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={linkClass + " block md:inline-block px-2 py-1"}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <>
      
      <header className="bg-gray-100 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-lg font-bold text-gray-900">Morshed Mushfiq</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center text-base">
            {navItems}
            <button
              onClick={() => navigate("/contact")}
              className="ml-4 bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded"
            >
              Get a Quote
            </button>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button className="cursor-pointer" onClick={() => setShowMobileMenu(!showMobileMenu)}>
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <TopLoader loading={loading} />

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-gray-50 px-4 py-4 space-y-3 text-base">
            <div className="flex flex-col gap-2">{navItems}</div>
            <button
              onClick={() => navigate("/contact")}
              className="w-full bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded text-left"
            >
              Get a Quote
            </button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
