"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boundary {
    constructor({ position, ctx }) {
        this.position = position;
        this.ctx = ctx;
        this.width = 48;
        this.height = 48;
    }
    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
exports.default = Boundary;
