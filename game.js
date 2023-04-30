class HomeScene extends Phaser.Scene {
  constructor() {
    super("HomeScene");
  }

  preload() {
    this.load.image("lisa", "avatar/1234-full/lisaReal.png");
    this.load.image("jisoo", "avatar/1234-full/jisooReal.png");
    this.load.image("jennie", "avatar/1234-full/jennieReal.png");
    this.load.image("rose", "avatar/1234-full/roseReal.png");
    this.load.image("blackpink", "bak/pinkChella.png");
  }

  create() {
    this.add
      .image(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 250,
        "blackpink"
      )
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("GameScene");
      });

    const lisaButton = this.add
      .image(0, 0, "lisa")
      .setInteractive()
      .setOrigin(0.5);
    const jisooButton = this.add
      .image(0, 0, "jisoo")
      .setInteractive()
      .setOrigin(0.5);
    const jennieButton = this.add
      .image(0, 0, "jennie")
      .setInteractive()
      .setOrigin(0.5);
    const roseButton = this.add
      .image(0, 0, "rose")
      .setInteractive()
      .setOrigin(0.5);

    const buttonSpacing = 20;
    const totalButtonWidth =
      lisaButton.width +
      buttonSpacing +
      jisooButton.width +
      buttonSpacing +
      jennieButton.width +
      buttonSpacing +
      roseButton.width;
    const startX = (this.game.config.width - totalButtonWidth) / 2;
    const startY = this.game.config.height - lisaButton.height / 2 - 20;

    lisaButton.setPosition(startX + lisaButton.width / 2, startY);
    jisooButton.setPosition(
      lisaButton.x +
        lisaButton.width / 2 +
        buttonSpacing +
        jisooButton.width / 2,
      startY
    );
    jennieButton.setPosition(
      jisooButton.x +
        jisooButton.width / 2 +
        buttonSpacing +
        jennieButton.width / 2,
      startY
    );
    roseButton.setPosition(
      jennieButton.x +
        jennieButton.width / 2 +
        buttonSpacing +
        roseButton.width / 2,
      startY
    );

    lisaButton.on("pointerdown", () => {
      window.alert("Pretty Pretty Savage");
      window.open("https://www.youtube.com/watch?v=nG4blDHA1o4");
      // this.scene.start("GameScene", { character: "lisa" });
    });

    jisooButton.on("pointerdown", () => {
      window.alert("BlackPink in your AREA");
      window.open("https://www.youtube.com/watch?v=mxOzgCojM6E");
      // this.scene.start("GameScene", { character: "jisoo" });
    });

    jennieButton.on("pointerdown", () => {
      window.alert("Welcome to Coachellaaaaaaaaaaaaa");
      window.open("https://www.youtube.com/watch?v=ZsqMuTQglvU");
      // this.scene.start("GameScene", { character: "jennie" });
    });

    roseButton.on("pointerdown", () => {
      window.alert("Hopefully not busy at Coachella next year");
      window.open("https://www.youtube.com/watch?v=6QnMgd0reLw");
      // this.scene.start("GameScene", { character: "rose" });
    });
  }
}

class GameScene extends Phaser.Scene {
  constructor() {
    super("GameScene"); //any time
  }

  preload() {
    this.load.image("blackpink", "avatar/1234-full");
  }

  create() {
    g.number = 10;
    g.arr = [];

    setTimeout(() => {
      for (let i = 0; i < g.number; i++) {
        g.circle = this.add.circle(
          Math.random() * config.width,
          Math.random() * config.height,
          30,
          randomColor()
        );
        this.physics.add.existing(g.circle);
        g.circle.body.setVelocity(randomVelocity(), randomVelocity());
        g.circle.body.setCollideWorldBounds(true, 1, 1);
        g.arr.push(g.circle);
      }
    }, 10);
    setTimeout(() => {
      for (let i = 0; i < g.number; i++) {
        g.circle = this.add.circle(
          Math.random() * config.width,
          Math.random() * config.height,
          10,
          randomColor()
        );
        this.physics.add.existing(g.circle);
        g.circle.body.setVelocity(randomVelocity(), randomVelocity());
        g.circle.body.setCollideWorldBounds(true, 1, 1);
        g.arr.push(g.circle);
      }
    }, 10);
    setTimeout(() => {
      for (let i = 0; i < g.number; i++) {
        g.circle = this.add.circle(
          Math.random() * config.width,
          Math.random() * config.height,
          5,
          randomColor()
        );
        this.physics.add.existing(g.circle);
        g.circle.body.setVelocity(randomVelocity(), randomVelocity());
        g.circle.body.setCollideWorldBounds(true, 1, 1);
        g.arr.push(g.circle);
      }
    }, 10);

    setInterval(() => {
      for (let i = 0; i < g.arr.length; i++) {
        g.arr[i].fillColor = randomColor();
      }
    }, 500);
  }

  update() {}
}

function randomVelocity() {
  let choice = Math.floor(Math.random() * 2);
  if (choice === 1) {
    return Math.floor(Math.random() * 700) + 100;
  } else {
    return -Math.floor(Math.random() * 700) - 100;
  }
}

function randomColor() {
  let d = "0123456789abcdef";
  let c = "";
  for (let i = 0; i < 6; i++) {
    c += d[Math.floor(Math.random() * 16)];
  }
  return "0x" + c;
}

window.addEventListener("resize", () => {
  window.location.reload();
});

class IntroScene extends Phaser.Scene {
  constructor() {
    super("IntroScene");
  }

  preload() {
    this.load.image("blackpink", "avatar/character2.png");
  }

  create() {
    const blackpink = this.add.image(0, 0, "blackpink").setOrigin(0.5);
    blackpink.x = this.cameras.main.centerX;
    blackpink.y = this.cameras.main.centerY;

    this.time.delayedCall(2000, () => {
      this.scene.start("GameScene");
    });
  }
}

const g = {};

const config = {
  type: Phaser.AUTO,
  height: window.innerHeight,
  width: window.innerWidth,
  backgroundColor: `#000000`,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: false,
    },
  },
  scene: [HomeScene, GameScene],
};

const game = new Phaser.Game(config);
