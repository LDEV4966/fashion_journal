import React from "react";
import "./DressInfoRow.css";
import Slider from "react-slick";
import Swal from "sweetalert2";
const DressInfoRow = ({ dressImgList, sort }) => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const addBtnOnClick = () => {
    Swal.fire({
      title: `DB를 구축 하지 않았습니다`,
      confirmButtonColor: "#615f5f",
      confirmButtonText: `확인`,
    });
  };
  return (
    <div className="dressInfoRow-inner">
      <div className="dressSort-info">
        <span className="dressSort">{sort}</span>
        <i className="fas fa-plus-circle addBtn" onClick={addBtnOnClick}></i>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {dressImgList.map((dressImg, index) => {
            return (
              <img
                className="dressImg-list_thumb_img"
                src={dressImg}
                alt={sort}
                key={dressImg}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
export default DressInfoRow;
