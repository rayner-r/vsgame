/// <reference path = "\phaser\phaser.d.ts"/>
/// <reference path = "node_modules\@orange-games\phaser-input\build\phaser-input.d.ts"/>
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
            this.game.load.image("watt", "/assets/img/watt.PNG");
            this.game.add.plugin(new PhaserInput.Plugin(this.game, this.game.plugins));
        };
        VectorGame.prototype.create = function () {
            this.game.state.add("IntroScreen", AllStates.IntroState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        };
        return VectorGame;
    }());
    Game.VectorGame = VectorGame;
})(Game || (Game = {}));
window.onload = function () {
    var newgame = new Game.VectorGame();
};
//# sourceMappingURL=app.js.map