/// <reference path = "\phaser\phaser.d.ts"/>

module Game {
    export class VectorGame {

        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }

        preload() {
            // Preload Watt
            this.game.load.image("watt", "\assets\img\watt.PNG");
        }

        create() {

        }

    }
}

window.onload = () => {
    var newgame = new Game.VectorGame();
}