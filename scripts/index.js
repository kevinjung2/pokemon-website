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
Sprite_1.default.canvasHeight = canvas.height;
const offset = { x: -3000 + window.innerWidth / 2, y: -1600 + window.innerHeight / 2 };
let position = offset;
const backgroundImage = new Image();
const playerImage = new Image();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
backgroundImage.src = "./img/pokemon-map.png";
playerImage.src = "./img/playerDown.png";
const player = new Sprite_1.default({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    velocity: 0,
    image: playerImage,
    frames: { max: 4 },
    ctx: ctx
});
const background = new Sprite_1.default({
    position: position,
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
        symbol === 1025 && boundaries.push(new Boundary_1.default({ position: { x: j * Boundary_1.default.width + offset.x, y: i * Boundary_1.default.height + offset.y }, ctx: ctx }));
    });
});
// let testBoundry = new Boundary({position: {x: 580, y: 270}, ctx: ctx})
const movables = [background, ...boundaries];
function rectangularCollision({ rect1, rect2 }) {
    return (rect1.position.x + rect1.width >= rect2.position.x &&
        rect1.position.x <= rect2.position.x + rect2.width &&
        rect1.position.y <= rect2.position.y + rect2.height &&
        rect1.position.y + rect1.height >= rect2.position.y);
}
let i = 0;
function draw() {
    window.requestAnimationFrame(draw);
    background.draw();
    boundaries.forEach(boundary => {
        boundary.draw();
        if (rectangularCollision({ rect1: player, rect2: boundary })) {
            console.log("colliding");
        }
    });
    // testBoundry.draw()
    player.draw();
    // console.log(player.position.y, testBoundry.position.y + testBoundry.height)
    // if (rectangularCollision({rect1: player, rect2: testBoundry})){
    //     console.log("colliding")
    // }
    movement.up && (movables.forEach(movable => { movable.position.y += 3; }));
    movement.down && (movables.forEach(movable => { movable.position.y -= 3; }));
    movement.left && (movables.forEach(movable => { movable.position.x += 3; }));
    movement.right && (movables.forEach(movable => { movable.position.x -= 3; }));
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
