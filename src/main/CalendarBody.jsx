import React from "react";
// import PropTypes from "prop-types";
import CalendarDay from "./CalendarDay";
import { filterEventsByDay } from "../common/events";

const CalendarBody = ({
  week,
  events,
  onShowPopup,
  onDeleteEvent,
}) => {
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

// CalendarBody.propTypes = {
//   week: PropTypes.array,
//   onDeleteEvent: PropTypes.func,
//   onShowPopup: PropTypes.func,
//   events: PropTypes.array,
// };
