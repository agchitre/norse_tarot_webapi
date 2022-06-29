
var gameOptions = {

    // slices (prizes) placed in the wheel
    slices: 8,

    // prize names, starting from 12 o'clock going clockwise
    slicePrizes: ["Dead", "Win", "Win", "Dead", "Win", "Win", "Dead", "Dead"],

    // wheel rotation duration, in milliseconds
    rotationTime: 3000
}


var GamePlay = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "GamePlay" });
    },
    init: function() {
         //this.AlexaClient = alexa;                              
    },
    alexaCall(message){
            if(message.intent === "draw") {
                        this.spinWheel;
            }
       
    },
    setupAlexa() {
        console.log("Attempting to set up Alexa : " + JSON.stringify(Alexa));
        Alexa.create({version: '1.0'})
            .then(async (args) => {
                const {
                    alexa,
                    message
                } = args;
                this.alexaClient = alexa;
                alexaLoaded = true;
                console.log(JSON.stringify("args: " + JSON.stringify(args)));
/*
                alexaClient.speech.onStarted(() => {
                    console.log('speech is playing');
                
                });
                alexaClient.speech.onStopped(() => {
                    console.log('speech stopped playing');
                
                }); */
                // Called every time a data payload comes from backend as a message Directive.
            
                
                this.alexaClient.skill.onMessage((message) => {
                    //If in intent exists and matches one of the below, play all local animations/sounds.
                    if(message.playAnimation === true) {
                        switch(message.intent) {
                            case "gamePlayStart":
                                    // Switch to gameplay screen pail.water();
                                    this.spinWheel;
                                     break; 
                            default:
                                return;
                        }
                    }
                });
                //TODO add screen dimming.
                /*
                alexaClient.voice.onMicrophoneOpened(() => {
                    // dimScreen();
                    
                    console.log("microphone opened");
                });
                alexaClient.voice.onMicrophoneClosed(() => {
                    // undimScreen();
                   
                    console.log("microphone closed");
                });*/
            })
            .catch(error => {
                if(debugLevel >= 1) {
                    console.log('\nstartup failed, for a reason: ' + JSON.stringify(error));

                    //infoElement.textContent = 'startup failed, Sorry, customer.';
                }
                alexaClient = null;
               
            });
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

                /*
                this.emitter = new Phaser.Events.EventEmitter();
                this.alexa.skill.onMessage((message) => {
                    // This is invoked for every HandleMessage directive from the skill.
                    emitter.emit(onMessage, message)
                  }) */

                
    },
    create: function() {
        
        this.setupAlexa();
            //this.emitter.on(onMessage,this.alexaCall, this);

            back = this.add.image(this.scale.width / 2, this.scale.height / 2, 'westback');
            back.setDisplaySize(this.scale.width,this.scale.height);
            ammo = this.add.image(150,510,'ammo');
            barrels = this.add.image(250,510,'barrels');
            explosivs = this.add.image(this.scale.width / 3,this.scale.height - 75,'Explosivs').setScale(.80);
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
                frameRate: 5
            });
            //animation for Sheriff2 shooter/////
            this.anims.create({
                key: 'shoot',
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
            //Computer
            this.CompDead = this.add.sprite(160, 350, '1')
            .play('dead')
            .setScale(.95);
            this.CompDead.visible = false;
            this.CompDead.flipX=true;

            this.Comp = this.add.sprite(160, 350, '1')
            .play('shoot')
            .setScale(.95);
            this.Comp.flipX=true;

            this.CompText = this.add.text(game.config.width / 9, game.config.height - 520, "Arthur the Comp", {
                font: "bold 13px Arial",
                align: "center",
                color: "orange"
            });
            this.CompHealth=this.makeBar(game.config.width /15,game.config.height - 500,0x00F910);
            this.setValue(this.CompHealth,100);

            //Player
            this.Player = this.add.sprite(740, 360, '1')
                .setScale(.85)
                .play('shoot');

            this.PlayerDead = this.add.sprite(740, 360, '1')
                .play('dead')
                .setScale(.85);
            this.PlayerDead.visible = false;

            this.PlayerText = this.add.text(game.config.width - 190 , game.config.height - 520, "You", {
                font: "bold 13px Arial",
                align: "center",
                color: "orange"
            });
            this.PlayerHealth=this.makeBar(this.scale.width - 250,game.config.height - 500,0x00F910);
            this.setValue(this.PlayerHealth,100);


            //*********GAME CODE****** */
            //************************* */
                // adding the wheel in the middle of the canvas
            this.wheel = this.add.sprite(game.config.width / 2, game.config.height -420, "wheel").setScale(.25);

            // adding the pin in the middle of the canvas
            this.pin = this.add.sprite(game.config.width / 2, game.config.height -420, "pin").setScale(.25);

            // adding the text field
            this.prizeText = this.add.text(game.config.width / 2, game.config.height - 500, "Spin the wheel", {
                font: "bold 15px Arial",
                align: "center",
                color: "red"
            });
 
            // center the text
            this.prizeText.setOrigin(0.5);

            // the game has just started = we can spin the wheel
            this.canSpin = true;
         


            // this.setupAlexa();

            
            //player health


/*
            // waiting for your input, then calling "spinWheel" function
            this.input.on("pointerdown", this.spinWheel, this);
            alexaClient.skill.onMessage((message) => {
                //If in intent exists and matches one of the below, play all local animations/sounds.
                if(message.playAnimation === true) {
                    switch(message.intent) {
                        case "draw"://todo test this and blinds up
                            this.spinWheel;
                            break;
                        default:
                            return;
                    }
                }
            }); */
            


    },
       
        makeBar(x, y,color) {
            //draw the bar
            let bar = this.add.graphics();

            //color the bar
            bar.fillStyle(color, 1);

            //fill the bar with a rectangle
            bar.fillRect(0, 0, 200, 50);
            
            //position the bar
            bar.x = x;
            bar.y = y;

            //return the bar
            return bar;
        },
        setValue(bar,percentage) {
            //scale the bar
            bar.scaleX = percentage/100;
        },
    
        // function to spin the wheel
        spinWheel(){

            // can we spin the wheel?
            if(this.canSpin){
    
                // resetting text field
                this.prizeText.setText("");
                this.setValue(this.PlayerHealth,100);
                this.setValue(this.CompHealth,100);
                this.Comp.visible = true;
                this.Player.visible = true;
                this.CompDead.visible = false;
                this.PlayerDead.visible = false;
    
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
                        this.music =  this.sound.add('gunshotlong', {
                            volume: 1,
                            loop: false
                            });
                            this.music.play();


                        let resultText = gameOptions.slicePrizes[prize];
                        //this.prizeText.setText(resultText);
                        if(resultText === "Dead"){
                            this.setValue(this.PlayerHealth,5);
                            this.Player.visible = false;
                            this.PlayerDead.visible = true;
                            this.prizeText.setText("Uh, oh! You are " + resultText);
                          //  this.playerHealth.fillStyle(0xFF0000,1);
                        }
                        else {
                            this.setValue(this.CompHealth,5);
                            this.Comp.visible = false;
                            this.CompDead.visible = true;
                            this.prizeText.setText("Great shot! You " + resultText);
                        }
    
                        // player can spin again
                        this.canSpin = true;
                    }
                });
            }
        }
    ,
    update: function() {}
});