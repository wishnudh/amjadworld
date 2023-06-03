import React, { useState } from 'react';
import BannerImage from "../img/newne.gif";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { motion } from 'framer-motion';
import AnotherImage from "../img/flip.gif";




const Home = () => {
  const [imageSrc, setImageSrc] = useState(BannerImage);

  const handleClick = () => {
    setImageSrc((prevImageSrc) =>
      prevImageSrc === BannerImage ? AnotherImage : BannerImage
  );
  };

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <motion.div
            className="home-image-section"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
          <motion.img src={imageSrc} alt="" />
    </motion.div>
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
