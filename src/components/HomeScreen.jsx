import React from "react";
import Footer from "./Footer";
// import MainBar from './NavBar'
import home1 from "../images/home1.jpg";
// import time from "../images/time.jpg";
import '../Styles/Homescreen.css';   
import Card from "./card/Card";
import design1 from "../images/design1.png";
import develop from "../images/develop.png";
import marketing from '../images/marketing.png';
import consulting from '../images/consulting.png';
import WorkPortfolio from "./workportfolio/WorkPortfolio";
import Slider from "./slider/Slider";
import Sidebar from '../components/sidebar/Sidebar';
const HomeScreen = () => {
  return (
    <>
      <div className="final">
        <div className="f1">
          <div className="banner">
            <img className="home-img" src={home1} alt={home1} />
          </div>
          <div className="banner-info">
            <h1 className="p-info">A Creative Studio that</h1>
            <h2 className="p-info2"> Thinks Design</h2>
          </div>
        </div>

        <Card />
        <div className="sercice-image">
          <div className="head-con">
            <a href="/services/design" alt="design">
              <img className="image" src={design1} alt={design1} />
            </a>
            <h2>Design</h2>
          </div>
          <div className="head-con">
            <a href="/services/development" alt="develop">
              <img className="image" src={develop} alt={develop} />
            </a>
            <h2>Develop</h2>
          </div>
          <div className="head-con">
            <a href="/services/digitalmarketing" alt="marketing">
              <img className="image" src={marketing} alt={marketing} />
            </a>
            <h2>Digital Marketing</h2>
          </div>
          <div className="head-con">
            <a href="/services/digitalconsulting" alt="consulting">
              <img className="image" src={consulting} alt={consulting} />
            </a>
            <h2>Digital Consulting</h2>
          </div>
        </div>
        <WorkPortfolio />
        <Slider />
        <Sidebar/>
        <Footer />
      </div>
    </>
  );
};

export default HomeScreen;
