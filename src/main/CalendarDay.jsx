import React from "react";
import "./Calendar.scss";
import PropTypes from "prop-types";
import CalendarHour from "./CalendarHours";
import { filterEventsByHour } from "../common/events";
import { generateNumbers } from "../common/timeUtils";

const CalendarDay = ({ events, onShowPopup, date, onDeleteEvent }) => {
  const timeScale = generateNumbers(0, 23);

  return (
    <div className="calendar__day">
      {timeScale.map((hour, index) => {
        const event = filterEventsByHour(events, index);
        const id = index + 1;
        return (
          <CalendarHour
            onDeleteEvent={onDeleteEvent}
            event={event}
            hour={index}
            date={date}
            key={id}
            onShowPopup={onShowPopup}
          />
        );
      })}
    </div>
  );
};

export default CalendarDay;

CalendarDay.propTypes = {
  date: PropTypes.objectOf(PropTypes.shape),
  onDeleteEvent: PropTypes.func.isRequired,
  onShowPopup: PropTypes.arrayOf(PropTypes.shape),
  events: PropTypes.arrayOf(PropTypes.shape),
};
CalendarDay.defaultProps = {
  date: {},
  onShowPopup: [],
  events: [],
};
