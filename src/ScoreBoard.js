/** @format */

export default class ScoreBoard {
  constructor(font, fontSize, gameFieldWidth) {
    this.font = font;
    this.gameFieldWidth = gameFieldWidth;
    this.fontSize = fontSize;

    this.mooseIcon = new Image();
    this.mooseIcon.src = "src/assets/Moose-icon-blk.svg";
  }

  drawScoreBoard(ctx, playerLives, score, level) {
    ctx.font = `${this.fontSize}px ${this.font}`;
    ctx.fillStyle = "#000000";

    ctx.fillText(`Level ${level}`, 50, this.fontSize + 10);
    ctx.fillText(score, 300, this.fontSize + 10);
    ctx.fillText(
      ` x ${playerLives}`,
      this.gameFieldWidth - ctx.measureText(` x ${playerLives}`).width - 50,
      this.fontSize + 10
    );

    ctx.drawImage(
      this.mooseIcon,
      this.gameFieldWidth - ctx.measureText(` x ${playerLives}`).width - 95,
      10,
      45,
      30
    );
  }
}
