import { BOARD_SIZE, CELL_SIZE } from "../const/consts";

export function getRandomNumber() {
  return Math.floor((Math.random() * BOARD_SIZE) / CELL_SIZE) * CELL_SIZE;
}
