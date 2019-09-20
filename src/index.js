import * as Phaser from 'phaser';
import GameScene from './scenes/gamescene';

var config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  roundPixels: true,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
    },
  },
  zoom: 5,
  scene: [GameScene],
};

export default new Phaser.Game(config);
