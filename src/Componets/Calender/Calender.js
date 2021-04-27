import React, { useState, useEffect } from "react";
import "./Calender.css";
import Clothes from "../Clothes/Clothes";
import SideBar from "../SideBar/SideBar";
const Calender = () => {
  let today = new Date();
  const [date, setDate] = useState(today.getDate());
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [thisDay, setThisDay] = useState(today.getDay());
  const [cal, setCal] = useState([]);
  const [randomClothes, setRandomClothes] = useState([]);
  const [toggleCalChange, setToggleCalCahnge] = useState(true);
  const [isSideBar, setIsSideBar] = useState(false);
  const [clickDay, setClickDay] = useState();

  const calDic = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  const weekDic = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weekDic2 = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATDAY",
  ];
  let randomClothesArr = [];
  const makeRandomClothes = (len) => {
    randomClothesArr = [];
    setRandomClothes([]);
    const objKeys = Object.keys(Clothes);
    if (year > today.getFullYear()) {
      ///  이거 수정 필요 달이 더큰거만 따지면 안됨
      return;
    }
    if (year === today.getFullYear() && month > today.getMonth() + 1) {
      return;
    }
    if (
      month === parseInt(today.getMonth() + 1) &&
      year === today.getFullYear()
    ) {
      len = parseInt(today.getDate()) - 1;
    }
    for (let i = 0; i <= len; i++) {
      let randomClothes = {};
      for (let j = 0; j < objKeys.length; j++) {
        let sort = objKeys[j];
        let sortLen = Clothes[`${sort}`].length;
        let randomNum = parseInt(Math.random() * sortLen);
        randomClothes[`${sort}`] = Clothes[`${sort}`][randomNum];
      }
      randomClothesArr.push(randomClothes);
    }
    setRandomClothes((prev) => [...prev, ...randomClothesArr]);
    // console.log(randomClothesArr, randomClothes);
  };
  const leftHandleWeek = () => {
    if (month === 1) {
      setMonth((prev) => 13 - prev);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  };
  const rightHandleWeek = () => {
    if (month === 12) {
      setMonth((prev) => 13 - prev);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  };
  const getFirstDayIndex = () => {
    let fistDayIndex = new Date(`${year}-${month}-01`).getDay();
    return fistDayIndex;
  };
  const makeCalendar = () => {
    setClickDay();
    setCal([]);
    let arr = [];
    let fistDayIndex = getFirstDayIndex();
    let day = 1;
    for (let i = 0, cnt = 1; i < 7; i++) {
      if (i < fistDayIndex) {
        arr.push(".");
      } else {
        arr.push(`${cnt}`);
        cnt += 1;
        day = cnt;
      }
    }
    let m = calDic[month];
    for (let i = day; i <= m; i++) {
      arr.push(i);
    }
    setCal((prev) => [...prev, ...arr]);
    setToggleCalCahnge((prev) => !prev);
  };
  const getWeekDic2 = (d) => {
    return weekDic2[d];
  };

  const dayOnClick = (e) => {
    if (isSideBar === true) {
      return;
    }

    let parsedInt_clickDay = parseInt(e.target.innerText);
    const className = e.target.className;
    const arr = className.split(" ");
    for (var i in arr) {
      // dot 클릭시 sidebar 실행 x
      if (arr[i] === "dot") {
        return;
      }
    }
    if (
      randomClothes[parsedInt_clickDay] ||
      (today.getFullYear() >= year &&
        today.getMonth() + 1 >= month &&
        parsedInt_clickDay <= date)
    ) {
      setIsSideBar(true);
      setClickDay(parsedInt_clickDay);
    }
  };

  useEffect(() => {
    makeCalendar();
    return () => {};
  }, [year, month]);

  useEffect(() => {
    makeRandomClothes(cal.length - getFirstDayIndex());
  }, [toggleCalChange]);

  return (
    <>
      <SideBar
        setIsSideBar={setIsSideBar}
        isSideBar={isSideBar}
        dayLook={randomClothes[clickDay]}
      />
      <div
        className={
          "calender" +
          (isSideBar === true ? " active-side" : " non-active-side")
        }
      >
        <div id="container">
          <h2>Day info</h2>
          <div className="year-month-container">
            <div>
              <div id="year">{year}</div>
              <span id="bar">/</span>
              <div id="month">{month}</div>
            </div>
            <div className="btn">
              <div onClick={leftHandleWeek}>
                <i className="fas fa-arrow-circle-left"></i>
              </div>
              <div onClick={rightHandleWeek}>
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </div>
          </div>
          <div id="weekDic">
            {weekDic.map((dic, index) => {
              return (
                <div className="dic" id={dic} key={index}>
                  {dic}
                </div>
              );
            })}
          </div>
          <div id="calenda">
            {cal.map((day, index) => {
              return (
                <div
                  className={
                    "day" +
                    (day === today.getDate() && month === today.getMonth() + 1
                      ? " today"
                      : "") +
                    (day !== "." ? " day-num" : " dot")
                  }
                  key={index}
                  onClick={dayOnClick}
                >
                  {day}
                  {randomClothes.length > day ? (
                    <i
                      className="fas fa-check checked"
                      onClick={dayOnClick}
                    ></i>
                  ) : undefined}
                </div>
              );
            })}
          </div>
        </div>
        <div id="controller">
          <h3>Today is ...</h3>
          <div id="this-day">{date}</div>
          <div id="date">{getWeekDic2(thisDay)}</div>
        </div>
      </div>
    </>
  );
};

export default Calender;
