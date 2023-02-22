import React from "react";
import "./hero.scss";
import { IoIosArrowForward } from "react-icons/io";

function Hero() {
  return (
    <div className="hero">
      <div className="caption">
        <h1>A book is a gift you can open again and again.</h1>
        <p>-Garrison Keillor</p>
        <button>
        Browse Library <IoIosArrowForward />
      </button>
      </div>

      
    </div>
  );
}

export default Hero;
