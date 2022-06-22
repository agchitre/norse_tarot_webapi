
var gameOptions = {

    // slices (prizes) placed in the wheel
    slices: 8,

    // prize names, starting from 12 o'clock going clockwise
    slicePrizes: ["Dead", "Dead", "Draw", "Win", "Dead", "Win", "Win", "Dead"],

    // wheel rotation duration, in milliseconds
    rotationTime: 3000
}


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
                this.load.image("wheel", "assets/wheel.png");
                this.load.image("pin", "assets/pin.png");
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

            //*********GAME CODE****** */
            //************************* */
                // adding the wheel in the middle of the canvas
            this.wheel = this.add.sprite(game.config.width / 2, game.config.height -420, "wheel").setScale(.25);

            // adding the pin in the middle of the canvas
            this.pin = this.add.sprite(game.config.width / 2, game.config.height -420, "pin").setScale(.25);

            // adding the text field
            this.prizeText = this.add.text(game.config.width / 2, game.config.height - 500, "Spin the wheel", {
                font: "bold 13px Arial",
                align: "center",
                color: "red"
            });
 
        // center the text
        this.prizeText.setOrigin(0.5);

            // the game has just started = we can spin the wheel
            this.canSpin = true;

            // waiting for your input, then calling "spinWheel" function
            this.input.on("pointerdown", this.spinWheel, this);

    },
    
        // function to spin the wheel
        spinWheel(){

            // can we spin the wheel?
            if(this.canSpin){
    
                // resetting text field
                this.prizeText.setText("");
    
                // the wheel will spin round from 2 to 4 times. This is just coreography
                var rounds = Phaser.Math.Between(2, 4);
    
                // then will rotate by a random number from 0 to 360 degrees. This is the actual spin
                var degrees = Phaser.Math.Between(0, 360);
    
                // before the wheel ends spinning, we already know the prize according to "degrees" rotation and the number of slices
                var prize = gameOptions.slices - 1 - Math.floor(degrees / (360 / gameOptions.slices));
    
                // now the wheel cannot spin because it's already spinning
                this.canSpin = false;
    
                // animation tweeen for the spin: duration 3s, will rotate by (360 * rounds + degrees) degrees
                // the quadratic easing will simulate friction
                this.tweens.add({
    
                    // adding the wheel to tween targets
                    targets: [this.wheel],
    
                    // angle destination
                    angle: 360 * rounds + degrees,
    
                    // tween duration
                    duration: gameOptions.rotationTime,
    
                    // tween easing
                    ease: "Cubic.easeOut",
    
                    // callback scope
                    callbackScope: this,
    
                    // function to be executed once the tween has been completed
                    onComplete: function(tween){
    
                        // displaying prize text
                        this.prizeText.setText(gameOptions.slicePrizes[prize]);
    
                        // player can spin again
                        this.canSpin = true;
                    }
                });
            }
        }
    ,
    update: function() {}
});