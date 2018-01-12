var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AllStates;
(function (AllStates) {
    var IntroState = /** @class */ (function (_super) {
        __extends(IntroState, _super);
        function IntroState() {
            return _super.call(this) || this;
        }
        IntroState.prototype.preload = function () {
        };
        IntroState.prototype.create = function () {
            this.WattSprite = this.add.sprite(0, 0, "watt");
            this.WattSprite.scale.setTo(this.game.width / this.WattSprite.width, this.game.height
                / this.WattSprite.height);
            this.input.onTap.addOnce(this.wattClicked, this);
            var input = this.game.add.inputField(10, 10);
        };
        IntroState.prototype.wattClicked = function () {
            console.log("watt clicked");
        };
        return IntroState;
    }(Phaser.State));
    AllStates.IntroState = IntroState;
})(AllStates || (AllStates = {}));
//# sourceMappingURL=IntroState.js.map