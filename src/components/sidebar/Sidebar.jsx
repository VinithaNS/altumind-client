import React from "react";
import { Button } from "@mui/material";
import "./Sidebar.css";
import start from "../../images/start.png";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="s-content">
        <div className="container2">
          <img src={start} alt={start} />
        </div>
        <div className="s-title">
          <h1 className="side-text1">Let's Discuss Your Project</h1>
          <p className="side-text2">
            Choose an ideal tech partner who can turn your idea into a tech
            solution
          </p>
          
          <Button
            className="sidebar-star"
              target="_blank"
              href="https://www.scketch.com/contact/"
              rel="noreferrer"
              variant="contained"
            >
              Start
            </Button>
          
        </div>
      </div>
    </>
  );
};

export default Sidebar;
