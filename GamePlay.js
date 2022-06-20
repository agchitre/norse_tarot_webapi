var GamePlay = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function() {
        Phaser.Scene.call(this, { "key": "GamePlay" });
    },
    init: function(data) {
        this.message = data.message;
    },
    preload: function() {
        this.load.image('westbackGame', 'assets/gameplay_background.jpg');
    },
    create: function() {
       background=  this.add.image(400, 300, 'westbackGame');
       background.setScale(.25);
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
    },
    update: function() {}
});