import React from "react";
import GoogleMapComponent from "./GoogleMapComponent";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <h2>İLETİŞİM</h2>
        <a href="tel:05304279481">
          <i className="fas fa-user icon">
            <p>Emre Karataş</p>
          </i>
        </a>
        <a href="tel:05304279481">
          <i className="fas fa-phone icon">
            <p>Tel: +90(530) 427 94 81</p>
          </i>
        </a>
        <a href="mailto:emre232535@outlook.com">
          <i className="fas fa-envelope icon">
            <p>Email: emre232535@outlook.com</p>
          </i>
        </a>
        <a href="https://maps.google.com/?q=Ömer Nasuhi Bilmen, Mng avm karşısı Hilton Garden Inn Otel, 25000 Yakutiye/Erzurum">
          <i className="fas fa-map-marker-alt icon">
            <p>
              Adres: Ömer Nasuhi Bilmen, Mng avm karşısı Hilton Garden Inn Otel,
              25000 Yakutiye/Erzurum
            </p>
          </i>
        </a>
      </div>
      <div className="location">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Contact;
