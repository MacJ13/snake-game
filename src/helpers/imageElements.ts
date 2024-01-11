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
import { ImgPath } from "../types/types";

const createAsyncImages = (imgObj: ImgPath) => {
  return new Promise((resolve) => {
    const imageEl = new Image();
    imageEl.src = imgObj.path;
    imageEl.id = imgObj.id;
    imageEl.onload = () => {
      resolve(imageEl);
    };
  });
};

export const convertImgElementsToObject = (images: HTMLImageElement[]) => {
  return images.reduce<Object>((acc: any, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {});
};

export const createImages = async (images: ImgPath[]) => {
  return Promise.all(images.map((img) => createAsyncImages(img)));
};

export const imagePaths: ImgPath[] = [
  { id: "food", path: foodImg },
  { id: "headUp", path: headUpImg },
  { id: "headDown", path: headDownImg },
  { id: "headLeft", path: headLeftImg },
  { id: "headRight", path: headRightImg },
  { id: "tailUp", path: tailUpImg },
  { id: "tailDown", path: tailDownImg },
  { id: "tailLeft", path: tailLeftImg },
  { id: "tailRight", path: tailRightImg },
  { id: "bodyVertical", path: bodyVerticalImg },
  { id: "bodyHorizontal", path: bodyHorizontalImg },
  { id: "bodyBottomLeft", path: bodyBottomLeftImg },
  { id: "bodyBottomRight", path: bodyBottomRightImg },
  { id: "bodyTopLeft", path: bodyTopLeftImg },
  { id: "bodyTopRight", path: bodyTopRightImg },
];
