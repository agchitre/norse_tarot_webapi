let instance = null;
export class EventDispatcher extends Phaser.Events.EventEmitter {
    constructor() {
        super();
        if (instance==null)
        {
            instance=this;
        }       
    }
    static getInstance() {
        if (instance == null) {
            instance = new EventDispatcher();
        }
        return instance;
    }
}