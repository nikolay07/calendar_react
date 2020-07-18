import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPopup } from "../common/popUp";
import "./PopUp.scss";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      dateStart: "",
      timeStart: "",
      timeEnd: "",
      colorEvent: "#293dce",
      description: "",
    };
  }

  componentDidMount() {
    const newPopup = createPopup();
    this.setState({
      ...newPopup,
    });
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    const { onSaveEvent, onPopupSwitcher } = this.props;
    e.preventDefault();
    const newEvent = this.state;
    onSaveEvent(newEvent);
    onPopupSwitcher();
  };

  render() {
    const { title, colorEvent, dateStart, timeStart, timeEnd, description } = this.state;
    const { onPopupSwitcher } = this.props;
    return (
      <div className="popup-modal">
        <form className="popup" onSubmit={this.onSubmit}>
          <div className="popup__header">
            <i
              className="fas fa-times popup__header_close-btn"
              onClick={onPopupSwitcher}
              onKeyPress={() => {}}
              aria-label="Create"
              role="button"
              tabIndex="0"
            />
            <input
              className="popup__header_title-input"
              type="text"
              name="title"
              placeholder="Enter your event"
              value={title}
              onChange={this.changeHandler}
              required
            />
          </div>
          <div className="popup__color-scheme">
            <div className="popup__color-scheme_label">
              <span className="popup__color-scheme_label-text">Color event</span>
              <input
                className="popup__color-scheme_chooser"
                type="color"
                name="colorEvent"
                value={colorEvent}
                onChange={this.changeHandler}
              />
            </div>
          </div>
          <div className="popup__info">
            <input
              className="popup__info_date-from"
              type="date"
              name="dateStart"
              value={dateStart}
              onChange={this.changeHandler}
              required
            />
            <div className="popup__info_duration">
              <input
                className="popup__info_duration-from"
                name="timeStart"
                type="time"
                value={timeStart}
                onChange={this.changeHandler}
                required
              />
              <div className="popup__info_duration-line"> - </div>
              <input
                className="popup__info_duration-to"
                name="timeEnd"
                type="time"
                value={timeEnd}
                onChange={this.changeHandler}
                required
              />
            </div>
          </div>

          <div className="popup__description">
            <div className="popup__description_icon">
              <i className="fas fa-align-left" />
            </div>
            <input
              className="popup__description_text"
              type="text"
              name="description"
              placeholder="Description"
              cols="30"
              rows="5"
              value={description}
              onChange={this.changeHandler}
            />
          </div>

          <div className="popup__action">
            <span className="popup__action_delete" data-id="913" style={{ visibility: "visible" }}>
              <i className="fa fa-trash fa-2x" aria-hidden="true" onClick={onPopupSwitcher} />
            </span>
            <button className="popup__action_save" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Popup;

Popup.propTypes = {
  onSaveEvent: PropTypes.func.isRequired,
  onPopupSwitcher: PropTypes.func.isRequired,
};
