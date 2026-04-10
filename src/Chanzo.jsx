
import Navbar from "./Components/Navbar";
import "./chanzo.css";
import teamBg from "./Assets/team.jpg";
import Footer from "./Components/Footer";

export default function Chanzo() {
 
  return (
    <div className="chanzo-page">
      
      <Navbar/> 

      <div
        className="container1"
        style={{
          backgroundImage: `url(${teamBg})`,
        }}
      >
        <div className="home-section1 intro-section">
          <h2>
            Grow Your Business with Smart Digital Solutions 
          </h2>
          <p className="section-paragraph">
          Most Ugandan businesses are running on handwritten ledgers, Excel sheets, and WhatsApp groups
           — not because the owners aren't smart, but because the software that exists was never built for them.
            It's too expensive. It requires constant internet. The support disappears after you pay.
           And it doesn't speak your language — literally or culturally. NexaBuild exists to change that.
          </p>
        </div>
      

      
        <div className="home-section1 solutions-section">
          <h2>The Software Your Business Has Been Waiting For.</h2>
          <p className="section-paragraph">
            Many Ugandan businesses rely on manual processes, outdated systems, and unreliable integrations.
            This leads to inefficiency, data problems, and slowed growth.
          </p>

          <div className="highlight-block">
            <p className="section-paragraph">
             Built in Uganda. Built for Uganda. Finally, software that understands how you work.
             Stop managing your business on WhatsApp and prayer. There's a better way.
             Run your shop, school, or clinic like a professional — from your phone.
            </p>
          </div>
        </div>
      </div>

     

      {/* Get in Touch */}
      

      <Footer/>
    </div>
  );
}
