
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Chanzo from './Chanzo';
import Services from './Components/Services';
import Contact from './Components/Contact';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Chanzo />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
