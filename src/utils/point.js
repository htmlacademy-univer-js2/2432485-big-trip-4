import dayjs from 'dayjs';

const isPointPast = (pointDateTo) => dayjs(pointDateTo).isBefore(dayjs(), 'day');
const isPointFuture = (pointDateFrom) => dayjs(pointDateFrom).isAfter(dayjs(), 'day');
const isPointPresent = (dateFrom, dateTo) => dayjs(dateFrom).isBefore(dayjs()) && dayjs(dateTo).isAfter(dayjs());
const getDateTime = (date) => {
  if (!date || !dayjs(date).isValid()) {
    return '';
  }
  return dayjs(date).format('DD/MM/YY hh:mm');
};
const getDate = (date) => dayjs(date).format('DD MMM');

const getDays = (days) => {
  if (days < 10 && days !== 0) {
    days = `0${days}D`;
  }
  else if (days === 0) {
    days = '';
  }
  else {
    days = `${days}D`;
  }
  return days;
};

const getHours = (hours) => {
  while (hours > 23) {
    hours -= 24;
  }

  if (hours < 10 && hours !== 0) {
    hours = `0${hours}H`;
  }
  else if (hours === 0) {
    hours = '';
  }
  else {
    hours = `${hours}H`;
  }
  return hours;
};

const getMinutes = (minutes) => {
  while (minutes > 59) {
    minutes -= 60;
  }

  if (minutes < 10 && minutes !== 0) {
    minutes = `0${minutes}M`;
  }
  else {
    minutes = `${minutes}M`;
  }
  return minutes;
};

export { isPointFuture, isPointPast,isPointPresent, getDateTime, getDate, getDays, getHours, getMinutes };

