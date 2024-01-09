import { imagePaths } from "./helpers/imageElements";
import Game from "./model/game";
import Animation from "./model/animation";
import "./style.css";
import View from "./view/View";
import CanvasView from "./view/canvasView";
import HeaderView from "./view/headerView";
import ModalView from "./view/modalView";

const headerView: HeaderView = new HeaderView();
const canvasView: CanvasView = new CanvasView();
const modalView: ModalView = new ModalView();

const game: Game = new Game();
const animation: Animation = new Animation();
// let then: number = Date.now();
// let now: number;

const draw = (): void => {
  // prevent to change uncorrect dorection
  game.blockChangingDirection();

  if (!game.playingStatus) return;
  if (game.collision) {
    game.settleEndStatus();
    modalView.showModalElement(game.score);

    game.initGameState();
    return;
  }

  canvasView.clearBoard();
  canvasView.drawFood(game.foodPosition.x, game.foodPosition.y);
  canvasView.drawSnake(game.snakeBody);

  game.move(headerView.updateScore.bind(headerView));
};

const changeDirection = (e: KeyboardEvent): void => {
  const { key } = e;

  const startStatus = game.checkStatus(key);

  if (startStatus) {
    game.settlePlayingStatus();
    modalView.hideModalElement();
    headerView.updateScore(0);
    return;
  }
  game.changeSnakeDirection(key);
};

const animate = (): void => {
  animation.run(draw);

  animation.requestAnimationFrame(animate);
};

// const animate = (): void => {
//   // compare timestamp difference after animate function
//   // to slow animation frames
//   now = Date.now();
//   const difference = now - then;
//   if (difference > 125) {
//     then = now;
//     game.changingDirection = false;

//     draw();
//   }
//   window.requestAnimationFrame(animate);
// };

const init = async () => {
  await canvasView.createBoard(imagePaths);

  View.onKeyDown(changeDirection);
  animate();
};

init();
