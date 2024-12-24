import React from "react";
import "../Menu/Menu.css";

import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="container-fluid">
      <nav className="nav">
        <Link to="#translate" className="link">
          Заказать перевод
        </Link>
        <a href="/pricelist" className="link">
          Услуги и цены
        </a>

        <Link to="/rvp" className="link">
          РВП И ВНЖ
        </Link>
        <Link to="/" className="link">
          Получение визы
        </Link>
        <a href="" className="link">
          Консультация при поступлении в ВУЗ
        </a>
        <a className="link ml-5" target="_blank" href="https://www.kstu.ru/">
          Поступление в вуз для иностранцев
        </a>
      </nav>
    </div>
  );
}
