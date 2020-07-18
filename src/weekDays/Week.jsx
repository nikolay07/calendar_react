import React from "react";
import PropTypes from "prop-types";
import Day from "./Day";
import "./WeekDays.scss";

const Week = ({ week }) => {
  return (
    <nav className="days-container">
      <div className="gmt">gmt+02</div>
      {week.map((day) => (
        <Day key={day.getDate()} day={day} />
      ))}
    </nav>
  );
};

export default Week;

Week.propTypes = {
  week: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
