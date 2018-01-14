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
    var ChatState = /** @class */ (function (_super) {
        __extends(ChatState, _super);
        function ChatState() {
            return _super.call(this) || this;
        }
        ChatState.prototype.preload = function () {
        };
        ChatState.prototype.create = function () {
            this.WattSprite = this.game.add.sprite((this.game.world.centerX) / 2, this.game.world.centerY, "watt");
            this.WattSprite.anchor.setTo(0, 0);
            this.WattSprite.scale.setTo(0.25, 0.25);
            this.game.stage.backgroundColor = "#f4b183";
            this.chat = geom.createChat(this.name, this.game.world.centerX, this.game.world.centerY, 300, this.game);
        };
        ChatState.prototype.update = function () {
        };
        return ChatState;
    }(Phaser.State));
    AllStates.ChatState = ChatState;
})(AllStates || (AllStates = {}));
//# sourceMappingURL=ChatState.js.map