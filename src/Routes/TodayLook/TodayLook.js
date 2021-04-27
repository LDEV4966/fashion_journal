import React from "react";
import backgroundImage from "../../Background/bg14.jpg";
import "./TodayLook.css";
import MainImg from "../../Magazine/main.jpg";
import item1 from "../../Magazine/2.jpg";
import item2 from "../../Magazine/3.jpg";
import item3 from "../../Magazine/4.jpg";
import item4 from "../../Magazine/5.jpg";
import item5 from "../../Magazine/6.jpg";
import Slider from "react-slick";
const TodayLook = () => {
  const settings = {
    // 아래 dots 줄 것인가
    dots: false,
    // 좌우 화살표 줄 것인가
    arrows: false,
    // 마지막 슬라이드에서 처음 슬라이스로
    infinite: true,
    speed: 1000,
    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 1,
    // 스크롤 할 때마다 몇 장씩 넘길 것인가
    slidesToScroll: 1,
    // 자동 넘김을 할 것인가. 한다면 스피드는?
    autoplay: true,
    autoplaySpeed: 2300,
    // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
    pauseOnHover: false,
    // 슬라이더를 넘기지 않고 fade in/out 하는 식으로 트랜지션 됨
    fade: false,
    // 레이지 로딩할 거야?
  };
  const KeyItems = [item1, item2, item3, item4, item5];
  return (
    <div
      id="today-look-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <>{console.log(KeyItems.length)}</>
      <section className="dp-section">
        <div className="dp-section-inner">
          <div className="style-content">
            <p className="style-content_title">Today's Best</p>
            <p className="style-content_tag">
              #Daily Look #Fashion #Spring #2021
            </p>
            <div className="style-content-img">
              <img src={MainImg} alt="mainImg" />
            </div>
          </div>
          <div className="keyslide">
            <Slider {...settings}>
              {KeyItems.map((itemImg, index) => {
                return (
                  <img
                    className="ketside-img"
                    src={itemImg}
                    alt="keyside-img"
                  />
                );
              })}
            </Slider>
          </div>
          <div className="sideslide">
            <Slider {...settings}>
              {KeyItems.map((itemImg, index) => {
                return (
                  <img
                    className="ketside-img"
                    src={
                      index + 1 < KeyItems.length
                        ? KeyItems[index + 1]
                        : KeyItems[0]
                    }
                    alt="keyside-img"
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodayLook;
