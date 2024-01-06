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

  drawFood(x: number, y: number): void {
    this.drawElement(this.imageSnakeEl.food, x, y);
  }

  drawSnake(body: SnakePosition[]): void {
    this.context.fillStyle = "orangered";

    const head = body[0];

    for (let i = 1; i < body.length; i++) {
      const currentPart = body[i];

      this.context.fillRect(currentPart.x, currentPart.y, CELL_SIZE, CELL_SIZE);
    }

    this.drawHead(head);
  }
}

export default CanvasView;
