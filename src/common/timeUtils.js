import moment from "moment";

export const generateNumbers = (from, to) => {
  const newList = [];
  for (let i = from; i <= to; i += 1) {
    newList.push(i);
  }
  return newList;
};

export const getStartOfWeek = () => {
  const dayOfWeek = new Date();
  let monday = null;
  for (let i = 0; i <= 7; i += 1) {
    if (dayOfWeek.getDay() !== 1) {
      dayOfWeek.setDate(dayOfWeek.getDate() - 1);
    } else {
      monday = dayOfWeek;
    }
  }
  return monday;
};

export const generateWeek = (date) => {
  const result = [];
  for (let i = 0; i < 7; i += 1) {
    const base = new Date(date);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDisplayedMonthes = (week) => {
  const firstDayOfWeek = new Date(week[0]);
  const lastDayOfWeek = new Date(week[week.length - 1]);

  const currentYearForFirstDayOfWeek = moment(firstDayOfWeek).format("YYYY");
  const currentYearForLastDayOfWeek = moment(lastDayOfWeek).format("YYYY");
  return {
    monthForFirstDayOfWeek: moment(firstDayOfWeek).format("MMMM"),
    monthForLastDayOfWeek: moment(lastDayOfWeek).format("MMMM"),
    currentYear:
      currentYearForFirstDayOfWeek === currentYearForLastDayOfWeek
        ? `${currentYearForFirstDayOfWeek}`
        : `${currentYearForFirstDayOfWeek} - ${currentYearForLastDayOfWeek}`,
  };
};

export const getDisplayedMonth = (week) => {
  const displayedMonth = [];
  const displayedYear = [];
  let result;
  for (let i = 0; i < week.length; i += 1) {
    const month = week[i].toDateString().split(" ")[1];
    const year = week[i].toDateString().split(" ")[3];

    if (displayedMonth.indexOf(month) === -1) {
      displayedMonth.push(month);
    }
    if (displayedYear.indexOf(year) === -1) {
      displayedYear.push(year);
    }
  }
  if (displayedMonth.length === 1) {
    result = `${displayedMonth[0]} ${displayedYear[0]}`;
  }
  if (displayedMonth.length === 2) {
    result = `${displayedMonth[0]} - ${displayedMonth[1]} ${displayedYear[0]}`;
  }
  if (displayedYear.length === 2) {
    result = `${displayedMonth[0]} ${displayedYear[0]} - ${displayedMonth[1]} ${displayedYear[1]}`;
  }
  return result;
};
