// image elements

import foodImg from "/images/snake/apple.png";

import headUpImg from "/images/snake/head_up.png";
import headDownImg from "/images/snake/head_down.png";
import headLeftImg from "/images/snake/head_left.png";
import headRightImg from "/images/snake/head_right.png";

import tailUpImg from "/images/snake/tail_up.png";
import tailDownImg from "/images/snake/tail_down.png";
import tailLeftImg from "/images/snake/tail_left.png";
import tailRightImg from "/images/snake/tail_right.png";

import bodyVerticalImg from "/images/snake/body_vertical.png";
import bodyHorizontalImg from "/images/snake/body_horizontal.png";

import bodyBottomLeftImg from "/images/snake/body_bottomleft.png";
import bodyBottomRightImg from "/images/snake/body_bottomright.png";
import bodyTopLeftImg from "/images/snake/body_topleft.png";
import bodyTopRightImg from "/images/snake/body_topright.png";

// image elements
const createImageElement = (src: string): HTMLImageElement => {
  const image = new Image();

  image.src = src;

  return image;
};

const food = createImageElement(foodImg);

const headUp = createImageElement(headUpImg);
const headDown = createImageElement(headDownImg);
const headRight = createImageElement(headRightImg);
const headLeft = createImageElement(headLeftImg);

const tailUp = createImageElement(tailUpImg);
const tailDown = createImageElement(tailDownImg);
const tailRight = createImageElement(tailRightImg);
const tailLeft = createImageElement(tailLeftImg);

const bodyVertical = createImageElement(bodyVerticalImg);
const bodyHorizontal = createImageElement(bodyHorizontalImg);

const bodyBottomLeft = createImageElement(bodyBottomLeftImg);
const bodyBottomRight = createImageElement(bodyBottomRightImg);
const bodyTopLeft = createImageElement(bodyTopLeftImg);
const bodyTopRight = createImageElement(bodyTopRightImg);

export const imagePaths = {
  foodImg,

  headUpImg,
  headDownImg,

  headLeftImg,
  headRightImg,

  tailUpImg,
  tailDownImg,
  tailLeftImg,
  tailRightImg,

  bodyVerticalImg,
  bodyHorizontalImg,

  bodyBottomLeftImg,
  bodyBottomRightImg,
  bodyTopLeftImg,
  bodyTopRightImg,
};

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
