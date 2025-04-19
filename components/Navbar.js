const Navbar = () => {
  const { useState } = React;
  const { Link, useLocation } = ReactRouterDOM;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary';
  };

  return (
    <nav className="bg-white shadow-md" data-id="1w0d979j2" data-path="components/Navbar.js">
      <div className="container mx-auto px-4 py-3" data-id="mm3hvc1vt" data-path="components/Navbar.js">
        <div className="flex justify-between items-center" data-id="xzj5jkc2g" data-path="components/Navbar.js">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu} data-id="it4v5jbc5" data-path="components/Navbar.js">
            <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center" data-id="2e7kw8s1l" data-path="components/Navbar.js">
              <i className="fas fa-pencil-alt text-white text-xl" data-id="12nbeo7wm" data-path="components/Navbar.js"></i>
            </div>
            <div data-id="04x4t5erw" data-path="components/Navbar.js">
              <h1 className="text-xl font-bold text-primary" data-id="xmyj2p5jk" data-path="components/Navbar.js">Nursery Lesson Genius</h1>
              <p className="text-xs text-gray-500" data-id="u1f5e09y6" data-path="components/Navbar.js">AI-Powered Lesson Plans</p>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6" data-id="w6ppwdpab" data-path="components/Navbar.js">
            <Link to="/" className={`${isActive('/')} transition-colors duration-200`} data-id="ygjq3ihnz" data-path="components/Navbar.js">
              Home
            </Link>
            <Link to="/generator" className={`${isActive('/generator')} transition-colors duration-200`} data-id="awbexllz2" data-path="components/Navbar.js">
              Create Plan
            </Link>
            <Link to="/resources" className={`${isActive('/resources')} transition-colors duration-200`} data-id="3zsqx7p60" data-path="components/Navbar.js">
              Resources
            </Link>
            <Link to="/saved-plans" className={`${isActive('/saved-plans')} transition-colors duration-200`} data-id="r71f038kg" data-path="components/Navbar.js">
              My Plans
            </Link>
            <button className="btn-primary" data-id="l62ezsgc2" data-path="components/Navbar.js">
              Sign Up Free
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu" data-id="oubp1gsww" data-path="components/Navbar.js">

            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} data-id="aytjekf5o" data-path="components/Navbar.js"></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen &&
        <div className="md:hidden mt-3 py-3 border-t border-gray-100" data-id="bqpyn1lxs" data-path="components/Navbar.js">
            <div className="flex flex-col space-y-3" data-id="kcwb0awma" data-path="components/Navbar.js">
              <Link
              to="/"
              className={`${isActive('/')} px-2 py-1 rounded-md transition-colors duration-200`}
              onClick={closeMenu} data-id="3pihbvjp9" data-path="components/Navbar.js">

                Home
              </Link>
              <Link
              to="/generator"
              className={`${isActive('/generator')} px-2 py-1 rounded-md transition-colors duration-200`}
              onClick={closeMenu} data-id="vgyv5pvyy" data-path="components/Navbar.js">

                Create Plan
              </Link>
              <Link
              to="/resources"
              className={`${isActive('/resources')} px-2 py-1 rounded-md transition-colors duration-200`}
              onClick={closeMenu} data-id="dklwji6ru" data-path="components/Navbar.js">

                Resources
              </Link>
              <Link
              to="/saved-plans"
              className={`${isActive('/saved-plans')} px-2 py-1 rounded-md transition-colors duration-200`}
              onClick={closeMenu} data-id="ivw09a0q1" data-path="components/Navbar.js">

                My Plans
              </Link>
              <button className="btn-primary self-start" data-id="ciijh91qu" data-path="components/Navbar.js">
                Sign Up Free
              </button>
            </div>
          </div>
        }
      </div>
    </nav>);

};