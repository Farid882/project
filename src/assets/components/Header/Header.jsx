import React from "react";
import "./Header.css";
import VIDEO from "../../images/video.mp4";

import INST from "../../images/icons/Instagram.png";
import SEND from "../../images/icons/Send.png";
import PHONE from "../../images/icons/Phone outgoing.png";
import LOGO from "../../images/logo.png";
import GLOBE from "../../images/icons/Globe.png";
import Menu from "./Menu/Menu";

export default function Header() {
  return (
    <header className="header">
      <div className="overlay">
        <div className="container">
          <div className="flex">
            <div className="logo">
              <a href="/">
                <img src={LOGO} alt="Логотип" />
              </a>
            </div>
            <div className="title">Бюро переводов</div>
            <div className="info">
              <h2 className="phone">+7 906 900 55 65</h2>
              <button className="btn">Связаться с нами</button>
            </div>
          </div>
        </div>
        <hr className="hr" />
        <Menu />
      </div>
      <hr className="hr" />
    </header>
  );
}
