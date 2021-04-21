import React from "react";
import "./DressInfoRow.css";
import Slider from "react-slick";
import styled from "styled-components";

const DressInfoRow = ({ dressImgList, sort }) => {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <div className="dressInfoRow-inner">
      <span className="dressSort">{sort}</span>
      <div className="slider-container">
        <Slider {...settings}>
          {dressImgList.map((dressImg, index) => {
            return (
              <img
                className="dressImg-list_thumb_img"
                src={dressImg}
                alt={sort}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default DressInfoRow;
