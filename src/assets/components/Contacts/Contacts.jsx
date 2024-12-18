import React from "react";
import "../Contacts/validate";
import "../Contacts/Contacts.css";

export default function Contacts() {
  return (
    <div id="contacts" className="back back-shadow">
      <div className="contacts-block animate__animated animate__backInUp">
        <h2 className="contacts-title">Заполните форму заявки,</h2>
        <h3 className="contacts-title-x2">и специалист с вами свяжется</h3>
        <div className="contacts-inputs">
          <input className="contacts-input" placeholder="Имя" type="text" />
          <input className="contacts-input" placeholder="E-mail" type="email" />
          <input
            className="contacts-input"
            type="text"
            name="tel"
            placeholder="Номер телефона"
            required
            maxLength="13"
            id="tel"
          />
        </div>
        <div className="checkbox-flex">
          <input className="checkbox" type="checkbox" />
          <p className="checkbox-text">
            Я согласен с{" "}
            <b className="checkbox-text-b">политикой конфиденционности</b> и
            обработкой персональных данных
          </p>
        </div>
        <button className="btn-checkbox">Отправить</button>
        <p className="checkbox-text text">
          Заказывая звонок, Вы даете свое согласие на обработку персональных
          данных и подтверждаете свое согласие с{" "}
          <b className="checkbox-text-b">политикой конфиденциальности</b>
        </p>
        <p className="checkbox-text text">
          * Наш специалист ответит Вам в течение 1 часа после отправления заявки
          в рабочие дни с 9:00 по 18:00 по МСК.
        </p>
      </div>
    </div>
  );
}
