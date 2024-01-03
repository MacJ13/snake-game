// image elements
const createImageElement = (src) => {
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
const food = document.querySelector("#food-img");
const headUp = document.querySelector(`#head-up`);
const headDown = document.querySelector(`#head-down`);
const headRight = document.querySelector(`#head-right`);
const headLeft = document.querySelector(`#head-left`);
const tailUp = document.querySelector(`#tail-up`);
const tailDown = document.querySelector(`#tail-down`);
const tailRight = document.querySelector(`#tail-right`);
const tailLeft = document.querySelector(`#tail-left`);
const bodyVertical = document.querySelector(`#body-vertical`);
const bodyHorizontal = document.querySelector(`#body-horizontal`);
const bodyBottomLeft = document.querySelector(`#body-bottom-left`);
const bodyBottomRight = document.querySelector(`#body-bottom-right`);
const bodyTopLeft = document.querySelector(`#body-top-left`);
const bodyTopRight = document.querySelector(`#body-top-right`);
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
