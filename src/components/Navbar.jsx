import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Home", "About", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-3xl font-bold cursor-pointer text-[#c5a880]"
        >
          Vossé
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
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
                className="hover:text-[#c5a880] text-lg font-semibold cursor-pointer"
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
