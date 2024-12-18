import React from "react";
import "./Price.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PriceList() {
  return (
    <div>
        <Header />
      <section className="plans__container">
        <div className="plans">
          <div className="plansHero">
            <h1 className="plansHero__title">Прайс лист Бюро Переводов</h1>
            <p className="plansHero__subtitle">
            Захватывающие истории для вашего бренда.
            </p>
          </div>
          <div className="planItem__container">
            <div className="planItem planItem--free">
              <div className="card">
                <div className="card__header">
                  <div className="card__icon symbol symbol--rounded"></div>
                  <h2>Бесплатный</h2>
                </div>
                <div className="card__desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do
                </div>
              </div>

              <div className="price">
                320 ₽<span>/ месяц</span>
              </div>

              <ul className="featureList">
                <li>2 links</li>
                <li>Own analytics platform</li>
                <li className="disabled">Chat support</li>
                <li className="disabled">Mobile application</li>
                <li className="disabled">Unlimited users</li>
              </ul>

              <button className="button">Начать работу</button>
            </div>

            <div className="planItem planItem--pro">
              <div className="card">
                <div className="card__header">
                  <div className="card__icon symbol"></div>
                  <h2>Про</h2>
                  <div className="card__label label">Выгодно</div>
                </div>
                <div className="card__desc">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
              </div>

              <div className="price">
                800 ₽<span>/ месяц</span>
              </div>

              <ul className="featureList">
                <li>2 links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li className="disabled">Mobile application</li>
                <li className="disabled">Unlimited users</li>
              </ul>

              <button className="button button--pink">Начать работу</button>
            </div>

            <div className="planItem planItem--entp">
              <div className="card">
                <div className="card__header">
                  <div className="card__icon"></div>
                  <h2>Премиум</h2>
                </div>
                <div className="card__desc">
                  Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                </div>
              </div>

              <div className="price">Let's Talk</div>

              <ul className="featureList">
                <li>2 links</li>
                <li>Own analytics platform</li>
                <li>Chat support</li>
                <li>Mobile application</li>
                <li>Unlimited users</li>
                <li>Customize Panel</li>
              </ul>

              <button className="button button--white">Начать работу</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
