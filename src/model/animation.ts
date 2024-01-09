import { TIME_OUT } from "../const/consts";

class Animation {
  private then: number = Date.now();
  private now: number = 0;

  run(drawCb: () => void): void {
    // compare timestamp difference after animate function
    // to slow animation frames
    this.now = Date.now();
    const difference = this.now - this.then;

    if (difference > TIME_OUT) {
      this.then = this.now;

      drawCb();
    }
  }

  requestAnimationFrame(cb: () => void) {
    window.requestAnimationFrame(cb);
  }
}

export default Animation;
