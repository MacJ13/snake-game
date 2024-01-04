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

type GameSnake = {
  direction: string;
  snakeParts: number;
};
type GameState = {
  dx: number;
  dy: number;
  changeDirection: boolean;
  playing: boolean;
  score: number;
};

export type Game = GameSnake & GameState;
