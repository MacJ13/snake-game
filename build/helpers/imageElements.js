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
const food = document.getElementById("food-img");
const headUp = document.getElementById(`${path}head-up`);
const headDown = document.getElementById(`${path}head-down`);
const headRight = document.getElementById(`${path}head-right`);
const headLeft = document.getElementById(`${path}head-left`);
const tailUp = document.getElementById(`${path}tail-up`);
const tailDown = document.getElementById(`${path}tail-down`);
const tailRight = document.getElementById(`${path}tail-right`);
const tailLeft = document.getElementById(`${path}tail-left`);
const bodyVertical = document.getElementById(`${path}body-vertical`);
const bodyHorizontal = document.getElementById(`${path}body-horizontal`);
const bodyBottomLeft = document.getElementById(`${path}body-bottom-left`);
const bodyBottomRight = document.getElementById(`${path}body-bottom-right`);
const bodyTopLeft = document.getElementById(`${path}body-top-left`);
const bodyTopRight = document.getElementById(`${path}body-top-right`);
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
