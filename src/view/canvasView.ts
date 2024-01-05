import View from "./View";

class CanvasView extends View {
  canvasEl: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  currentImageEl: HTMLImageElement = new Image();
  imagePaths: Object;

  constructor(imagePaths: Object) {
    super();
    this.imagePaths = imagePaths;
    this.canvasEl = this.createCanvasElement();
    this.context = this.canvasEl.getContext("2d")!;
    this.renderEl(this.canvasEl);

    this.initImagePaths(imagePaths);
  }

  private createCanvasElement(): HTMLCanvasElement {
    const el = document.createElement("canvas");
    el.id = "canvas";

    return el;
  }

  private initImagePaths(paths: Object): void {
    Object.values(paths).forEach((path) => {
      this.setImageElSrc(path);
    });
  }

  private setImageElSrc(path: string): void {
    this.currentImageEl.src = path;
  }

  setSize(size: number): void {
    this.canvasEl.width = size;
    this.canvasEl.height = size;
  }
}

export default CanvasView;
