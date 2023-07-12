/** @format */

export default class GameLogic {
  constructor(vehicles, player, gameLoop) {
    this.vehicles = vehicles;
    this.player = player;
    this.start = false;
    this.pause = false;
    this.win = false;
    this.loose = false;
    this.level = 1;
    this.changeDir = 2;
    this.lives = player.lives;
    this.playerFurthestPosition = player.incY;
    this.gameLoop = () => gameLoop();

    document.addEventListener("keydown", (event) => {
      this.movePlayer(event.key);
    });
  }

  resetGameBoard() {
    if (!this.start) this.start = true;
    if (this.pause) {
      console.log("resetGameBoard");
      this.pause = !this.pause;
      for (let i = 0; i < this.vehicles.length; i++) {
        this.vehicles[i].posX = 0;
        this.vehicles[i].frame = this.vehicles[i].frameReset;
      }
      this.player.resetPlayer();
      this.playerFurthestPosition = this.player.incY;

      if (this.loose) {
        this.player.lives = this.lives;
        this.player.score = 0;
        this.level = 1;
      }

      this.loose = false;
      this.pause = false;
      this.gameLoop();
    }
  }

  movePlayer(k) {
    switch (k) {
      case "ArrowUp": {
        if (this.player.incY >= 0 && this.start) {
          this.player.incY = this.player.incY - 10;

          if (
            this.player.incY <= this.playerFurthestPosition &&
            !this.pause &&
            this.start
          ) {
            this.playerFurthestPosition = this.player.incY;
            this.player.score = this.player.score + 50;
          }
        }
        break;
      }
      case "ArrowDown": {
        if (
          this.player.incY <=
            this.player.fieldHeight - this.player.playerHeight - 20 &&
          this.start
        ) {
          this.player.incY = this.player.incY + 10;
          if (!this.pause && this.start)
            this.player.score = this.player.score - 20;
        }
        break;
      }
      case "ArrowLeft": {
        if (this.player.incX >= 0 && this.start)
          this.player.incX = this.player.incX - 10;
        break;
      }
      case "ArrowRight": {
        if (
          this.player.incX <=
            this.player.fieldWidth - this.player.playerWidth &&
          this.start
        )
          this.player.incX = this.player.incX + 10;
        break;
      }
      case "Enter": {
        this.resetGameBoard();
        break;
      }
      case "Space": {
        console.log("Space");

        break;
      }
    }

    if (this.player.i === 8) this.changeDir = -2;
    if (this.player.i === -8) this.changeDir = 2;

    this.player.i = this.player.i + this.changeDir;
  }

  playerWin() {
    if (this.player.incY <= 10) {
      console.log("You Won!");
      this.player.score = this.player.score + 1000;
      this.level = this.level + 1;
      for (let i = 0; i < this.vehicles.length; i++) {
        if (this.level <= 2) this.vehicles[i].speedFactor = 2;
        if (this.level > 2 && this.level <= 6) this.vehicles[i].speedFactor = 3;
        if (this.level > 6 && this.level <= 10)
          this.vehicles[i].speedFactor = 4;
        if (this.level > 10) this.vehicles[i].speedFactor = 5;
      }
      this.win = true;
      this.pause = true;
    }
  }

  playerLoose() {
    if (this.player.lives <= 0) {
      console.log("You Lost");
      this.player.score = this.player.score + 1000;
      this.start = false;
      this.loose = true;
      this.pause = true;
    }
  }

  playerHit() {
    for (let i = 0; i < this.vehicles.length; i++) {
      if (
        this.vehicles[i].direction === 1 &&
        this.vehicles[i].posX + this.vehicles[i].vehicleWidth >=
          this.player.playerLeft &&
        this.vehicles[i].posX <= this.player.playerRight &&
        this.vehicles[i].posBottom > this.player.playerHead &&
        this.vehicles[i].posTop < this.player.playerTail
      ) {
        this.player.lives--;
        this.player.score = this.player.score - 100;
        this.pause = true;
        return;
      } else if (
        this.vehicles[i].direction === -1 &&
        this.vehicles[i].posX <= this.player.playerRight &&
        this.vehicles[i].posX + this.vehicles[i].vehicleWidth >=
          this.player.playerLeft &&
        this.vehicles[i].posBottom > this.player.playerHead &&
        this.vehicles[i].posTop < this.player.playerTail
      ) {
        this.player.lives--;
        this.player.score = this.player.score - 100;
        this.pause = true;
        return;
      } else {
        this.pause = false;
      }
    }
  }
}
