import { NavLink, useNavigate } from "react-router";

const Header = () => {
    const navigation = useNavigate();
    const handleNavigation = () => {
        navigation("/contact");
    }
  return (
    <>
      <header className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <NavLink className={({isActive}) => isActive ? "text-bold mr-5 hover:text-gray-900 cursor-pointer": "mr-5 hover:text-gray-900 cursor-pointer" } to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-bold mr-5 hover:text-gray-900 cursor-pointer": "mr-5 hover:text-gray-900 cursor-pointer" } to="/about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-bold mr-5 hover:text-gray-900 cursor-pointer": "mr-5 hover:text-gray-900 cursor-pointer" } to="/blog">Blog</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-bold mr-5 hover:text-gray-900 cursor-pointer": "mr-5 hover:text-gray-900 cursor-pointer" } to="/services">Services</NavLink>
            <NavLink className={({isActive}) => isActive ? "text-bold mr-5 hover:text-gray-900 cursor-pointer": "mr-5 hover:text-gray-900 cursor-pointer" } to="/contact">Contact</NavLink>
          </nav>
          <NavLink className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <span>Morshed Mushfiq</span>
          </NavLink>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 cursor-pointer" onClick={handleNavigation}>
              Get a Quote
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
