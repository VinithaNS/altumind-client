import React from "react";
import mobile from "../../images/mobile.jpg";
import web from "../../images/web.jpg"
import "./Card.css";
const FrontCardDesign = () => {
  return (
    <>
      <section>
        <div className="b-letter">
          <h1 className="head-1">Our Offerings</h1>
        </div>
      </section>
      <div className="c-header">
        <div className="card">
          <div className="c-pointer1">
            <img className="c-image1" src={mobile} alt={mobile} />
          </div>
          <div class="container1 col-md-6">
            <h5>
              Digital Build:
              <span style={{ fontWeight: "bold" }}>Innovation</span>
            </h5>
            <p>
              Through the Digital Build process, we build your digital assets
              from scratch and develop your embryonic ideas into a robust brand.
            </p>
          </div>
        </div>
        <div className="card card2">
          <div className="container2 col-md-6">
            <h5>
              Digital Refresh:
              <span style={{ fontWeight: "bold" }}>Optimization</span>
            </h5>
            <p>
              We equip you to always be at the top of your game by building your
              digital presence across newer platforms like IoT, wearables, voice
              and gesture based interactions.
            </p>
          </div>
          <div className="c-pointer2">
            <img className="c-image2" src={web} alt={web} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontCardDesign;
