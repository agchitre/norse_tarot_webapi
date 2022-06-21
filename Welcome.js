var Welcome = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Welcome" });
    },
    init: function() {
       
    },
    preload: function() {
        this.load.image('westbackGame', 'assets/background.jpeg');
        this.load.image('play', 'assets/play.png');
        this.load.image('fence', 'assets/fence.png');
        this.load.image('box', 'assets/box.png');
        this.load.audio('gunshotlong','assets/gunshotlong.mp3');
        this.load.audio('background','assets/backgroundMusic.mp3');
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
    },
    create: function() {


        /*this.music =  this.sound.add('gunshotlong', {
            volume: 0.2,
            loop: false
            });
            this.music.play();*/
    
            this.music =  this.sound.add('background', {
            volume: 0.2,
            loop: true
            });
            this.music.play();


       backgroundGame=  this.add.image(this.scale.width / 2, this.scale.height / 2, 'westbackGame');
       backgroundGame.setDisplaySize(this.scale.width,this.scale.height);
        var text = this.add.text(
            640, 
            360, 
            this.message, 
            {
                fontSize: 50,
                color: "#000000",
                fontStyle: "bold"
            }
        ).setOrigin(0.5);

        var container = this.add.container(400, 100);
        var text = this.add.text(0, 0, 
            'Cowboys & Cowboys', 
            {
            fontSize: 20,
            color: "#000000",
            fontStyle: "bold"
            }
            ).setOrigin(0.5);
  //      text.font = "Press Start 2P";
 //       text.setColor("#FFD700");
 //       text.fontStyle = "strong";  
//        text.setOrigin(0.5, 0.5);
        container.add(text);
        container.setScale(3);

        this.tweens.add({
            targets: container,
            x: container.x + 100,
            ease: 'Power1',
            duration: 5000,
            delay: 400,
            yoyo: true,
            repeat: -1
        });

        back_text = this.add.text(10, 10, 'Try, Alexa play a game!', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        back_text.setColor("#FFFAFA");
        fence = this.add.image(this.scale.width / 2,this.scale.height - 95,'fence');
       
        //button start
        const gamePlayButton = this.add.image(this.scale.width / 2, this.scale.height - 90, 'play');
        gamePlayButton.setScale(.15);
        gamePlayButton.setInteractive();
        gamePlayButton.on('pointerdown', () => {
            this.scene.start("GamePlay",{"message": "Game Play"});
        });
    },
    update: function() {}
});