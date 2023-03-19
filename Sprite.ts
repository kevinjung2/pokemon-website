interface Position {
    x: number,
    y: number
}

class Sprite{
    public position : Position
    public velocity : number
    public image    : CanvasImageSource
    public ctx      : CanvasRenderingContext2D

    constructor({position, velocity, image, ctx}){
        this.position = position
        this.velocity = velocity
        this.image = image
        this.ctx
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}