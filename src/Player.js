/** @format */

export default class Player {
  constructor(lives, fieldWidth, fieldHeight) {
    this.i = 0;

    this.fieldWidth = fieldWidth;
    this.fieldHeight = fieldHeight;

    this.playerLeft = 0; //left side
    this.playerRight = 0;
    this.playerHead = 0; //top of the head
    this.playerTail = 0; //the butt

    this.mooseBody = new Image();
    this.mooseFeet = new Image();

    this.lives = 0; //number of lives given to the user, defined in the constructor
    this.livesLeft = 0; //number of lives left. Counted during game play
    ///////////////////////////////////////////////////////////////////////

    this.livesLeft = lives;
    this.lives = lives;

    this.mooseBody.src = "src/assets/moose.svg";
    //this.mooseBody.addEventListener('load', () => {}, false);

    this.mooseFeet.src = "src/assets/moose-legs.svg";
    //this.mooseFeet.addEventListener('load', () => {}, false);

    this.playerHeight = this.fieldHeight * 0.15;
    this.playerWidth = this.playerHeight * 0.42;

    this.incX = fieldWidth / 2 - this.playerWidth / 2;
    this.incY = fieldHeight - this.playerHeight;
  }

  resetPlayer() {
    this.incX = this.fieldWidth / 2;
    this.incY = 0;
    this.i = 0;
  }

  drawPlayer(ctx) {
    //player height and width in relation to field size.
    //this.playerWidth = this.fieldWidth * 0.03;
    //this.playerHeight = this.fieldHeight * 0.15;
    //player foot size in relation to player width
    const footSize = this.playerWidth * 0.4; //10

    //this.playerLeft = this.fieldWidth / 2 + this.incX - this.playerWidth / 2; //left side
    //this.playerRight = this.fieldWidth / 2 + (this.incX + this.playerWidth / 2);
    //this.playerHead = this.fieldHeight / 2 + this.incY - 75; //top of the head
    //this.playerTail =
    //this.fieldHeight / 2 + this.incY + this.playerHeight / 2 - 20; //the butt

    ctx.save(); //save the current canvas state

    ctx.translate(this.incX, this.incY); //move canvas over to change player position.

    //draw moose feet
    ctx.drawImage(this.mooseFeet, -5, 25 + this.i, footSize, footSize); //feet x and y positions are relative to the width and height of
    ctx.drawImage(this.mooseFeet, 0, 50 - this.i, footSize, footSize);

    ctx.drawImage(this.mooseFeet, 24, 25 + this.i, footSize, footSize);
    ctx.drawImage(this.mooseFeet, 19, 50 + this.i, footSize, footSize);

    ctx.drawImage(this.mooseBody, 0, 0, this.playerWidth, this.playerHeight);

    ctx.restore(); //restore saved canvas state. Ready for next draw.
  }
}
