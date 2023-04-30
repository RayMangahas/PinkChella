// class IntroScene extends Phaser.Scene {
//   constructor() {
//     super("IntroScene");
//   }

//   preload() {
//     this.load.image("blackpink", "avatar/character2.png");
//   }

//   create() {
//     const blackpink = this.add.image(0, 0, "blackpink").setOrigin(0.5);
//     blackpink.x = this.cameras.main.centerX;
//     blackpink.y = this.cameras.main.centerY;

//     this.time.delayedCall(2000, () => {
//       this.scene.start("GameScene");
//     });
//   }
// }

// // const config = {
// //   type: Phaser.AUTO,
// //   height: window.innerHeight,
// //   width: window.innerWidth,
// //   backgroundColor: `#000000`,
// //   physics: {
// //     default: "arcade",
// //     arcade: {
// //       gravity: { y: 0, x: 0 },
// //       debug: false,
// //     },
// //   },
// //   scene: [IntroScene, HomeScene, GameScene],
// // };

// const game = new Phaser.Game(config);
