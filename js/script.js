window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game

  startButton.addEventListener("click", function () {
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game
    game.start()
  }

  document.addEventListener("keydown", (event) => {
    checkWhichKey(event)
    console.log(game.player.directionX)
  });

  function checkWhichKey(event) {
    switch(event.key){
      case "ArrowLeft":
        game.player.directionX -= 1
        break;
      case "ArrowRight":
        game.player.directionX += 1
        break;
      case "ArrowUp":
        game.player.directionY -= 1
        break;
      case "ArrowDown":
        game.player.directionY += 1
        break;
      default:
        break;
    }
  }
};
