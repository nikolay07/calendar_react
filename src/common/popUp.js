export const createPopup = () => {
  const date = new Date();
  const newEvent = {};
  newEvent.title = "";
  newEvent.dateStart = date.toLocaleDateString().split(".").reverse().join("-");
  newEvent.dateEnd = date.toLocaleDateString().split(".").reverse().join("-");
  if (date.getHours() === 23) {
    newEvent.timeStart = `${date.getHours()}:00`;
    newEvent.timeEnd = `${date.getHours()}:59`;
  } else if (date.getHours() === 9) {
    newEvent.timeStart = `0${date.getHours()}:00`;
    newEvent.timeEnd = `${date.getHours() + 1}:00`;
  } else if (date.getHours() > 9) {
    newEvent.timeStart = `${date.getHours()}:00`;
    newEvent.timeEnd = `${date.getHours() + 1}:00`;
  } else {
    newEvent.timeStart = `0${date.getHours()}:00`;
    newEvent.timeEnd = `0${date.getHours() + 1}:00`;
  }
  newEvent.colorEvent = "#293dce";
  newEvent.description = "";
  newEvent.id = Math.floor(Math.random() * 1000);

  return newEvent;
};
