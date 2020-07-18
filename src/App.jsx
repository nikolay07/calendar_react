import React, { Component } from "react";
import Header from "./header/Header";
import Week from "./weekDays/Week";
import Main from "./main/Main";
import Popup from "./popup/PopUp";
import { getStartOfWeek, generateWeek } from "./common/timeUtils";
import { deleteEvent, saveEvent, fetchEvents } from "./common/eventsGateWays";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstDayOfWeek: getStartOfWeek(),
      events: [],
      popupShown: false,
    };
  }

  componentDidMount() {
    this.onfetchEvents();
  }

  onfetchEvents = () => {
    return fetchEvents()
      .then((eventsList) => this.setState({ events: eventsList }))
      .catch((err) => console.log("You have error", err));
  };

  onSaveEvent = (event) => {
    const newEvent = event;
    const timeStart = newEvent.timeStart.split(":");
    newEvent.dateStart = new Date(
      new Date(newEvent.dateStart).setHours(+timeStart[0], +timeStart[1])
    );
    const timeEnd = newEvent.timeEnd.split(":");
    newEvent.dateEnd = new Date(new Date(newEvent.dateEnd).setHours(+timeEnd[0], +timeEnd[1]));

    if (newEvent.title === "") {
      newEvent.title = "NEW EVENT";
    }

    saveEvent(newEvent)
      .then((data) => {
        const { events } = this.state;
        events.push(data);
        return this.setState({ events });
      })
      .catch((err) => console.log("You have error", err));
  };

  onToday = () => this.setState({ firstDayOfWeek: getStartOfWeek() });

  nextWeek = () => {
    const { firstDayOfWeek } = this.state;
    const day = firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 7);

    this.setState({
      firstDayOfWeek: new Date(day),
    });
  };

  prewWeek = () => {
    const { firstDayOfWeek } = this.state;
    const day = firstDayOfWeek.setDate(firstDayOfWeek.getDate() - 7);

    this.setState({
      firstDayOfWeek: new Date(day),
    });
  };

  popupSwitcher = () => {
    const { popupShown } = this.state;
    this.setState({ popupShown: !popupShown });
  };

  onDeleteEvent = (id) => {
    deleteEvent(id).then(() => this.onfetchEvents());
  };

  render() {
    const { firstDayOfWeek, events, popupShown } = this.state;
    return (
      <>
        <Header
          week={generateWeek(firstDayOfWeek)}
          onCreateEvent={this.popupSwitcher}
          onToday={this.onToday}
          nextWeek={this.nextWeek}
          prewWeek={this.prewWeek}
        />
        <Week week={generateWeek(firstDayOfWeek)} />
        <Main
          onDeleteEvent={this.onDeleteEvent}
          week={generateWeek(firstDayOfWeek)}
          events={events}
        />
        {popupShown && (
          <Popup
            onSaveEvent={this.onSaveEvent}
            isShown={popupShown}
            onPopupSwitcher={this.popupSwitcher}
          />
        )}
      </>
    );
  }
}

export default App;
