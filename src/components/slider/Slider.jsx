import React from "react";
import "./slider.css";
import { sliderItems } from "../../data";
const Slider = () => {
  return (
    <>
      <div>
        <h1 className="foo">Client Testimonials</h1>
      </div>
      {sliderItems.map((item) => (
        <div className="s-card">
          <div className="card-header s-head " bg={item.bg} key={item.id}>
            <img className="card-img-top s-image" src={item.img} />
            <div className="test">
              <div className="s-content1"></div>
              <div className="s-content2">
                <h3>{item.title}</h3>

                <p className="card-text test-p">{item.posting}</p>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text1">{item.desc}</p>
            </div>
          </div>

          {/* <div>
            <img
              className="card-img-top s-image"
              src={eganesha}
              alt={eganesha}
            />
          </div> */}
        </div>
      ))}
    </>
  );
};

export default Slider;
