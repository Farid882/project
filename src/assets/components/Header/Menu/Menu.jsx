import React from "react";
import "../Menu/Menu.css";
import RVP from "../../../MenuItem/RVP";

export default function Menu() {
  const menu = [
    "Заказать перевод",
    "Услуги и цены",
    "Контакты",
    {text: "РВП и ВНЖ", link: <RVP />},
    "Получение визы",
    "Поступление в ВУЗ",
  ];
  return (
    <nav className="nav">
      <ul>
        {menu.map((item, index, l) => (
          <a key={index} className="link" href={item.l}>
            {item}
          </a>
        ))}
      </ul>
    </nav>
  );
}
