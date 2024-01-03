// image elements
const createImageElement = (src: string): HTMLImageElement => {
  const image = new Image();

  image.src = src;

  return image;
};

// const path = "/images/snake/";

// const food = createImageElement(`${path}apple.png`);

// const headUp = createImageElement(`${path}head_up.png`);
// const headDown = createImageElement(`${path}head_down.png`);
// const headRight = createImageElement(`${path}head_right.png`);
// const headLeft = createImageElement(`${path}head_left.png`);

// const tailUp = createImageElement(`${path}tail_up.png`);
// const tailDown = createImageElement(`${path}tail_down.png`);
// const tailRight = createImageElement(`${path}tail_right.png`);
// const tailLeft = createImageElement(`${path}tail_left.png`);

// const bodyVertical = createImageElement(`${path}body_vertical.png`);
// const bodyHorizontal = createImageElement(`${path}body_horizontal.png`);

// const bodyBottomLeft = createImageElement(`${path}body_bottomleft.png`);
// const bodyBottomRight = createImageElement(`${path}body_bottomright.png`);
// const bodyTopLeft = createImageElement(`${path}body_topleft.png`);
// const bodyTopRight = createImageElement(`${path}body_topright.png`);

const path = "/images/snake/";

let food: HTMLImageElement; // = document.querySelector("#food-img")!;

let headUp: HTMLImageElement; // = document.querySelector(`#head-up`)!;
let headDown: HTMLImageElement; //= document.querySelector(`#head-down`)!;
let headRight: HTMLImageElement; // = document.querySelector(`#head-right`)!;
let headLeft: HTMLImageElement; // = document.querySelector(`#head-left`)!;

let tailUp: HTMLImageElement; //= document.querySelector(`#tail-up`)!;
let tailDown: HTMLImageElement; //= document.querySelector(`#tail-down`)!;
let tailRight: HTMLImageElement; // = document.querySelector(`#tail-right`)!;
let tailLeft: HTMLImageElement; // = document.querySelector(`#tail-left`)!;

const bodyVertical: HTMLImageElement =
  document.querySelector(`#body-vertical`)!;
const bodyHorizontal: HTMLImageElement =
  document.querySelector(`#body-horizontal`)!;

const bodyBottomLeft: HTMLImageElement =
  document.querySelector(`#body-bottom-left`)!;
const bodyBottomRight: HTMLImageElement =
  document.querySelector(`#body-bottom-right`)!;
const bodyTopLeft: HTMLImageElement = document.querySelector(`#body-top-left`)!;
const bodyTopRight: HTMLImageElement =
  document.querySelector(`#body-top-right`)!;

export const paths: { path: string; name: string }[] = [
  { path: `${path}apple.png`, name: "food" },
  { path: `${path}head_up.png`, name: "headUp" },
  { path: `${path}head_down.png`, name: "headDown" },
  { path: `${path}head_right.png`, name: "headRight" },
  { path: `${path}head_left.png`, name: "headLeft" },
  { path: `${path}tail_up.png`, name: "tailUp" },
  { path: `${path}tail_down.png`, name: "tailDown" },
  { path: `${path}tail_right.png`, name: "tailRight" },
  { path: `${path}tail_left.png`, name: "tailLeft" },
  { path: `${path}body_vertical.png`, name: "bodyVertical" },
  { path: `${path}body_horizontal.png`, name: "bodyHorizontal" },
  { path: `${path}body_bottomleft.png`, name: "bodyBottomLeft" },
  { path: `${path}body_bottomright.png`, name: "bodyBottomRight" },
  { path: `${path}body_topleft.png`, name: "bodyTopLeft" },
  { path: `${path}body_topright.png`, name: "bodyTopRight" },
];

type ImageElement = {
  el: HTMLImageElement;
  name: string;
};
export const getImage = (image: { path: string; name: string }) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const imgEl = new Image();

    imgEl.src = image.path;

    imgEl.onload = () => {
      resolve(imgEl);
    };
  });
};

// export const images = {
//   food,
//   headUp,
//   headDown,
//   headRight,
//   headLeft,
//   tailUp,
//   tailDown,
//   tailRight,
//   tailLeft,
//   bodyVertical,
//   bodyHorizontal,
//   bodyBottomLeft,
//   bodyBottomRight,
//   bodyTopLeft,
//   bodyTopRight,
// };
