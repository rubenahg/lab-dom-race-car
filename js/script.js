window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game

  startButton.addEventListener("click", function () {
    startGame();
  });
  
  restartButton.addEventListener("click", () => location.reload());

  function startGame() {
    console.log("start game");
    game = new Game
    game.start()
  }

  document.addEventListener("keydown", (event) => {
    checkWhichKey(event)
  });

  function checkWhichKey(event) {
    switch(event.key){
      case "ArrowLeft":
        game.player.directionX = - 2 
        break;
      case "ArrowRight":
        game.player.directionX = 2
        break;
      case "ArrowUp":
        game.player.directionY = -2
        break;
      case "ArrowDown":
        game.player.directionY = 2
        break;
      default:
        break;
    }
  }
};
