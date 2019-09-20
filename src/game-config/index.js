export default function({ init, preload, create }) {
  return {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
      init,
      preload,
      create,
    },
  };
}
