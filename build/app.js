const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
// Game data
const game = {
    startX: 200,
    startY: 200,
    dx: 1,
    dy: 0,
    changeDirection: false,
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
        snake[i] = [x, y];
    }
};
// create random position for food
const addRandomFoodPosition = () => {
    let x = Math.floor((Math.random() * canvas.width) / board.cellSize) *
        board.cellSize;
    let y = Math.floor((Math.random() * canvas.height) / board.cellSize) *
        board.cellSize;
    const isAvailableSnakePosition = snake.find((s) => s[0] === x && s[1] === y);
    if (isAvailableSnakePosition)
        addRandomFoodPosition();
    else {
        food[0] = x;
        food[1] = y;
    }
};
// draw snake parts on canvas board
const drawSnake = () => {
    ctx.fillStyle = "orangered";
    ctx.strokeStyle = "#ecfeff";
    snake.forEach((part) => {
        ctx.fillRect(part[0], part[1], board.cellSize, board.cellSize);
    });
};
const drawFood = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(food[0], food[1], board.cellSize, board.cellSize);
};
const draw = () => {
    clearSnake();
    drawSnake();
    drawFood();
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
export {};
