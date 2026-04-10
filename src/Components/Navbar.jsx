import './navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/c.png';

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Get in touch' },
];

const Navbar = () => {
  return (
    <nav className="nav-container" aria-label="Main navigation">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand" aria-label="Chanzo Systems Home">
          <img className="brand-logo" src={logo} alt="Chanzo Systems logo" />
          <span className="brand-name">Chanzo Systems</span>
        </NavLink>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
