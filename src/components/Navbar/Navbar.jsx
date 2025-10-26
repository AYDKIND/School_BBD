import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCaretDown, FaUserTie, FaChalkboardTeacher, FaUserGraduate, FaChevronRight, FaCalendarAlt, FaClipboardList, FaUserCog, FaBook, FaChalkboard, FaUserCheck, FaFileAlt, FaGraduationCap } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const loginDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsLoginDropdownOpen(false);
    setActiveSubmenu(null);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
    if (!isLoginDropdownOpen) {
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuToggle = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  // Close login dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsLoginDropdownOpen(false);
        setActiveSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="top-header">
        <div className="container top-header-container">
          <div className="contact-info">
            <a href="tel:+919876543210"><FaPhone /> +91  8299401487</a>
            <a href="mailto:info@bbdacademy.edu.in"><FaEnvelope /> sunil.bbdacademy@gmail.com</a>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="container navbar-container">
          <div className="logo-container">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
              <h1>BBD</h1>
            </Link>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/academic" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Academic
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admissions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Admissions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/fee-payment" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Fee Payment
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item login-item">
              <div 
                className="login-dropdown" 
                ref={loginDropdownRef}
                onMouseEnter={() => setIsLoginDropdownOpen(true)}
                onMouseLeave={() => setIsLoginDropdownOpen(false)}
              >
                <button className={`login-button ${isLoginDropdownOpen ? 'open' : ''}`} onClick={toggleLoginDropdown} aria-haspopup="true" aria-expanded={isLoginDropdownOpen}>
                  Login <FaCaretDown />
                </button>
                {isLoginDropdownOpen && (
                  <div className="login-dropdown-content" role="menu">
                    <div className="login-item">
                      <Link 
                        to="/admin-login" 
                        className="login-item-header" 
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        <div className="login-item-icon"><FaUserTie /></div>
                        <div className="login-item-text">Admin Login</div>
                      </Link>
                    </div>
                    
                    <div className="login-item">
                      <Link 
                        to="/faculty-login" 
                        className="login-item-header" 
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        <div className="login-item-icon"><FaChalkboardTeacher /></div>
                        <div className="login-item-text">Faculty Login</div>
                      </Link>
                    </div>
                    
                    <div className="login-item">
                      <Link 
                        to="/student-login" 
                        className="login-item-header" 
                        onClick={closeMenu}
                        role="menuitem"
                      >
                        <div className="login-item-icon"><FaUserGraduate /></div>
                        <div className="login-item-text">Student Login</div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;