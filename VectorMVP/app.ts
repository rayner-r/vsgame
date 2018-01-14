/// <reference path = "\phaser\phaser.d.ts"/>
/// <reference path = "node_modules\@orange-games\phaser-input\build\phaser-input.d.ts"/>

module Game {
    export class VectorGame {

        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload,
                update: this.update
            });
        }

        preload() {
            // Preload Watt
            this.game.load.image("watt", "/assets/img/watt.PNG");
            this.game.add.plugin(new PhaserInput.Plugin(this.game, this.game.plugins));
        }

        create() {
            this.game.state.add("IntroScreen",AllStates.IntroState,true)
            //this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
        update() {
            console.log("hi")
        }
    }
}

window.onload = () => {
    var newgame = new Game.VectorGame();
}