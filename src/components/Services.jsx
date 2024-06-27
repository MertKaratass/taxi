import React from "react";
import "./Services.css";
import Map from "./image/erzurum.png";
import Time from "./image/724.png";
import Airport from "./image/airporttaxi.png";

const Services = () => {
  return (
    <div>
      <div className="container" >
        <h1 className="Header">HİZMETLERİMİZ</h1>
        <div className="services">
          <div className="service-item">
            <img src={Map} alt="Şehir İçi Taksi" />
            <h2>Şehir İçi Taksi</h2>
            <p>
              Erzurum Hilton Garden Inn taksi, şehir içi ve şehir dışı güvenilir
              taksi hizmeti.
            </p>
          </div>
          <div className="service-item">
            <img src={Time} alt="7/24 Güvenilir Hizmet" />
            <h2>7/24 Güvenilir Hizmet</h2>
            <p>
              Erzurum Hilton Garden Inn taksi, 7/24 güvenilir taksi hizmeti.
            </p>
          </div>
          <div className="service-item">
            <img src={Airport} alt="Havalimanı Transfer" />
            <h2>Havalimanı Transfer</h2>
            <p>Erzurum Hilton Garden Inn taksi, Havalimanı transfer hizmeti.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
