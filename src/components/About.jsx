import React from "react";
import "./About.css";
import taxi from "./image/araç.png";
import hand from "./image/hand-shake2.png";
import map from "./image/Erzurum2.png";
import hour from "./image/724-2.png";
import customer from "./image/tel.jpg";

const About = () => {
  return (
    <div>
      <div className="about">
        <h1>HAKKIMIZDA</h1>
        <div className="about-text">
          <p>
            Erzurum Hilton Garden Inn Taksi Durağı olarak, Erzurum'un kalbinde
            kaliteli ve güvenilir ulaşım hizmetleri sunmaktan gurur duyuyoruz.
            Misafirlerimize ve yerel halkımıza, şehir içi ve şehir dışı her
            türlü ulaşım ihtiyacını karşılamak için 7/24 hizmet veriyoruz.
          </p>
        </div>
        <h1>HEDEFLERİMİZ</h1>
        <div className="about-aim">
          <div className="aim-item">
            <div className="aim-text">
              <p>
                Güvenilir Hizmet: Müşteri memnuniyetini ön planda tutarak, her
                yolculukta güvenliği ve konforu sağlamak için çabalıyoruz.
                Tecrübeli ve profesyonel şoförlerimiz, yolculuğunuzu en iyi
                şekilde geçirmenizi sağlamak için burada.
              </p>
            </div>
            <div className="aim-text">
              <p>
                Konforlu Araçlar: Filosumuzda bulunan tüm araçlar, konforlu ve
                temiz yolculuk deneyimi sunmak için düzenli olarak bakıma tabi
                tutulmaktadır. Yolculuğunuz boyunca rahat etmenizi sağlamak
                bizim önceliğimizdir.
              </p>
            </div>
            <div className="aim-text">
              <p>
                Kolay Erişim: Erzurum Hilton Garden Inn'in merkezi konumunda
                bulunan taksi durağımız, otel misafirlerine ve şehir sakinlerine
                kolay erişim imkanı sunar. İster otelinizden havaalanına, ister
                şehirdeki herhangi bir noktaya gitmek isteyin, bizimle güvenle
                yolculuk yapabilirsiniz.
              </p>
            </div>
            <div className="aim-text">
              <p>
                24/7 Hizmet: Her saat diliminde hizmet veren durağımız, acil
                durumlarınızda veya planlanmış yolculuklarınızda yanınızdadır.
                Günün her saati bizimle iletişime geçebilir ve güvenilir ulaşım
                hizmetimizden faydalanabilirsiniz.
              </p>
            </div>
            <div className="aim-text">
              <p>
                Müşteri Odaklı Yaklaşım: Müşterilerimizin ihtiyaçlarına ve
                beklentilerine odaklanarak, her zaman güler yüzlü ve profesyonel
                hizmet sunmayı amaçlıyoruz. Sorularınıza ve taleplerinize anında
                yanıt veren ekibimiz, size en iyi deneyimi yaşatmak için burada.
              </p>
            </div>
          </div>
          <div className="aim-image">
            <div className="item-image">
              <img src={hand} alt="" />
            </div>
            <div className="item-image">
              <img src={taxi} alt="" />
            </div>
            <div className="item-image">
              <img src={map} alt="" />
            </div>
            <div className="item-image">
              <img src={hour} alt="" />
            </div>
            <div className="item-image">
              <img src={customer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
