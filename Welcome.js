//import { AlexaClient } from "./AlexaClient";
//const AlexaClient = require('AlexaClient');
//const EventDispatcher = require('EventDispatcher');
//import { EventDispatcher } from "./ EventDispatcher";
var debugLevel = 1;
var alexaClient;
var emitter;
var Welcome = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "Welcome" });

        

    },
    init: function() {   
       
    },
    preload: function() {
        this.load.image('westbackGame', 'assets/gameplay_background.jpg');
        this.load.image('play', 'assets/play.png');
        this.load.image('fence', 'assets/fence.png');
        this.load.image('box', 'assets/box.png');
        this.load.audio('gunshotlong','assets/gunshotlong.mp3');
        this.load.audio('background','assets/backgroundMusic.mp3');
        this.load.bitmapFont('desyrel', 'assets/fonts/bitmap/desyrel.png', 'assets/fonts/bitmap/desyrel.xml');


    },
    setUpAlexa()
    {
        Alexa.create({version: '1.0', messageProvider: new LocalMessageProvider()})
        .then((args) => {
            const {
                alexa,
                message
            } = args;

            /* For localhost debugging using alexa-client
             Alexa.create({version: '1.0', messageProvider: new LocalMessageProvider()})
            .then((args) => {
            const {
                alexa,
                message
            } = args;
            */

            alexaClient = alexa;
            //this.msg = message;
            //this.registry.set('ALEXAA',this.alexaClient);
            
            alexaClient.skill.onMessage((message) => {
                const m1 = JSON.stringify(message);
                const substring = "gamePlayStart"
                // This is invoked for every HandleMessage directive from the skill.
               if(m1.includes(substring) === true) {
                   console.log("here");
                    this.scene.start('GamePlay', { alexaClient: alexaClient });
                }
                //this.emitter.emit("onMessage", message);
               // this.scene.start("GamePlay");
               
               console.log(message); 
               console.log(m1);
               // console.log(m1.message);
               // console.log(m1.includes(substring)); 
              });
        })
        .catch(error => {
            console.log(error);
        });
    },
    
    create: function() {
        
        
        
        //this.emitter = new Phaser.Events.EventEmitter();
       
        //this.registry.set('EMITTERR', this.emitter);


        //this.emitter = EventDispatcher.getInstance();
        
        

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
            color: "brown",
            fontStyle: "bold"
            }
            ).setOrigin(0.5)
            .setShadow(1,1, '#000000', 2);

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

        back_text = this.add.text(10, 10, 'Try, Alexa start the game!', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        back_text.setColor("#FFFAFA");
        fence = this.add.image(this.scale.width / 2,this.scale.height - 95,'fence');
       
        //button start
        const gamePlayButton = this.add.image(this.scale.width / 2, this.scale.height - 90, 'play');
        gamePlayButton.setScale(.15);
        gamePlayButton.setInteractive();

        //this.emitter.on("onMessage", this.onAlexaMessage.bind(this) );

     
        this.setUpAlexa();
        gamePlayButton.on('pointerdown', () => {
            this.scene.start("GamePlay");
        });

  
    },
   // onAlexaMessage(message) {
   //     if(message.intent === "gamePlayStart") {
     //       this.scene.start("GamePlay");
   //     }

   // },
    update: function() {}
});