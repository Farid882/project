import React from "react";
import "./Map.css";

export default function Map() {
  return (
    <div class="map">
      <marquee className="marquee" direction="right" scrollamount="10">
        / Связаться с нами / Связаться с нами / Связаться с нами / Связаться с
        нами / Связаться с нами / Связаться с нами / Связаться с нами /
      </marquee>
      <div class="wrp">
        <div class="map-box">
          <h2>Наши контакты</h2>
          <p>
            420029, Республика Татарстан (татарстан), г.о. Город Казань, г
            Казань, ул Александра Попова, д. 7/21, помещ. 2
          </p>
          <p>
            <a href="tel:+7 (495) 123-45-67">+7 906 900 55 65</a>
          </p>
          <p>
            <a href="tel:+7 (987) 005-46-00">+7 (987) 005-46-00</a>
          </p>
          <p>
            <a href="mailto:info@site.com">info@site.com</a>
          </p>
        </div>
      </div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Add6aab98d77f5f837b70bbae5187ad5027633b587beccdaf505ec384a0a34797&amp;source=constructor"
        width="100%"
        height="720"
        frameborder="0"
      ></iframe>
      <div id="map"></div>
    </div>
  );
}
