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
            this.WattSprite = this.game.add.sprite((this.game.world.centerX) / 2, this.game.world.centerY, "watt");
            this.WattSprite.anchor.setTo(0, 0);
            this.WattSprite.scale.setTo(0.25, 0.25);
            this.game.stage.backgroundColor = "#f4b183";
            this.usernameInputField = this.game.add.inputField((this.game.world.centerX), (2 * this.game.world.centerY - 90), {
                font: '30px Arial',
                fill: "#fff",
                cursorColor: "#fff",
                fillAlpha: 0,
                fontWeight: 'bold',
                width: 250,
                padding: 0,
                borderWidth: 0,
                borderColor: '#000',
                borderRadius: 5,
                type: PhaserInput.InputType.text
            });
            this.usernameInputField.startFocus();
            this.usernameInputField.blockInput = false;
            this.chat = geom.createChat("I'm Watt, Watts ur name? ( help me im trapped) ", this.game.world.centerX, this.game.world.centerY, 300, this.game);
            //this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'gay');
        };
        IntroState.prototype.usernameEntered = function () {
            if (this.usernameInputField.value) {
                this.name = this.usernameInputField.value;
                this.usernameInputField.destroy(true);
                this.game.state.start("ChatState");
            }
        };
        IntroState.prototype.update = function () {
            if (this.usernameInputField) {
                this.usernameInputField.update();
                var enter_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
                enter_key.onDown.add(this.usernameEntered, this);
            }
        };
        return IntroState;
    }(Phaser.State));
    AllStates.IntroState = IntroState;
})(AllStates || (AllStates = {}));
//# sourceMappingURL=IntroState.js.map