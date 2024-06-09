const POINT_TYPES = {
  TAXI: 'taxi',
  BUS: 'bus',
  TRAIN: 'train',
  SHIP: 'ship',
  DRIVE: 'drive',
  FLIGHT: 'flight',
  CHECK_IN: 'check-in',
  SIGHTSEEING: 'sightseeing',
  RESTAURANT: 'restaurant'
};

const OFFER_TITLES = ['Upgrade to a business class', 'Order Uber', 'Add lunch', 'Order train'];

const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const DESTINATIONS_NAMES = ['Ekaterinburg', 'Chelyabinsk', 'Berezovski', 'Moscow', 'Saint-Petersburg', 'Kazan', 'Toronto', 'Washington', 'Raleigh', 'Paris', 'Rim'];

const AUTHORIZATION = 'Basic kfdh6dfis21ma16';
const END_POINT = 'https://21.objects.htmlacademy.pro/big-trip';

const offerPrice = {
  MIN: 10,
  MAX: 50
};

const picturesCount = {
  MIN: 1,
  MAX: 4
};

const tripPrice = {
  MIN: 100,
  MAX: 1500
};

const maxPoints = 8;

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
  PRESENT:'present'
};

const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export {
  POINT_TYPES, OFFER_TITLES, DESCRIPTIONS, DESTINATIONS_NAMES, tripPrice, offerPrice, FilterType, SortType, picturesCount,
  maxPoints, UpdateType, UserAction, Method, Mode, AUTHORIZATION, END_POINT, TimeLimit
};
