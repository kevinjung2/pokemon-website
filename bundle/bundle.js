(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
class Sprite {
    constructor({ position, velocity, image, ctx }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.ctx = ctx;
    }
    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y);
    }
}

},{}],2:[function(require,module,exports){
"use strict";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const backgroundImage = new Image();
const playerImage = new Image();
const startCoords = [-3000, -1600];
let position = startCoords;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
backgroundImage.src = "./img/pokemon-map.png";
playerImage.src = "./img/playerDown.png";
function draw() {
    window.requestAnimationFrame(draw);
    ctx.drawImage(backgroundImage, position[0] + window.innerWidth / 2, position[1] + window.innerHeight / 2);
    ctx.drawImage(playerImage, 0, 0, playerImage.width / 4, playerImage.height, canvas.width / 2 - playerImage.width / 8, canvas.height / 2 - playerImage.height / 2, playerImage.width / 4, playerImage.height);
}
backgroundImage.onload = () => {
    draw();
};
window.addEventListener('keydown', e => {
    e.preventDefault();
    switch (e.key) {
        case "w":
            console.log("Up");
            break;
        case "ArrowUp":
            console.log("Up");
            break;
        case "a":
            console.log("Left");
            break;
        case "ArrowLeft":
            console.log("Left");
            break;
        case "s":
            console.log("Down");
            break;
        case "ArrowDown":
            console.log("Down");
            break;
        case "d":
            console.log("Right");
            break;
        case "ArrowRight":
            console.log("Right");
            break;
    }
});
window.addEventListener("resize", e => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

},{}]},{},[2,1]);
