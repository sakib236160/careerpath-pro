

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
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
            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="/service" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-gray-400"> Dhaka, Bangladesh</p>
          <p className="text-gray-400">support@career.com</p>
          <p className="text-gray-400"> +8801780619346</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Career Counseling. All Rights Reserved.
      </div>
    </footer>
    );
};

export default Footer;