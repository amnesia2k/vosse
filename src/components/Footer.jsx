import { Facebook, Instagram, Mail, Twitter } from "lucide-react";

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
            <a href="#" className="hover:text-[#c5a880]">
              <Facebook size={28} />
            </a>
            <a href="#" className="hover:text-[#c5a880]">
              <Twitter size={28} />
            </a>
            <a href="#" className="hover:text-[#c5a880]">
              <Instagram size={28} />
            </a>
            <a href="mailto:support@vosse.ca" className="hover:text-[#c5a880]">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
