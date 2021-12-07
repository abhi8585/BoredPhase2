import React, { Fragment } from "react";

import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import orange from "../assets/img/orange.png";
import wine from "../assets/img/wine.jpeg";
import peng from  "../assets/img/peng.png"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const ProductImages = props => {
  return (
    
      // <AwesomeSlider>
        <Fragment>
        <img src={peng} alt="blue shoe" className="shoe show" color="blue" />
        {/* <img src={red} alt="red shoe" className="shoe " color="red" />
        <img src={green} alt="green shoe" className="shoe" color="green" />
        <img src={orange} alt="orange shoe" className="shoe" color="orange" />
        <img src={black} alt="black shoe" className="shoe " color="black" /> */}
        </Fragment>
      // </AwesomeSlider>
    
  );
};

export default ProductImages;
