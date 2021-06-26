import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import "./Slider.css";

const Slider = ({ person }) => {
  return (
    <div className="w-100 d-flex flex-column  align-items-center  text-center">
      <div className="personImg">
        <img className="w-100 h-100" src={person.pictureURL} alt="" />
      </div>
      <h5 className="text-warning">{person.name}</h5>
      <h6 className="text-info">{person.job}</h6>
      <p>{person.bio}</p>
      <div className="icon">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Slider;
