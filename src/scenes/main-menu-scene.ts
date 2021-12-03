import { CONST } from "../const/const";

export class MainMenuScene extends Phaser.Scene {
  private startKey: Phaser.Input.Keyboard.Key;
  // private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

  constructor() {
    super({
      key: "MainMenuScene",
    });
  }

  init(): void {
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    if (CONST.SCORE > CONST.HIGHSCORE) {
      CONST.HIGHSCORE = CONST.SCORE;
    }
    CONST.SCORE = 0;
  }

  preload(): void {
    this.load.bitmapFont(
      "snakeFont",
      "./assets/font/snakeFont.png",
      "./assets/font/snakeFont.fnt"
    );
  }

  create(): void {
    const play = this.add.bitmapText(
      this.sys.canvas.width / 2 - 28,
      this.sys.canvas.height / 2 - 10,
      "snakeFont",
      "ENTER: PLAY",
      8
    );
    play.x = this.sys.canvas.width / 2 - play.width / 2;

    const snake = this.add.bitmapText(
      this.sys.canvas.width / 2,
      this.sys.canvas.height / 2 - 60,
      "snakeFont",
      "S N A K E",
      16
    );
    snake.x = this.sys.canvas.width / 2 - snake.width / 2;

    // this.add.bitmapText(
    //   this.sys.canvas.width / 2 - 45,
    //   this.sys.canvas.height / 2 + 30,
    //   "snakeFont",
    //   "HIGHSCORE: " + CONST.HIGHSCORE,
    //   8
    // );
  }

  update(): void {
    if (this.startKey.isDown) {
      this.scene.start("GameScene");
    }
  }
}
