import { CELL_SIZE } from "../const/consts";
import { Direction } from "../enums/enums";
import { Position, SnakePosition } from "../types/types";

class Snake {
  private body: SnakePosition[] = [];
  private size: number = 3;
  private startPosition: Position = { x: 200, y: 200 };

  constructor() {
    this.initSnakePositions();
  }

  initSnakePositions() {
    for (let i = 0; i < this.size; i++) {
      const newX = this.startPosition.x - i * CELL_SIZE;
      const newY = this.startPosition.y;

      this.body[i] = { x: newX, y: newY, direction: Direction.Right };
    }
  }

  get allBody(): SnakePosition[] {
    return this.body;
  }
}

export default Snake;
