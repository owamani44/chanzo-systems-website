import "./services.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import teamBg from "../Assets/cbg4.jpg";

const Services = () => {
  return (
    <div className='services'
     style={{
          backgroundImage: `url(${teamBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
      <Navbar/>
      <div className="container1">
        
      </div>
      <Footer/>
    </div>
  )
}

export default Services
