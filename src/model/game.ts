import { CELL_SIZE } from "../const/consts";
import { Direction, Status } from "../enums/enums";
import { getRandomNumber } from "../helpers/randomNumber";
import { GameState, Position, SnakePosition } from "../types/types";
import Food from "./food";
import Snake from "./snake";

class Game {
  private snake: Snake = new Snake();
  private food: Food = new Food();

  private _state: GameState = {
    dx: CELL_SIZE,
    dy: 0,
    direction: Direction.Right,
    score: 0,
    changeDirection: false,
    status: Status.Playing,
  };

  constructor() {
    this.generateRandomFoodPosition();
  }

  move(): void {
    const nextX = this.snakeHead.x + this.state.dx;
    const nextY = this.snakeHead.y + this.state.dy;

    const newPosition = {
      x: nextX,
      y: nextY,
      direction: this._state.direction,
    };

    this.snake.getLastPosition();
    this.snake.addFirstPosition(newPosition);
  }

  private checkAvailablePosition(x: number, y: number) {
    return this.snake.allBody.find((part) => part.x === x && part.y === y);
  }

  generateRandomFoodPosition(): void {
    let randomX = getRandomNumber();
    let randomY = getRandomNumber();

    const isPositionAvailable = this.checkAvailablePosition(randomX, randomY);

    if (isPositionAvailable) this.generateRandomFoodPosition();
    else this.food.position = { x: randomX, y: randomY };
  }

  changeSnakeDirection(key: string) {
    // prevent to not press keyboard to trigger reverse current direction
    if (this.state.changeDirection) return;
    this.state.changeDirection = true;

    if (key === "ArrowUp" && this.state.dy === 0) {
      this.state.dy = -CELL_SIZE;
      this.state.dx = 0;
      this.state.direction = Direction.Up;
    } else if (key === "ArrowRight" && this.state.dx === 0) {
      this.state.dy = 0;
      this.state.dx = CELL_SIZE;
      this.state.direction = Direction.Right;
    } else if (key === "ArrowDown" && this.state.dy === 0) {
      this.state.dy = CELL_SIZE;
      this.state.dx = 0;
      this.state.direction = Direction.Down;
    } else if (key === "ArrowLeft" && this.state.dx === 0) {
      this.state.dy = 0;
      this.state.dx = -CELL_SIZE;
      this.state.direction = Direction.Left;
    }
  }

  get snakeHead(): SnakePosition {
    return this.snake.allBody[0];
  }

  get snakeBody(): SnakePosition[] {
    return this.snake.allBody;
  }

  get snakeTail(): SnakePosition {
    const last = this.snake.allBody.length - 1;
    return this.snake.allBody[last];
  }

  get snakeRestBody(): SnakePosition[] {
    return this.snake.allBody.slice(1);
  }

  get foodPosition(): Position {
    return this.food.position;
  }

  get state(): GameState {
    return this._state;
  }

  set changingDirection(change: boolean) {
    this._state.changeDirection = change;
  }
}

export default Game;
