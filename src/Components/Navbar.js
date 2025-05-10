import './Navbar.css'; // Create a new CSS file for the navbar
import logo from './assets/logo1.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Asian Industries Logo" className="navbar-logo" />
      <div className="navbar-links">
        {/* Add your navigation links here */}
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;