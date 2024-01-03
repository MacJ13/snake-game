import { images } from "./helpers/imageElements.js";
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
// // image elements
// const foodImg: HTMLImageElement = document.querySelector("#food-img")!;
// Game data
const game = {
    startX: 200,
    startY: 200,
    dx: 1,
    dy: 0,
    changeDirection: false,
    direction: "right",
    playing: true,
    score: 0,
    snakeParts: 3,
};
// Board data
const board = {
    width: 400,
    height: 400,
    cellSize: 20,
};
const snake = []; // snake position parts
const food = []; // food position;
// data for animation
let then = Date.now();
let now;
const createBoard = () => {
    canvas.width = board.width;
    canvas.height = board.height;
    game.dx *= board.cellSize;
};
// add initial snake part positions
const initSnakePositions = () => {
    for (let i = 0; i <= game.snakeParts; i++) {
        const x = game.startX - i * board.cellSize;
        const y = game.startY;
        snake[i] = { x, y, direction: "right" };
    }
};
// create random position for food
const addRandomFoodPosition = () => {
    let x = Math.floor((Math.random() * canvas.width) / board.cellSize) *
        board.cellSize;
    let y = Math.floor((Math.random() * canvas.height) / board.cellSize) *
        board.cellSize;
    const isAvailableSnakePosition = snake.find((s) => s.x === x && s.y === y);
    if (isAvailableSnakePosition)
        addRandomFoodPosition();
    else {
        food[0] = x;
        food[1] = y;
    }
};
const drawImage = (imageEl, x, y) => {
    ctx.drawImage(imageEl, x, y, board.cellSize, board.cellSize);
};
// draw snake parts on canvas board
const drawSnake = () => {
    ctx.fillStyle = "orangered";
    ctx.strokeStyle = "#ecfeff";
    snake.forEach((part) => {
        ctx.fillRect(part.x, part.y, board.cellSize, board.cellSize);
    });
};
const drawFood = () => {
    drawImage(images.food, food[0], food[1]);
    // ctx.drawImage(foodImg, food[0], food[1], board.cellSize, board.cellSize);
    // // ctx.fillStyle = "black";
    // // ctx.fillRect(food[0], food[1], board.cellSize, board.cellSize);
};
const isSnakeOffBoard = (x, y) => {
    return x < 0 || x >= board.width || y < 0 || y >= board.height;
};
// move snake elements every animation
const moveSnake = () => {
    const [head, ...others] = snake;
    const last = snake[snake.length - 1];
    // detect collision between head and other snake parts
    const collision = others.every((part) => head.x !== part.x || head.y !== part.y);
    if (!collision) {
        game.playing = false;
        return;
    }
    // detect if snake get the food
    if (food[0] === head.x && food[1] === head.y) {
        snake.push(Object.assign({}, last));
        addRandomFoodPosition();
    }
    const nextX = head.x + game.dx;
    const nextY = head.y + game.dy;
    // add new position and remove last position
    snake.pop();
    snake.unshift({ x: nextX, y: nextY, direction: game.direction });
};
const draw = () => {
    if (!game.playing) {
        return;
    }
    clearSnake();
    drawFood();
    drawSnake();
    const head = snake[0];
    const offboard = isSnakeOffBoard(head.x, head.y);
    if (offboard) {
        game.playing = false;
        return;
    }
    moveSnake();
};
const clearSnake = () => {
    ctx.clearRect(0, 0, board.width, board.height);
};
const animate = () => {
    // compare timestamp difference after animate function
    // to slow animation frames
    now = Date.now();
    const difference = now - then;
    if (difference > 125) {
        game.changeDirection = false;
        then = now;
        draw();
    }
    window.requestAnimationFrame(animate);
};
const init = () => {
    if (canvas.getContext !== undefined) {
        createBoard();
        initSnakePositions();
        addRandomFoodPosition();
        animate();
    }
};
init();
document.addEventListener("keydown", (e) => {
    // prevent to not press keyboard to trigger reverse current direction
    if (game.changeDirection)
        return;
    game.changeDirection = true;
    if (e.key === "ArrowUp" && game.dy === 0) {
        game.dy = -1 * board.cellSize;
        game.dx = 0;
        game.direction = "up";
    }
    else if (e.key === "ArrowRight" && game.dx === 0) {
        game.dy = 0;
        game.dx = 1 * board.cellSize;
        game.direction = "right";
    }
    else if (e.key === "ArrowDown" && game.dy === 0) {
        game.dy = 1 * board.cellSize;
        game.dx = 0;
        game.direction = "down";
    }
    else if (e.key === "ArrowLeft" && game.dx === 0) {
        game.dy = 0;
        game.dx = -1 * board.cellSize;
        game.direction = "left";
    }
});
