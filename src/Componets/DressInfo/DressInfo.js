import React from "react";
import DressInfoRow from "../DressInfoRow/DressInfoRow";
import Clothes from "../Clothes/Clothes";
import "./DressInfo.css";
import backgroundImage from "../../Background/bg9.jpeg";
import Swal from "sweetalert2";
const DressInfo = () => {
  const dressImgKeys = Object.keys(Clothes);
  return (
    <div
      id="dressInfo-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div>
        
      </div>
      <div>
        {dressImgKeys.map((sort, index) => {
          return (
            <div className="dressInfo-container__row" key={sort}>
              <DressInfoRow
                dressImgList={Clothes[sort]}
                sort={sort}
                key={sort}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DressInfo;
