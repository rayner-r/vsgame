module AllStates {

    export class IntroState extends Phaser.State {
        game: PhaserInput.InputFieldGame; 
        music: Phaser.Sound;

        constructor() {
            super();
        }

        WattSprite: Phaser.Sprite;

        preload() {

        }
        create() {
            this.WattSprite = this.add.sprite(0, 0, "watt");
            this.WattSprite.scale.setTo(this.game.width / this.WattSprite.width, this.game.height
                / this.WattSprite.height);

            this.input.onTap.addOnce(this.wattClicked, this);
            const input = this.game.add.inputField(10, 10);
        }
        wattClicked() {
            console.log("watt clicked")
        }
    }
}