/** @format */

import vehiclePool from "./vehiclePool.js";
//const { vehiclePool } = require("./vehiclePool.js");

export default class Vehicle {
  constructor(d, gfWidth, gfHeight) {
    this.frameReset = 0;
    this.speedFactor = 1;
    this.speed = 0;
    this.frame = gfWidth; //current frame count
    this.vehicleRange = gfWidth;
    this.screenX = gfWidth;
    this.screenY = gfHeight;
    this.posX = 0; //define the X position of the front of the vehicle
    this.posTop = 0;
    this.posBottom = 0;
    this.vehicleID = 0;
    this.vehicleImg = new Image();

    let id = this.getRandomID();

    this.direction = d;

    this.vehicleImg.src = vehiclePool[id].vehicle;

    this.vehicleWidth = vehiclePool[id].width;
    this.vehicleHeight = vehiclePool[id].height;
  }

  getRandomID() {
    const len = vehiclePool.length; //get the length of the array holding the pool of fortune messages
    let id = Math.floor(Math.random() * len);

    return id;
  }

  vehicleStartPosition() {
    if (this.direction === 1) {
      this.posX = this.frame;
    }

    if (this.direction === -1) {
      this.posX = this.screenX - 2 * this.vehicleWidth - this.frame;
    }
  }

  drawVehicle(c, startY) {
    this.posTop = startY;
    this.posBottom = startY + this.vehicleHeight;

    this.vehicleStartPosition();
    c.fillStyle = "#000000";

    c.save();

    if (this.direction === 1) {
      c.translate(this.posX, startY);
      //making the height and width of the vehicle proportional to screen size.
      c.drawImage(this.vehicleImg, 0, 0, this.vehicleWidth, this.vehicleHeight);
    }

    if (this.direction === -1) {
      c.translate(
        this.screenX - this.vehicleWidth - this.frame,
        startY + this.vehicleHeight
      );

      c.rotate(Math.PI);

      c.drawImage(this.vehicleImg, 0, 0, this.vehicleWidth, this.vehicleHeight);
    }
    c.restore();

    if (this.frame >= this.frameReset + this.vehicleRange) {
      //reset frame count every "vehicleRange" frames
      let id = this.getRandomID();

      this.vehicleWidth = (vehiclePool[id].width / 1500) * this.screenX;
      this.vehicleHeight = (vehiclePool[id].height / 800) * this.screenY;

      this.vehicleRange = this.screenX + this.vehicleWidth;

      this.frameReset = this.frame - this.vehicleRange;
      this.speed = Math.floor(Math.random() * 5) + this.speedFactor; //change the speed of the vehicle
      this.frame = (this.vehicleWidth + 100) * -1;

      this.vehicleImg.src = vehiclePool[id].vehicle;
    } else {
      this.frame = this.frame + this.speed; //increment frame by carSpeed.
    }
  }
}
