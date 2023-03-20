"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sprite_1 = __importDefault(require("./Sprite"));
const collisions_1 = require("./collisions");
const Boundary_1 = __importDefault(require("./Boundary"));
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const startCoords = [-3000, -1600];
let position = startCoords;
const backgroundImage = new Image();
const playerImage = new Image();
const background = new Sprite_1.default({
    position: { x: position[0], y: position[1] },
    velocity: 0,
    image: backgroundImage,
    ctx: ctx
});
const movement = {
    up: false,
    left: false,
    down: false,
    right: false
};
const collisionsMap = [];
const boundaries = [];
for (let i = 0; i < collisions_1.collisions.length; i += 70) {
    collisionsMap.push(collisions_1.collisions.slice(i, i + 70));
}
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        boundaries.push(new Boundary_1.default({ position: { x: j * 48, y: i * 48 }, ctx: ctx }));
    });
});
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
backgroundImage.src = "./img/pokemon-map.png";
playerImage.src = "./img/playerDown.png";
function draw() {
    window.requestAnimationFrame(draw);
    background.draw();
    ctx.drawImage(playerImage, 0, 0, playerImage.width / 4, playerImage.height, canvas.width / 2 - playerImage.width / 8, canvas.height / 2 - playerImage.height / 2, playerImage.width / 4, playerImage.height);
    movement.up && (background.position.y += 3);
    movement.down && (background.position.y -= 3);
    movement.left && (background.position.x += 3);
    movement.right && (background.position.x -= 3);
}
backgroundImage.onload = () => {
    draw();
};
window.addEventListener('keydown', e => {
    switch (e.key) {
        case "w":
            movement.up = true;
            break;
        case "ArrowUp":
            e.preventDefault();
            movement.up = true;
            break;
        case "a":
            movement.left = true;
            break;
        case "ArrowLeft":
            e.preventDefault();
            movement.left = true;
            break;
        case "s":
            movement.down = true;
            break;
        case "ArrowDown":
            e.preventDefault();
            movement.down = true;
            break;
        case "d":
            movement.right = true;
            break;
        case "ArrowRight":
            e.preventDefault();
            movement.right = true;
            break;
    }
});
window.addEventListener('keyup', e => {
    switch (e.key) {
        case "w":
            movement.up = false;
            break;
        case "ArrowUp":
            movement.up = false;
            break;
        case "a":
            movement.left = false;
            break;
        case "ArrowLeft":
            movement.left = false;
            break;
        case "s":
            movement.down = false;
            break;
        case "ArrowDown":
            movement.down = false;
            break;
        case "d":
            movement.right = false;
            break;
        case "ArrowRight":
            movement.right = false;
            break;
    }
});
window.addEventListener("resize", e => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
