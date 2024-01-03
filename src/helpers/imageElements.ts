// image elements
const createImageElement = (src: string): HTMLImageElement => {
  const image = new Image();

  image.src = src;

  return image;
};

const path = "/images/snake/";

const food = createImageElement(`${path}apple.png`);

const headUp = createImageElement(`${path}head_up.png`);
const headDown = createImageElement(`${path}head_down.png`);
const headRight = createImageElement(`${path}head_right.png`);
const headLeft = createImageElement(`${path}head_left.png`);

const tailUp = createImageElement(`${path}tail_up.png`);
const tailDown = createImageElement(`${path}tail_down.png`);
const tailRight = createImageElement(`${path}tail_right.png`);
const tailLeft = createImageElement(`${path}tail_left.png`);

const bodyVertical = createImageElement(`${path}body_vertical.png`);
const bodyHorizontal = createImageElement(`${path}body_horizontal.png`);

const bodyBottomLeft = createImageElement(`${path}body_bottomleft.png`);
const bodyBottomRight = createImageElement(`${path}body_bottomright.png`);
const bodyTopLeft = createImageElement(`${path}body_topleft.png`);
const bodyTopRight = createImageElement(`${path}body_topright.png`);

export const images = {
  food,
  headUp,
  headDown,
  headRight,
  headLeft,
  tailUp,
  tailDown,
  tailRight,
  tailLeft,
  bodyVertical,
  bodyHorizontal,
  bodyBottomLeft,
  bodyBottomRight,
  bodyTopLeft,
  bodyTopRight,
};
