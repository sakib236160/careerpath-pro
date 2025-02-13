import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#124E66] to-[#1E88A8] text-white py-10 mt-24">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Career Counseling</h2>
          <p className="text-gray-400">
            Empowering careers with expert guidance and valuable resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/">
                <a className="text-gray-400 hover:text-white">Home</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <a className="text-gray-400 hover:text-white">Services</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/features">
                <a className="text-gray-400 hover:text-white">Features</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <a className="text-gray-400 hover:text-white">Contact</a>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <div className="flex items-center gap-4">
          <MapPinIcon size={20} className="text-gray-400" />
            <p className="text-gray-400"> Dhaka, Bangladesh</p>
          </div>
          <div className="flex items-center gap-4">
            <MailIcon size={20} className="text-gray-400" />
            <p className="text-gray-400">support@career.com</p>
          </div>
          <div className="flex items-center gap-4">
            <PhoneIcon size={20} className="text-gray-400" />
            <p className="text-gray-400">+8801780619346</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Career Counseling. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
