import React from "react";
import "./Calendar.scss";
import PropTypes from "prop-types";
import CalendarDay from "./CalendarDay";

import { filterEventsByDay } from "../common/events";

const CalendarBody = ({ week, events, onShowPopup, onDeleteEvent }) => {
  return (
    <div className="calendar__week">
      {week.map((day) => {
        const eventsOnDay = filterEventsByDay(events, day);
        return (
          <CalendarDay
            onDeleteEvent={onDeleteEvent}
            key={day.toISOString()}
            events={eventsOnDay}
            onShowPopup={onShowPopup}
            date={day}
          />
        );
      })}
    </div>
  );
};

export default CalendarBody;

CalendarBody.propTypes = {
  week: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
  onShowPopup: PropTypes.arrayOf(PropTypes.shape),
  events: PropTypes.arrayOf(PropTypes.shape),
};
CalendarBody.defaultProps = {
  onShowPopup: [],
  events: [],
};
