"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Boundary {
    constructor({ position, ctx }) {
        this.position = position;
        this.ctx = ctx;
        this.width = 54;
        this.height = 54;
    }
    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
Boundary.width = 54;
Boundary.height = 54;
exports.default = Boundary;
