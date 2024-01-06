import { CELL_SIZE } from "../const/consts";
import { Direction, Status } from "../enums/enums";
import { getRandomNumber } from "../helpers/randomNumber";
import { GameState, SnakePosition } from "../types/types";
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
    console.log(this.food.position);
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

  get state() {
    return this._state;
  }
}

export default Game;