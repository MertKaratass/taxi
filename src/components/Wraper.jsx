import Navbar from "./Navbar";
import hotel from "./image/hotel.webp";
import "./Wraper.css";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

const Wraper = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="hotel">
          <img src={hotel} alt="" className="hotel-img" />
        </div>
        <div className="navbar-container">
          <Navbar />
        </div>
        <div className="text">
          <p>
            Erzurum Hilton Garden Inn taksi, şehir içi ve şehir dışı 7/24
            güvenilir taksi.
          </p>
        </div>
        <div className="btn-wrapper">
          <a href="tel:5055510685">
            <button className="btn">Tıkla Ayağına Gelsin</button>
          </a>
        </div>
      </div>

      <div className="scroll-banner"></div>
      <div className="services-container" id="services">
        <Services />
      </div>
      <div className="about-container" id="about">
        <About />
      </div>

      <div className="contact-container-wrapper" id="contact">
        <div className="scroll-banner2"></div>
        <Contact />
      </div>
    </div>
  );
};

export default Wraper;
