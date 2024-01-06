import View from "./View";
import { BOARD_SIZE, CELL_SIZE } from "../const/consts";
import {
  convertImgElementsToObject,
  createImages,
} from "../helpers/imageElements";
import { ImgPath, SnakePosition } from "../types/types";
class CanvasView extends View {
  canvasEl: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  snakeCurrentImageEl: HTMLImageElement = new Image();
  imageEl: any = {};

  constructor() {
    super();

    this.canvasEl = this.createCanvasElement();
    this.context = this.createCanvasContext();

    this.renderEl(this.canvasEl);
  }

  async createBoard(images: ImgPath[]): Promise<void> {
    const imgElements = (await createImages(images)) as HTMLImageElement[];
    const objImage = convertImgElementsToObject(imgElements);

    this.imageEl = objImage;
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

  drawFood(x: number, y: number): void {
    this.drawElement(this.imageEl.food, x, y);
  }

  drawSnake(head: SnakePosition, restBody: SnakePosition[]): void {
    this.context.fillStyle = "orangered";

    for (let i = 0; i < restBody.length; i++) {
      const currentPart = restBody[i];

      this.context.fillRect(currentPart.x, currentPart.y, CELL_SIZE, CELL_SIZE);
    }

    this.context.fillRect(head.x, head.y, CELL_SIZE, CELL_SIZE);
  }
}

export default CanvasView;
