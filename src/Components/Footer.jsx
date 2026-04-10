import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      
      <footer className="footer">
        <p className="footer-text">Secure • Stable • Scalable</p>
        © {new Date().getFullYear()} Chanzo Systems. All rights reserved.
      </footer>
    </div>
  )
}

export default Footer
