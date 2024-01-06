import { imagePaths } from "./helpers/imageElements";
import Game from "./model/game";
import "./style.css";
import CanvasView from "./view/canvasView";
import HeaderView from "./view/headerView";

const headerView: HeaderView = new HeaderView();
const canvasView: CanvasView = new CanvasView();
const game: Game = new Game();

const draw = (): void => {
  const { foodPosition } = game;

  canvasView.drawFood(foodPosition.x, foodPosition.y);
};

const init = async () => {
  await canvasView.createBoard(imagePaths);
  draw();
};

init();

// data for animation
// let then: number = Date.now();
// let now: number;

// const animate = (): void => {
//   //   // compare timestamp difference after animate function
// //   // to slow animation frames
//     now = Date.now();
//     const difference = now - then;

//     if(difference >= 125) {
//       then = now;

//     }

//     window.requestAnimationFrame(animate);
// }

// import "./style.css";
// import {
//   Game as NewGame,
//   Board,
//   SnakePosition,
//   Position,
// } from "./types/types.js";
// import { Direction } from "./enums/enums.js";
// import { imagePaths, images } from "./helpers/imageElements.js";
// import CanvasView from "./view/canvasView.js";
// import HeaderView from "./view/headerView.js";
// import Game from "./model/game.js";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

//     <div class="header">
//       <h1 class="title">Snake game</h1>
//     </div>
//     <canvas id="canvas"></canvas>
// `;

// const canvas: HTMLCanvasElement = document.querySelector("#canvas")!;
// const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
// let currentImage: HTMLImageElement;

// // Board data
// const board: Board = {
//   startX: 200,
//   startY: 200,
//   width: 400,
//   height: 400,
//   cellSize: 20,
// };

// // Game data
// const game: NewGame = {
//   dx: board.cellSize,
//   dy: 0,
//   direction: Direction.Right,
//   snakeParts: 3,
//   score: 0,
//   changeDirection: false,
//   playing: true,
// };

// const snake: SnakePosition[] = []; // snake position parts
// const food: Position = { x: 0, y: 0 }; // food position;

// // data for animation
// let then: number = Date.now();
// let now: number;

// const headerView = new HeaderView();
// const canvasView = new CanvasView(imagePaths);

// const newGame: Game = new Game();

// const createBoard = (): void => {
//   canvas.width = board.width;
//   canvas.height = board.height;
// };

// // add initial snake part positions
// const initSnakePositions = () => {
//   for (let i = 0; i <= game.snakeParts; i++) {
//     const x = board.startX - i * board.cellSize;
//     const y = board.startY;

//     snake[i] = { x, y, direction: Direction.Right };
//   }
// };

// // create random position for food
// const addRandomFoodPosition = (): void => {
//   let x =
//     Math.floor((Math.random() * canvas.width) / board.cellSize) *
//     board.cellSize;
//   let y =
//     Math.floor((Math.random() * canvas.height) / board.cellSize) *
//     board.cellSize;

//   const isAvailableSnakePosition = snake.find((s) => s.x === x && s.y === y);

//   if (isAvailableSnakePosition) addRandomFoodPosition();
//   else {
//     food.x = x;
//     food.y = y;
//   }
// };

// // function to draw image on canvas board
// const drawImage = (imageEl: HTMLImageElement, x: number, y: number): void => {
//   ctx.drawImage(imageEl, x, y, board.cellSize, board.cellSize);
// };

// // function draw snake head image depending on direction
// const drawHead = (head: SnakePosition): void => {
//   let headImage: HTMLImageElement = images.headUp;

//   if (head.direction === Direction.Up) {
//     headImage = images.headUp;
//   } else if (head.direction === Direction.Right) {
//     headImage = images.headRight;
//   } else if (head.direction === Direction.Down) {
//     headImage = images.headDown;
//   } else if (head.direction === Direction.Left) {
//     headImage = images.headLeft;
//   }

//   drawImage(headImage, head.x, head.y);
// };

// // function set Tail image on last part of snake body depending on snake direction
// const setTailImage = (prevDirection: string): void => {
//   if (prevDirection === Direction.Up) {
//     currentImage = images.tailDown;
//   } else if (prevDirection === Direction.Right) {
//     currentImage = images.tailLeft;
//   } else if (prevDirection === Direction.Down) {
//     currentImage = images.tailUp;
//   } else if (prevDirection === Direction.Left) {
//     currentImage = images.tailRight;
//   }
// };

// // function set body image depending on snake direction
// const setBodyImage = (direction: String): void => {
//   switch (direction) {
//     case Direction.Right:
//     case Direction.Left:
//       currentImage = images.bodyHorizontal;
//       break;
//     case Direction.Up:
//     case Direction.Down:
//       currentImage = images.bodyVertical;
//       break;
//     default:
//       throw new Error("no direction");
//   }
// };

// // function set body corner image when snake turn direction
// const setCornerImage = (
//   currentDirection: string,
//   prevDirection: string
// ): void => {
//   switch (true) {
//     case prevDirection === Direction.Up && currentDirection === Direction.Right:
//     case prevDirection === Direction.Left &&
//       currentDirection === Direction.Down:
//       currentImage = images.bodyTopLeft;
//       break;
//     case prevDirection === Direction.Down &&
//       currentDirection === Direction.Right:
//     case prevDirection === Direction.Left && currentDirection === Direction.Up:
//       currentImage = images.bodyBottomLeft;
//       break;

//     case prevDirection === Direction.Right &&
//       currentDirection === Direction.Down:
//     case prevDirection === Direction.Up && currentDirection === Direction.Left:
//       currentImage = images.bodyTopRight;
//       break;

//     case prevDirection === Direction.Right && currentDirection === Direction.Up:
//     case prevDirection === Direction.Down &&
//       currentDirection === Direction.Left:
//       currentImage = images.bodyBottomRight;
//       break;

//     default:
//       throw new Error("no direction");
//   }
// };

// // draw snake parts on canvas board
// const drawSnake = (): void => {
//   // ctx.fillStyle = "orangered";
//   // ctx.strokeStyle = "#ecfeff";
//   const [head] = snake;

//   for (let i = 1; i < snake.length; i++) {
//     const currentPart = snake[i];
//     const previousPart = snake[i - 1];

//     if (i === snake.length - 1) {
//       setTailImage(previousPart.direction);
//       drawImage(currentImage, currentPart.x, currentPart.y);
//     } else if (currentPart.direction === previousPart.direction) {
//       setBodyImage(currentPart.direction);
//     } else {
//       setCornerImage(currentPart.direction, previousPart.direction);
//     }

//     drawImage(currentImage, currentPart.x, currentPart.y);
//   }

//   drawHead(head);
// };

// const drawFood = (): void => {
//   drawImage(images.food, food.x, food.y);
// };

// const isSnakeOffBoard = (x: number, y: number): boolean => {
//   return x < 0 || x >= board.width || y < 0 || y >= board.height;
// };

// const isSnakeCoveringFood = (x: number, y: number): boolean => {
//   return food.x === x && food.y === y;
// };

// // detect collision between head nad other snake parts
// const isHeadCollidingWithBody = (): boolean => {
//   const [head, ...others] = snake;

//   return others.every((other) => head.x !== other.x || head.y !== other.y);
// };

// // move snake elements every animation
// const moveSnake = (): void => {
//   const head = snake[0];
//   const eatenFood = isSnakeCoveringFood(head.x, head.y); // detect if snake get the food

//   // create next possible position for snake
//   const nextX = head.x + game.dx;
//   const nextY = head.y + game.dy;

//   // add new position and remove last position
//   let last: SnakePosition = snake.pop()!;
//   snake.unshift({ x: nextX, y: nextY, direction: game.direction });

//   if (eatenFood) {
//     // increase snake length after get the food
//     snake.push(last);
//     addRandomFoodPosition();
//   }
// };

// const draw = (): void => {
//   const head = snake[0];
//   const offboard = isSnakeOffBoard(head.x, head.y);
//   const collision = isHeadCollidingWithBody();

//   if (!collision || offboard) {
//     return;
//   }

//   clearSnake();
//   drawFood();
//   drawSnake();

//   moveSnake();
// };

// const clearSnake = (): void => {
//   ctx.clearRect(0, 0, board.width, board.height);
// };

// const animate = (): void => {
//   // compare timestamp difference after animate function
//   // to slow animation frames
//   now = Date.now();
//   const difference = now - then;
//   if (difference > 125) {
//     game.changeDirection = false;
//     then = now;

//     draw();
//   }

//   window.requestAnimationFrame(animate);
// };

// const init = () => {
//   if (canvas.getContext !== undefined) {
//     createBoard();
//     initSnakePositions();
//     addRandomFoodPosition();

//     animate();
//   }
// };

// init();

// document.addEventListener("keydown", (e: KeyboardEvent) => {
//   // prevent to not press keyboard to trigger reverse current direction
//   if (game.changeDirection) return;
//   game.changeDirection = true;

//   if (e.key === "ArrowUp" && game.dy === 0) {
//     game.dy = -board.cellSize;
//     game.dx = 0;
//     game.direction = Direction.Up;
//   } else if (e.key === "ArrowRight" && game.dx === 0) {
//     game.dy = 0;
//     game.dx = board.cellSize;
//     game.direction = Direction.Right;
//   } else if (e.key === "ArrowDown" && game.dy === 0) {
//     game.dy = board.cellSize;
//     game.dx = 0;
//     game.direction = Direction.Down;
//   } else if (e.key === "ArrowLeft" && game.dx === 0) {
//     game.dy = 0;
//     game.dx = -board.cellSize;
//     game.direction = Direction.Left;
//   }
// });

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
