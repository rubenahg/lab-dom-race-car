class Game {
    constructor(){
        this.startScreen = document.getElementById("game-intro")
        this.gameScreen = document.getElementById("game-screen")
        this.gameEnd = document.getElementById("game-end")
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            50,
            75,
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
        this.intervalID = setInterval(() => {
            if (!this.gameIsOver) {
                this.update();
            } else {
                clearInterval(this.intervalID);
            }
        }, 1000 / 60);
    }
    
    update(){
        this.player.move()

        if(Math.random() > 0.975){
            let newObstacle = new Obstacle(this.gameScreen)
            this.obstacles.push(newObstacle)
        }

        for(let i = 0; i < this.obstacles.length; i++){
            if(this.obstacles[i].top > 700){
                this.obstacles.splice([i], 1)
                this.score += 1
            } else if(this.player.didCollide(this.obstacles[i])) {
                this.obstacles[i].element.remove()
                this.obstacles.splice([i], 1)
                this.lives -= 1
                this.lives <= 0 ? this.endGame() : "";
            } else {
                this.obstacles[i].move()
            }
        }

        // Removes all images from the HTML that are out of view

        let allImages = document.querySelectorAll("#game-screen img")
        for(let i = 0; i < allImages.length; i++){
            if(allImages[i].offsetTop === 702){
                allImages[i].remove()
            }
        }
    }

    endGame(){
        this.gameIsOver = true;

        for(let i = 0; i < this.obstacles.length; i++){
            this.obstacles[i].element.remove()
        }
        this.player.element.remove()
        this.gameScreen.style.display = "none"
        this.gameEnd.style.display = "block"
    }
}