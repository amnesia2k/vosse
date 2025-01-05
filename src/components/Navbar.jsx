import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Home", "Services", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Vossé</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 ${
            isMenuOpen ? "block" : "hidden"
          } absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent shadow-md md:shadow-none`}
        >
          {menuItems.map((item) => (
            <li key={item} className="px-4 py-2 md:p-0">
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
