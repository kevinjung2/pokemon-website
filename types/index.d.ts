interface Position {
    x: number,
    y: number
}

interface SpriteParams {
    position :Position, 
    velocity :number, 
    image    :CanvasImageSource, 
    ctx      :CanvasRenderingContext2D
}