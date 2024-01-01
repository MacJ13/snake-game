export interface Board {
  height: number;
  width: number;
  cellSize: number;
}

type GameInit = {
  startX: number;
  startY: number;
  dx: number;
  dy: number;
  direction: string;
  snakeParts: number;
};
type GameStatus = {
  changeDirection: boolean;
  playing: boolean;
  score: number;
};

export type Game = GameInit & GameStatus;
