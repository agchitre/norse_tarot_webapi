import { EventDispatcher } from "./ eventDispatcher";

let Alexa = null;

export class AlexaClient {
    static alexa;

    constructor() {     
    }

    static getInstance() {
        if (!AlexaClient.alexa) {
        const emitter = new Phaser.Events.EventEmitter;

      Alexa.create({ version: '1.0' })
        .then((args) => {
          const { alexa, message } = args;
          this.alexa = alexa;
          // @ts-ignore
          this.alexa.skill.onMessage((message) => {
            // This is invoked for every HandleMessage directive from the skill.
            emitter.emit("onMessage", message)
          });

          // Finally THIS IS Currently not captured because it is triggered before the phaser events are setup
          // emitter.emit(ALEXA_CONST.ONREADY, message)
        })
        .catch((error) => {
          // Emit the error
          emitter.emit("onReadyFailed", error);
        })
    }
    return AlexaClient.alexa
    }
}