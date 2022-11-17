import React from "react";
import "./workportfolio.css";
import wport from "../../images/wport.png";
import wport1 from "../../images/wport1.png";
import NoQ from "../../images/NoQ.png";
import Panchatantra from "../../images/Panchatantra.png";
import Foxpers from "../../images/Foxpers.png";
import Alexa from "../../images/Alexa-2.png";
import indialends from "../../images/indialends.png";
import { Link } from "react-router-dom";
import PlayersApp from "../../images/PlayersApp.png";
import Scarlett from "../../images/Scarlett.png";
const WorkPortfolio = () => {
  return (
    <>
      <div>
        <h1>WorkPortfolio</h1>
      </div>
      <div className="container-head">
        <div className="image-container">
          <img className="image-one" src={wport} alt={wport} />
          <div className="image-container1">
            <img className="image-two" src={wport1} alt={wport1} />
            <img className="image-three" src={NoQ} alt={NoQ} />
            <img className="image-four" src={Panchatantra} alt={Panchatantra} />
            <img className="image-five" src={Foxpers} alt={Foxpers} />
          </div>
          <div className="image-container2">
            <img className="image-six" src={Alexa} alt={Alexa} />
            <img className="image-seven" src={indialends} alt={indialends} />
            <img className="image-eight" src={PlayersApp} alt={PlayersApp} />
          </div>
          <img className="image-nine" src={Scarlett} alt={Scarlett} />
        </div>
      </div>
    </>
  );
};

export default WorkPortfolio;
