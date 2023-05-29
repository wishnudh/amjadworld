import React from "react";
import BannerImage from "../img/newne.gif";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <p className="primary-text">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Walk With Us To The Moon
        </p>
      </div>
    </div>
  );
};

export default Home;
