/** @format */

export default class ScoreBoard {
  constructor(font, fontSize, gameFieldWidth) {
    this.font = font;
    this.gameFieldWidth = gameFieldWidth;
    this.fontSize = fontSize;

    this.mooseIcon = new Image();
    this.mooseIcon.src = "src/assets/Moose-icon-blk.svg";
  }

  drawScoreBoard(ctx, playerLives) {
    ctx.font = `${this.fontSize}px ${this.font}`;
    ctx.fillStyle = "#000000";
    ctx.fillText(
      ` x ${playerLives}`,
      this.gameFieldWidth - ctx.measureText(` x ${playerLives}`).width - 30,
      this.fontSize + 10
    );

    ctx.drawImage(
      this.mooseIcon,
      this.gameFieldWidth -
        ctx.measureText(` x ${playerLives}`).width -
        30 -
        45,
      10,
      45,
      30
    );
  }
}
