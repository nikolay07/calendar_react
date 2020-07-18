import React, { Component } from "react";
import "./Event.scss";
import PropTypes from "prop-types";
import DeletePopUp from "../popup/DeletePopUp";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      deletePopup: false,
    };
  }

  showPopup = () => {
    const { deletePopup } = this.state;
    this.setState({ deletePopup: !deletePopup });
  };

  render() {
    const { event, id, onDeleteEvent } = this.props;
    const { deletePopup } = this.state;
    const height = (new Date(event.dateEnd) - new Date(event.dateStart)) / 1000 / 60;
    const marginTop = new Date(event.dateStart).getMinutes();
    const styles = {
      height: `${height}px`,
      marginTop: `${marginTop}px`,
      background: `${event.colorEvent}`,
    };

    const hoursStart = new Date(event.dateStart).getHours();
    const minutesStart =
      new Date(event.dateStart).getMinutes() < 10
        ? `${new Date(event.dateStart).getMinutes()}0`
        : new Date(event.dateStart).getMinutes();

    const hoursEnd = new Date(event.dateEnd).getHours();
    const minutesEnd =
      new Date(event.dateEnd).getMinutes() < 10
        ? `${new Date(event.dateEnd).getMinutes()}0`
        : new Date(event.dateEnd).getMinutes();

    return (
      <>
        <div
          style={styles}
          className="day-event"
          id={id}
          onClick={(e) => this.showPopup(e)}
          onKeyPress={() => {}}
          role="button"
          tabIndex="0"
        >
          {deletePopup && <DeletePopUp eventId={id} onDeleteEvent={onDeleteEvent} />}
          <span className="day-event-text">{event.title}</span>
          <br />
          <span className="day-event-text">{`${hoursStart}:${minutesStart} - ${hoursEnd}:${minutesEnd}`}</span>
        </div>
      </>
    );
  }
}

export default Event;

Event.propTypes = {
  onDeleteEvent: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  event: PropTypes.shape.isRequired,
};
