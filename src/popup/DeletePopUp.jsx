import React from "react";
// import PropTypes from "prop-types";

const DeletePopUp = ({ eventId, onDeleteEvent }) => {
  return (
    <div
      onClick={() => onDeleteEvent(eventId)}
      className="day-event_delete"
    >
      <i className="fa fa-trash" aria-hidden="true">
        <span className="day-event_delete_text">DELETE</span>
      </i>
    </div>
  );
};

export default DeletePopUp;

// DeletePopUp.propTypes = {
//   eventId: PropTypes.string,
//   onDeleteEvent: PropTypes.func,
// };
