const Footer = () => {
  return (
    <footer className="md:px-50 bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p>© 2025 Learn CE. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;