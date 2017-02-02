var mainState = {
  preload: function() {
    // Load the image
    game.load.image('logo', 'assets/pic.png');
  },
  create: function() {
    // Display the image on the screen
    myLogo = game.add.sprite(0, 0, 'logo');
  },
  update: function() {
    // Increment the angle of the sprite by 1, 60 times per seconds
    // myLogo.angle += 2;
    myLogo.x += 3;
    if (myLogo.x > 400) {
      myLogo.x = 0;
      myLogo.y += 10;
    }
  }
};

var game = new Phaser.Game(400, 300, Phaser.AUTO, 'gameDiv');
var myLogo;
game.state.add('main', mainState);
game.state.start('main');
