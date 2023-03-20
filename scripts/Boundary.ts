export default class Boundary {
    public position : Position
    private ctx     : CanvasRenderingContext2D
    readonly width   : number
    readonly height  : number

    constructor({position, ctx}: BoundaryProps){
        this.position = position
        this.ctx = ctx
        this.width = 48
        this.height = 48
    }

    draw(){
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}