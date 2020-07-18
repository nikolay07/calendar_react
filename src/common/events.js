export const filterEventsByDay = (events, day) => {
  return events.filter((event) => {
    return (
      new Date(day).getDate() === new Date(event.dateStart).getDate() &&
      new Date(day).getMonth() === new Date(event.dateStart).getMonth()
    );
  });
};

export const filterEventsByHour = (events, hour) => {
  const targetEvent = events.filter((event) => hour === new Date(event.dateStart).getHours());
  const [event] = targetEvent;
  return event;
};
