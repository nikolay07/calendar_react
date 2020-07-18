import React from "react";
import PropTypes from "prop-types";

import CalendarBody from "./CalendarBody";
import TimeScale from "../timescale/TimeScale";
import "./Calendar.scss";

const Main = ({ week, events, onShowPopup, onDeleteEvent }) => {
  return (
    <div className="main-part">
      <div className="timescale">
        <TimeScale />
      </div>
      <div className="calendar">
        <CalendarBody
          onDeleteEvent={onDeleteEvent}
          week={week}
          events={events}
          onShowPopup={onShowPopup}
        />
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  week: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  events: PropTypes.arrayOf(PropTypes.shape),
  onShowPopup: PropTypes.arrayOf(PropTypes.shape),
};
Main.defaultProps = {
  events: [],
  onShowPopup: [],
};
