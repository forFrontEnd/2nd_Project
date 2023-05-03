import React from "react";
const TodayDate = () => {
  const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const MONTH = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();

  const year = d.getFullYear();
  const month = MONTH[d.getMonth()];
  const day = WEEK[d.getDay()];
  const date = d.getDate();

  const todayInfo = `${year} ${month} ${date} ${day}`;

  return (
    <div style={{ textAlign: "center", fontSize: "4vh" }}>{todayInfo}</div>
  );
};

export default TodayDate;
