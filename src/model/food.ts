import { Position } from "../types/types";

class Food {
  private pos: Position;

  constructor() {
    this.pos = { x: 0, y: 0 };
  }

  set position(p: Position) {
    this.pos = p;
  }

  get position(): Position {
    return this.pos;
  }
}

export default Food;
