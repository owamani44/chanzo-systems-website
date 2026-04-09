import "./navbar.css";

 const logo = require('../Assets/chanzo.png');

const Navbar = () => {
  return (
    <nav className="nav-container" aria-label="Main navigation">
        <div className="wrapper">
        <header className="nav">
         
          <div className="logo">
            <img className="image" 
              src={logo} alt="Chanzo Systems Logo" />

            <h1 className="header">Chanzo Systems</h1>
          </div>
            <div className="page-links">
          <ul className="nav-links">
            <li><a href="#home" className="link">Home</a></li>
            <li><a href="#services" className="link">Services</a></li>
            <li><a href="#contact" className="link">Get in touch</a></li>
          </ul>
       </div>
      </header>
      </div>
    </nav>
  )
}

export default Navbar
