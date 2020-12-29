import React from "react";
import "./companies.styles.scss";
import logo from "../../assets/logo.svg";
import A from "../../assets/A violet.svg";

const Companies = () => (
  <div className="companies">
    <h1>Companies Who Trust Us </h1>
    <div className="company">
      <img src={logo}></img>
      <img src={A}></img>
      <img src={logo}></img>
      <img src={A}></img>
      <img src={logo}></img>
      <img src={A}></img>
      <img src={logo}></img>
      <img src={A}></img>
    </div>
  </div>
);

export default Companies;
