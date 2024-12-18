import React from "react";
import "./AS.css";
import ONE from "../../images/icons/1.png";
import TWO from "../../images/icons/2.png";
import THREE from "../../images/icons/3.png";
import FOUR from "../../images/icons/4.png";
import FIVE from "../../images/icons/5.png";
import SIX from "../../images/icons/6.png";

export default function Asortiment() {
  const services = [
    {
      title: "Нотариальное заверение",
      img: "../../images/icons/1.png",
      id: "one",
    },
    { title: "Копицентр", img: "../../images/icons/3.png", id: "two" },
    {
      title: "Медицинские услуги",
      img: "../../images/icons/2.png",
      id: "three",
    },
    {
      title: "Перевод документов на все языки",
      img: "../../images/icons/4.png",
      id: "four",
    },
    {
      title: "Перевод текстов на все языки",
      img: "../../images/icons/5.png",
      id: "five",
    },
    {
      title: "Помощь в изучении русского языка",
      img: "../../images/icons/6.png",
      id: "six",
    },
  ];
  return (
    <div className="asort">
      <div className="flex">
        <div className="services">
     
            <h1 className="title tt">
            Захватывающие истории для вашего бренда.
            </h1>
       
          <div className="service-f">
            <div
              id="one"
              style={{background: "white"}}
              className="service animate__animated animate__backInLeft"
            >
              <h1>Нотариальное заверение</h1>

              <img className="images" src={ONE} alt="service" />
            </div>
            <div
            style={{background: "white"}}
              id="two"
              className="service animate__animated animate__backInRight"
            >
              <h1>Переводим документы на все языки</h1>
              <img className="images" src={TWO} alt="service" />
            </div>
          </div>

          <div className="service-y">
            <div
            style={{background: "white"}}
              id="three"
              className="service animate__animated animate__backInLeft"
            >
              <h1>Копицентр</h1>
              <img className="images " src={TWO} alt="service" />
            </div>
            <div
              id="four"
              style={{background: "white"}}
              className="service  animate__animated animate__backInRight"
            >
              <h1>Перевод текстов</h1>
              <img className="images" src={FIVE} alt="service" />
            </div>
          </div>
          <div className="service-z">
            <div
              id="five"
              style={{background: "white"}}
              className="service animate__animated animate__backInLeft"
            >
              <h1>Медицинские услуги</h1>
              <img className="images" src={THREE} alt="service" />
            </div>
            <button className="button-black animate__animated animate__backInUp">
              Обсудить детали
            </button>
            <div
              id="six"
              style={{background: "white"}}
              className="service  animate__animated animate__backInRight"
            >
              <h1>Помогаем в изучении русского языка</h1>
              <img className="images" src={SIX} alt="service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
