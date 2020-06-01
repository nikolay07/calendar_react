import React from "react";
import { getDisplayedMonth } from "../common/timeUtils";

// import PropTypes from "prop-types";

const Header = ({ week, onToday, nextWeek, prewWeek, onCreateEvent }) => {
  const currentMonth = getDisplayedMonth(week);
  return (
    <header className="header">
      <button
        data-id="create-btn"
        onClick={onCreateEvent}
        className="header__button_create"
        type="button"
      >
        <i className="fas fa-plus" />
        Create
      </button>
      <button className="header__button_today" onClick={onToday} type="button">
        Today
      </button>
      <div className="header__week-toggle">
        <span onClick={prewWeek} className="header__week-toggle_chevron-left">
          <i className="fas fa-chevron-left chevron" />
        </span>
        <span onClick={nextWeek} className="header__week-toggle_chevron-right">
          <i className="fas fa-chevron-right chevron" />
        </span>
      </div>
      <span className="header__current-month-year">{currentMonth}</span>
    </header>
  );
};

export default Header;

// Header.propTypes = {
//   week: PropTypes.array,
//   onCreateEvent: PropTypes.func,
//   onToday: PropTypes.func,
//   nextWeek: PropTypes.func,
//   prewWeek: PropTypes.func,
// };
