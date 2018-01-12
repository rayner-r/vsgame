/// <reference path = "\phaser\phaser.d.ts"/>
var Game;
(function (Game) {
    var VectorGame = /** @class */ (function () {
        function VectorGame() {
            this.game = new Phaser.Game(1280, 720, Phaser.AUTO, 'content', {
                create: this.create,
                preload: this.preload
            });
        }
        VectorGame.prototype.preload = function () {
            // Preload Watt
            this.game.load.image("watt", "\assets\img\watt.PNG");
        };
        VectorGame.prototype.create = function () {
        };
        return VectorGame;
    }());
    Game.VectorGame = VectorGame;
})(Game || (Game = {}));
window.onload = function () {
    var newgame = new Game.VectorGame();
};
//# sourceMappingURL=app.js.map