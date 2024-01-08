import View from "./View";
import { BOARD_SIZE, CELL_SIZE } from "../const/consts";
import {
  convertImgElementsToObject,
  createImages,
} from "../helpers/imageElements";
import { ImgPath, SnakePosition } from "../types/types";
import { Direction } from "../enums/enums";
class CanvasView extends View {
  canvasEl: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  snakeCurrentImageEl: HTMLImageElement = new Image();
  imageSnakeEl: any = {};

  constructor() {
    super();

    this.canvasEl = this.createCanvasElement();
    this.context = this.createCanvasContext();

    this.renderEl(this.canvasEl);
  }

  async createBoard(images: ImgPath[]): Promise<void> {
    const imgElements = (await createImages(images)) as HTMLImageElement[];
    const objImage = convertImgElementsToObject(imgElements);

    this.imageSnakeEl = objImage;
  }

  private createCanvasElement(): HTMLCanvasElement {
    const el = document.createElement("canvas")!;
    el.id = "canvas";
    el.width = BOARD_SIZE;
    el.height = BOARD_SIZE;

    return el;
  }

  private createCanvasContext(): CanvasRenderingContext2D {
    return this.canvasEl.getContext("2d")!;
  }

  private drawElement(imageEl: HTMLImageElement, x: number, y: number): void {
    this.context.drawImage(imageEl, x, y, CELL_SIZE, CELL_SIZE);
  }

  private drawHead(head: SnakePosition): void {
    if (head.direction === Direction.Up) {
      this.snakeCurrentImageEl = this.imageSnakeEl.headUp;
    } else if (head.direction === Direction.Right) {
      this.snakeCurrentImageEl = this.imageSnakeEl.headRight;
    } else if (head.direction === Direction.Down) {
      this.snakeCurrentImageEl = this.imageSnakeEl.headDown;
    } else if (head.direction === Direction.Left) {
      this.snakeCurrentImageEl = this.imageSnakeEl.headLeft;
    }

    this.drawElement(this.snakeCurrentImageEl, head.x, head.y);
  }

  private setTailImage(prevDirection: string): void {
    if (prevDirection === Direction.Up)
      this.snakeCurrentImageEl = this.imageSnakeEl.tailDown;
    else if (prevDirection === Direction.Right)
      this.snakeCurrentImageEl = this.imageSnakeEl.tailLeft;
    else if (prevDirection === Direction.Down)
      this.snakeCurrentImageEl = this.imageSnakeEl.tailUp;
    else if (prevDirection === Direction.Left)
      this.snakeCurrentImageEl = this.imageSnakeEl.tailRight;
  }

  private setBodyImage(direction: string) {
    switch (direction) {
      case Direction.Right:
      case Direction.Left:
        this.snakeCurrentImageEl = this.imageSnakeEl.bodyHorizontal;
        break;

      case Direction.Up:
      case Direction.Down:
        this.snakeCurrentImageEl = this.imageSnakeEl.bodyVertical;
        break;
    }
  }

  private setCornerImage(curDirection: string, prevDirection: string): void {
    switch (true) {
      case prevDirection === Direction.Up && curDirection === Direction.Right:
      case prevDirection === Direction.Left && curDirection === Direction.Down:
        this.snakeCurrentImageEl = this.imageSnakeEl.bodyTopLeft;
        break;
      case prevDirection === Direction.Down && curDirection === Direction.Right:
      case prevDirection === Direction.Left && curDirection === Direction.Up:
        this.snakeCurrentImageEl = this.imageSnakeEl.bodyBottomLeft;
        break;

      case prevDirection === Direction.Right && curDirection === Direction.Down:
      case prevDirection === Direction.Up && curDirection === Direction.Left:
        this.snakeCurrentImageEl = this.imageSnakeEl.bodyTopRight;
        break;

      case prevDirection === Direction.Right && curDirection === Direction.Up:
      case prevDirection === Direction.Down && curDirection === Direction.Left:
        this.snakeCurrentImageEl = this.imageSnakeEl.bodyBottomRight;
        break;
    }
  }

  drawFood(x: number, y: number): void {
    this.drawElement(this.imageSnakeEl.food, x, y);
  }

  drawSnake(body: SnakePosition[]): void {
    const head = body[0];

    for (let i = 1; i < body.length; i++) {
      const currentPart = body[i];
      const previousPart = body[i - 1];

      if (i === body.length - 1) {
        this.setTailImage(previousPart.direction);
      } else if (currentPart.direction === previousPart.direction) {
        this.setBodyImage(currentPart.direction);
      } else {
        this.setCornerImage(currentPart.direction, previousPart.direction);
      }

      this.drawElement(this.snakeCurrentImageEl, currentPart.x, currentPart.y);
    }

    this.drawHead(head);
  }

  clearBoard() {
    this.context.clearRect(0, 0, BOARD_SIZE, BOARD_SIZE);
  }
}

export default CanvasView;
