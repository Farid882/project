import React from "react";
import VIDEO1 from "../../images/earth.mp4";
import "./About.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <div className="img">
      <video className="video" autoPlay muted loop id="video" onclick="play();">
        <source src={VIDEO1} type="video/mp4" />
      </video>
    </div>
  );
}
