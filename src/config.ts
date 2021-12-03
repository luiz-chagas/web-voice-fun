import { BootScene } from "./scenes/boot-scene";
import { GameScene } from "./scenes/game-scene";
import { MainMenuScene } from "./scenes/main-menu-scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: "Snake",
  url: "https://github.com/luiz-chagas/web-voice-fun",
  version: "1.0",
  width: 250,
  height: 250,
  zoom: 2,
  type: Phaser.AUTO,
  parent: "game",
  scene: [BootScene, MainMenuScene, GameScene],
  input: {
    keyboard: true,
    mouse: false,
    touch: false,
    gamepad: false,
  },
  backgroundColor: "#000000",
  render: { pixelArt: false, antialias: false },
};
