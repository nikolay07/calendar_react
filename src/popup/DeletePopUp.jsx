import React from "react";
import PropTypes from "prop-types";
import "./DeletePopUp.scss";

const DeletePopUp = ({ eventId, onDeleteEvent }) => {
  return (
    <div
      onClick={() => onDeleteEvent(eventId)}
      className="day-event_delete"
      onKeyPress={() => {}}
      role="button"
      tabIndex="0"
    >
      <i className="fa fa-trash" aria-hidden="true">
        <span className="day-event_delete_text">Удалить</span>
      </i>
    </div>
  );
};

export default DeletePopUp;

DeletePopUp.propTypes = {
  eventId: PropTypes.string.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
};
