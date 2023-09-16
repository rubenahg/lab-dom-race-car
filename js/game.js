class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEnd = document.getElementById("game-end")
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
          )
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
    }

    start(){
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        this.startScreen.style.display = "none"
        this.gameScreen.style.display = "block"
        this.gameLoop()
    }

    gameLoop(){
        if(!this.gameIsOver){
            this.update()
            this.gameLoop()
        } else {
            return
        }
    }
    
    update(){
        this.player.move()
    }

    
}