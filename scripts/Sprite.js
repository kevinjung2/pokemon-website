"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sprite {
    constructor({ position, velocity, image, ctx }) {
        this.position = position;
        this.velocity = velocity;
        this.image = image;
        this.ctx = ctx;
    }
    draw() {
        this.ctx.drawImage(this.image, this.position.x + window.innerWidth / 2, this.position.y + window.innerHeight / 2);
    }
}
exports.default = Sprite;
