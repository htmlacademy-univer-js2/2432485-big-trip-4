import { getRandomPoint } from '../mock/point';

const POINTS_COUNT = 12;

export default class PointsModel {
  #points = null;

  constructor() {
    this.#points = Array.from({ length: POINTS_COUNT }, getRandomPoint);
  }

  get points() {
    return this.#points;
  }
}
