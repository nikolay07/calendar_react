import React from "react";
// import PropTypes from "prop-types";
import CalendarHour from "./CalendarHours";
import { filterEventsByHour } from "../common/events";
import { generateNumbers } from "../common/timeUtils";

const CalendarDay = ({
  events,
  onShowPopup,
  date,
  onDeleteEvent,
}) => {
  const timeScale = generateNumbers(0, 23);

  return (
    <div className="calendar__day">
      {timeScale.map((hour, index) => {
        const event = filterEventsByHour(events, index);
        return (
          <CalendarHour
            onDeleteEvent={onDeleteEvent}
            event={event}
            hour={index}
            date={date}
            key={index}
            onShowPopup={onShowPopup}
          />
        );
      })}
    </div>
  );
};

export default CalendarDay;

// CalendarDay.propTypes = {
//   date: PropTypes.object,
//   onDeleteEvent: PropTypes.func,
//   onShowPopup: PropTypes.func,
//   events: PropTypes.array,
// };
