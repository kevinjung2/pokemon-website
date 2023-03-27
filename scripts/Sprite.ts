
export default class Sprite{
    public position : Position
    public velocity : number
    public image    : HTMLImageElement
    public frames   : Frames
    public ctx      : CanvasRenderingContext2D
    public width    : number
    public height   : number

    static canvasHeight  :number = 0

    constructor({position, velocity, image, frames = {max: 1}, ctx}: SpriteParams){
        this.position = position
        this.velocity = velocity
        this.image = image
        this.frames = frames
        this.ctx = ctx
        this.width = this.image.width / this.frames.max
        this.height = this.image.height
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        
    }

    draw() {
        if(this.width == 0 || this.height == 0){
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
        }
        this.ctx.drawImage(this.image, 
            0,
            0,
            this.width,
            this.height,
            this.position.x, 
            this.position.y,
            this.width,
            this.height
        )
    }
}