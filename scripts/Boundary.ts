export default class Boundary {
    public position : Position
    private ctx     : CanvasRenderingContext2D
    static width    : number = 54
    static height   : number = 54
    public width    : number
    public height   : number

    constructor({position, ctx}: BoundaryProps){
        this.position = position
        this.ctx = ctx
        this.width = 54
        this.height = 54
    }

    draw(){
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}