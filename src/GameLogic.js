/** @format */

export default class GameLogic {
  constructor(vehicles, player, gameLoop) {
    this.vehicles = vehicles;
    this.player = player;
    this.start = false;
    this.pause = false;
    this.win = false;
    this.level = 1;
    this.changeDir = 2;
    this.gameLoop = () => gameLoop();

    document.addEventListener("keydown", (event) => {
      this.movePlayer(event.key);
    });
  }

  resetGameBoard() {
    if (this.pause) {
      console.log("resetGameBoar");
      this.pause = !this.pause;
      for (let i = 0; i < this.vehicles.length; i++) {
        this.vehicles[i].posX = 0;
        this.vehicles[i].frame = this.vehicles[i].frameReset;
        console.log(this.vehicles[i].posX);
      }
      this.player.resetPlayer();
      if (this.player.lives <= 0) {
        this.player.lives = 3;
        this.player.score = 0;
        this.start = false;
      }
      this.gameLoop();
    }
  }

  movePlayer(k) {
    switch (k) {
      case "ArrowUp": {
        if (this.player.incY >= 0 && this.start) {
          this.player.incY = this.player.incY - 10;
          if (!this.pause && this.start)
            this.player.score = this.player.score + 50;
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
        if (!this.start) {
          this.start = true;
        }
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
      this.win = true;
      this.pause = true;
    }
  }

  playerHit() {
    for (let i = 0; i < this.vehicles.length; i++) {
      console.log(this.vehicles[i].posX);
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
