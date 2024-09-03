import React from "react";
import "../Services/Services.css";
import ONE from "../../images/avatars/1.png";
import TWO from "../../images/avatars/2.png";

export default function Services() {
    const menu = [
        "✔ финансовых,",
        "✔ оброзовательных,",
        "✔ профессиональных",
    ]
  return (
    <div className="services">
      <div className="container">
        <div className="service-flex">
          <h1 className="service-title">Предоставляем большой спектр услуг</h1>
          <div className="service-text">
            Бюро переводов «Прогресс Системс» поможет вам
            <br /> в достижении разнообразных целей:{" "}
          </div>
        </div>
        <div className="menu">
            <div className="services-block">
                <div className="ul">
                    {menu.map((item) => (
                        <li className="service-item">{item}</li>
                    ))}
                </div>
            </div>
        </div>
        <div className="services-photos">
          <div className="one animate__animated animate__backInLeft">
            <img id="one-photo" src={ONE} alt="" />
          </div>
          <div className="two animate__animated animate__backInRight">
            <img id="two-photo" src={TWO} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
