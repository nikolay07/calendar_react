import React from "react";
import "./Calendar.scss";
import PropTypes from "prop-types";
import Event from "../event/Event";
import RedLine from "../redLine/RedLine";

const CalendarHour = ({ event, date, hour, onDeleteEvent }) => {
  const redLine =
    date.toDateString() === new Date().toDateString() && hour === new Date().getHours();

  return (
    <div className="calendar__hour">
      {redLine && <RedLine key={date} />}

      {event && <Event event={event} onDeleteEvent={onDeleteEvent} id={event.id} />}
    </div>
  );
};

export default CalendarHour;

CalendarHour.propTypes = {
  date: PropTypes.objectOf(PropTypes.shape),
  onDeleteEvent: PropTypes.func.isRequired,
  hour: PropTypes.number.isRequired,
  event: PropTypes.objectOf(PropTypes.shape),
};

CalendarHour.defaultProps = {
  date: {},
  event: undefined,
};
