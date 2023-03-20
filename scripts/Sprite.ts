
export default class Sprite{
    public position : Position
    public velocity : number
    public image    : CanvasImageSource
    public ctx      : CanvasRenderingContext2D

    constructor({position, velocity, image, ctx}: SpriteParams){
        this.position = position
        this.velocity = velocity
        this.image = image
        this.ctx = ctx
    }

    draw() {
        this.ctx.drawImage(this.image, this.position.x + window.innerWidth/2, this.position.y + window.innerHeight/2)
    }
}