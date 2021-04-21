import React, { useState } from "react";
import DressInfoRow from "../DressInfoRow/DressInfoRow";
import top1 from "../../DressRoom/top1.png";
import top2 from "../../DressRoom/top2.png";
import top3 from "../../DressRoom/top3.png";
import top4 from "../../DressRoom/top4.png";
import top5 from "../../DressRoom/top5.png";
import top6 from "../../DressRoom/top6.png";
import top7 from "../../DressRoom/top7.png";
import under1 from "../../DressRoom/under1.png";
import under2 from "../../DressRoom/under2.png";
import under3 from "../../DressRoom/under3.png";
import under4 from "../../DressRoom/under4.png";
import under5 from "../../DressRoom/under5.png";
import under6 from "../../DressRoom/under6.png";
import bag1 from "../../DressRoom/bag1.png";
import bag2 from "../../DressRoom/bag2.png";
import bag3 from "../../DressRoom/bag3.png";
import bag4 from "../../DressRoom/bag4.png";
import bag5 from "../../DressRoom/bag5.png";
import bag6 from "../../DressRoom/bag6.png";
import shoes1 from "../../DressRoom/shoes1.png";
import shoes2 from "../../DressRoom/shoes2.png";
import shoes3 from "../../DressRoom/shoes3.png";
import shoes4 from "../../DressRoom/shoes4.png";
import shoes5 from "../../DressRoom/shoes5.png";
import backgroundImage from "../../Background/bg9.jpeg";
import "./DressInfo.css";
const DressInfo = () => {
  const [dressImg, setDressImg] = useState({
    TOP: [top1, top2, top3, top4, top5, top6, top7],
    PANTS: [under1, under2, under3, under4, under5, under6],
    BAG: [bag1, bag2, bag3, bag4, bag5, bag6],
    SHOES: [shoes1, shoes2, shoes3, shoes4, shoes5],
  });
  const dressImgKeys = Object.keys(dressImg);
  return (
    <div
      id="dressInfo-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="c">
        {dressImgKeys.map((sort, index) => {
          return (
            <div className="dressInfo-container__row">
              <DressInfoRow dressImgList={dressImg[sort]} sort={sort} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DressInfo;
