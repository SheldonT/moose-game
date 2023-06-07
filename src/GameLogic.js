/** @format */

export default class GameLogic {
  constructor(vehicles, player) {
    this.vehicles = vehicles;
    this.player = player;
    this.pause = false;
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
        this.pause = true;
        return;
      } else {
        this.pause = false;
      }
    }
  }
}
