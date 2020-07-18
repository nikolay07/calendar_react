import React from "react";
import { generateNumbers } from "../common/timeUtils";
import "./TimeScale.scss";

const TimeScale = () => {
  const hoursByDay = generateNumbers(0, 23);
  return (
    <>
      {hoursByDay.map((hour) => (
        <div className="timescale__hour" key={hour}>
          <span className="timescale__hour-text">
            {hour.toString().length === 1 ? `0${hour}:00` : `${hour}:00`}
          </span>
        </div>
      ))}
    </>
  );
};

export default TimeScale;
