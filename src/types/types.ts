import { Direction, Status } from "../enums/enums";

export interface Board {
  startX: number;
  startY: number;
  height: number;
  width: number;
  cellSize: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface SnakePosition extends Position {
  direction: string;
}

export interface ImgPath {
  id: string;
  path: string;
}

export interface GameState {
  dx: number;
  dy: number;
  direction: Direction;
  score: number;
  changeDirection: boolean;
  status: Status;
}

export type Game = {
  direction: string;
  snakeParts: number;
  dx: number;
  dy: number;
  changeDirection: boolean;
  playing: boolean;
  score: number;
};
