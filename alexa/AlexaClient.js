"use strict";
// Alexa Singleton Class
var eventDispatcher_1 = require("../common/mc/eventDispatcher");
var alexa_const_1 = require("../constants/alexa_const");
var AlexaClient = /** @class */ (function () {
    //private _emitter: Phaser.Events.EventEmitter;
    function AlexaClient() {
    }
    AlexaClient.getInstance = function () {
        var _this = this;
        if (!AlexaClient.alexa) {
            var emitter_1 = eventDispatcher_1["default"].getInstance();
            Alexa.create({ version: '1.1' })
                .then(function (args) {
                var alexa = args.alexa, message = args.message;
                _this.alexa = alexa;
                // @ts-ignore
                _this.alexa.voice.onMicrophoneOpened(function (reason) {
                    emitter_1.emit(alexa_const_1["default"].ONMICROPHONEOPENED, reason);
                });
                // @ts-ignore
                _this.alexa.voice.onMicrophoneClosed(function () {
                    emitter_1.emit(alexa_const_1["default"].ONMICROPHONECLOSED);
                });
                // @ts-ignore
                _this.alexa.skill.onMessage(function (message) {
                    // This is invoked for every HandleMessage directive from the skill.
                    emitter_1.emit(alexa_const_1["default"].ONMESSAGE, message);
                });
                // @ts-ignore
                _this.alexa.speech.onStarted(function () {
                    //speech playing
                    emitter_1.emit(alexa_const_1["default"].ONSTARTED);
                });
                // @ts-ignore
                _this.alexa.speech.onStopped(function () {
                    //speech stopped
                    emitter_1.emit(alexa_const_1["default"].ONSTOPPED);
                });
                // Finally THIS IS Currently not captured because it is triggered before the phaser events are setup
                // emitter.emit(ALEXA_CONST.ONREADY, message)
            })["catch"](function (error) {
                // Emit the error
                emitter_1.emit(alexa_const_1["default"].ONREADYFAILED, error);
            });
        }
        return AlexaClient.alexa;
    };
    return AlexaClient;
}());
exports["default"] = AlexaClient;
