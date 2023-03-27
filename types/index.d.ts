interface Position {
    x: number,
    y: number
}

interface Frames {
    max     :number,
}

interface SpriteParams {
    position :Position, 
    velocity :number, 
    image    :HTMLImageElement,
    frames?   :Frames, 
    ctx      :CanvasRenderingContext2D
}

interface Movement {
    up:     boolean,
    left:   boolean,
    down:   boolean,
    right:  boolean
}

interface BoundaryProps {
    position :Position, 
    ctx      :CanvasRenderingContext2D
}