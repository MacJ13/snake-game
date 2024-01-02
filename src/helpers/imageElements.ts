// image elements
export const createImageElement = (src: string): HTMLImageElement => {
  const image = new Image();

  image.src = src;

  return image;
};
