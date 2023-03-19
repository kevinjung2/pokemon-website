import Sprite from "./Sprite"

const canvas    :HTMLCanvasElement          = document.getElementById("canvas") as HTMLCanvasElement
const ctx       :CanvasRenderingContext2D   = canvas.getContext('2d')!

const backgroundImage   :CanvasImageSource  = new Image()
const playerImage       :CanvasImageSource  = new Image()

const startCoords       :number[] = [-3000, -1600]
let position            :number[] = startCoords

canvas.width = window.innerWidth
canvas.height = window.innerHeight

backgroundImage.src = "./img/pokemon-map.png"
playerImage.src = "./img/playerDown.png"


function draw(){
    window.requestAnimationFrame(draw)
    ctx.drawImage(backgroundImage, position[0] + window.innerWidth/2, position[1] + window.innerHeight/2)
    ctx.drawImage(playerImage, 
        0,
        0,
        playerImage.width as number/4,
        playerImage.height as number,
        canvas.width/2 - (playerImage.width as number)/8, 
        canvas.height/2 - (playerImage.height as number)/2,
        (playerImage.width as number)/4,
        (playerImage.height as number)
    )
}

backgroundImage.onload = () => {
    draw()
}

window.addEventListener('keydown', e => {
    e.preventDefault()
    switch(e.key){
        case "w":
            console.log("Up")
            break;
        case "ArrowUp":
            console.log("Up")
            break;
        case "a":
            console.log("Left")
            break;
        case "ArrowLeft":
            console.log("Left")
            break;
        case "s":
            console.log("Down")
            break;
        case "ArrowDown":
            console.log("Down")
            break;
        case "d":
            console.log("Right")
            break;
        case "ArrowRight":
            console.log("Right")
            break;
    }
})

window.addEventListener("resize", e => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})
