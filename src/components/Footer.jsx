import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg">
              &copy; {new Date().getFullYear()} Vossé. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <Facebook size={27} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter size={27} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram size={27} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
