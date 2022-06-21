
var GamePlay = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "GamePlay" });
    },
    init: function(data) {
         this.message = data.message;
    },
    preload: function() {
                //this.load.audio('gunshot','assets/gunshot.mp3');
                this.load.image('play', 'assets/play.png');
                this.load.audio('gunshotlong','assets/gunshotlong.mp3');
                this.load.audio('background','assets/backgroundMusic.mp3');
                this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');
                this.load.image('sky', 'assets/space3.png');
                this.load.image('logo', 'assets/phaser3-logo.png');
                this.load.image('red', 'assets/red.png');
                this.load.image('westback', 'assets/Desertbackground.png');
                this.load.image('ground', 'assets/platform.png');
                this.load.image('cactus', 'assets/cactus.png');
                this.load.image('box', 'assets/box.png');
                this.load.image('ammo', 'assets/ammo.png');
                this.load.image('barrels', 'assets/barrels.png');
                this.load.image('Explosivs', 'assets/Explosivs.png');
                this.load.image('barrels2', 'assets/Barrels_2.png');
                
        
                
                
                this.load.path = 'assets/SherifShoot/';
        
                this.load.image('1', '1.png');
                this.load.image('2', '2.png');
                this.load.image('3', '3.png');
                this.load.image('4', '4.png');
                this.load.image('5', '5.png');
                this.load.image('6', '6.png');
                this.load.image('7', '7.png');
                this.load.image('8', '8.png');
                this.load.image('9', '9.png');
                this.load.image('10', '10.png');
                this.load.image('11', '11.png');
                this.load.image('12', '12.png');
                this.load.image('13', '13.png');
                this.load.image('14', '14.png');
                this.load.image('15', '15.png');
                this.load.image('16', '16.png');
                this.load.image('17', '17.png');
                this.load.image('18', '18.png');
                this.load.image('19', '19.png');
        
                this.load.path = 'assets/Sherifdead/';
        
                this.load.image('21', '1.png');
                this.load.image('22', '2.png');
                this.load.image('23', '3.png');
                this.load.image('24', '4.png');
                this.load.image('25', '5.png');
                this.load.image('26', '6.png');
                this.load.image('27', '7.png');
                this.load.image('28', '8.png');
                this.load.image('29', '9.png');
                this.load.image('30', '10.png');
                this.load.image('31', '11.png');

                
    },
    create: function() {
        
    
            back = this.add.image(this.scale.width / 2, this.scale.height / 2, 'westback');
            back.setDisplaySize(this.scale.width,this.scale.height);
            ammo = this.add.image(150,510,'ammo');
            barrels = this.add.image(250,510,'barrels');
            explosivs = this.add.image(this.scale.width / 3,this.scale.height - 75,'Explosivs');
            //barrels2 = this.add.image(310,510,'barrels2');
          //  this.add.image(380,400,'box');
            this.add.image(this.scale.width,510,'ammo');
            this.add.image(this.scale.width - 60,500,'ammo');
            cactus = this.add.image(this.scale.width - 140,this.scale.height - 75,'cactus').setScale(.75); 
    
            //animation for Sherif1 dead/////
            this.anims.create({
                key: 'dead',
                frames: [
                    { key: '21' },
                    { key: '22' },
                    { key: '23' },
                    { key: '24' },
                    { key: '25' },
                    { key: '26' },
                    { key: '27' },
                    { key: '28' },
                    { key: '29' },
                    { key: '30' },
                    { key: '31', duration: 50 }
                ],
                frameRate: 5,
                repeat: -1
            });
    
            GG = this.add.sprite(160, 350, '1')
                .play('dead');
                GG.flipX=true;
    
    
            //animation for Sheriff2 shooter/////
            this.anims.create({
                key: 'snooze',
                frames: [
                    { key: '1' },
                    { key: '2' },
                    { key: '3' },
                    { key: '4' },
                    { key: '5' },
                    { key: '6' },
                    { key: '7' },
                    { key: '8' },
                    { key: '9' },
                    { key: '10' },
                    { key: '11' },
                    { key: '12' },
                    { key: '13' },
                    { key: '14' },
                    { key: '15' },
                    { key: '16' },
                    { key: '17' },
                    { key: '18' },
                    { key: '19', duration: 50 }
                ],
                frameRate: 18,
                repeat: -1
            });
    
            this.add.sprite(700, 360, '1')
                .play('snooze');
    
    
            // text
    
          //  var container = this.add.container(400, 100);
    
            //const text = this.add.bitmapText(100, 300, 'desyrel', 'CowBoys', 38)
              //  .setOrigin(0.5, 0.5);
    
    
    /*
    
            var text = this.add.text(0, 0, 'CowBoys');
            text.font = "Press Start 2P";
            text.setColor("#FFD700");
            text.fontStyle = "strong";  
            text.setOrigin(0.5, 0.5);
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
            //button start
            const gamePlayButton = this.add.image(520, 510, 'play');
            gamePlayButton.setScale(.15);
            gamePlayButton.setInteractive();
            gamePlayButton.on('pointerdown', () => {
                this.scene.start("GamePlay",{"message": "Game Play"});
            });
            */

    },
    update: function() {}
});