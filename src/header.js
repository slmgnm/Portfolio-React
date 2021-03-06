import React, { Component } from "react";
import Typical from "react-typical";
import "./App.css";

import logo from "./images/logo.png";
export default function Header() {
  {
    return (
      <div className="header">
        <div>
        <Typical
          steps={["Hey", 1000, "I'm Salim Ghanem", 500]}
          loop={onloadstart}
          wrapper="p"
          
        />
        <h2>JUNIOR FRONT-END DEVELOPER</h2>
        </div>
        <div className="header-logo">
        <img  src={logo} alt="Salim Ghanem"></img></div>
        
      </div>
    );
  }
}
