import { BOARD_SIZE, CELL_SIZE } from "../const/consts";
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
    this.body.length = 0;
    for (let i = 0; i < this.size; i++) {
      const newX = this.startPosition.x - i * CELL_SIZE;
      const newY = this.startPosition.y;

      this.body[i] = { x: newX, y: newY, direction: Direction.Right };
    }
  }

  get allBody(): SnakePosition[] {
    return this.body;
  }

  getLastPosition() {
    return this.body.pop();
  }

  addFirstPosition(newPosition: SnakePosition) {
    this.body.unshift(newPosition);
  }

  addLastPosition(lastPosition: SnakePosition) {
    this.body.push(lastPosition);
  }

  get bodyCollision(): boolean {
    const [head, ...otherBody] = this.body;

    return otherBody.every((other) => head.x !== other.x || head.y !== other.y);
  }

  get borderCollision(): boolean {
    const head = this.body[0];

    return (
      head.x < 0 || head.y < 0 || head.x >= BOARD_SIZE || head.y >= BOARD_SIZE
    );
  }
}

export default Snake;
