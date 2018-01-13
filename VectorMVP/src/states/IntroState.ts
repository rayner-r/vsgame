module AllStates {

    export class IntroState extends Phaser.State {
        game: PhaserInput.InputFieldGame; 
        music: Phaser.Sound;
        username: any;

        constructor() {
            super();
        }

        WattSprite: Phaser.Sprite;

        preload() {

        }
        create() {

            this.WattSprite = this.game.add.sprite((this.game.world.centerX) / 2, this.game.world.centerY, "watt");
            this.WattSprite.anchor.setTo(0, 0);
            this.WattSprite.scale.setTo(0.25, 0.25);
            this.game.stage.backgroundColor = "#f4b183";

            this.username = this.game.add.inputField((this.game.world.centerX / 2), (2 * this.game.world.centerY - 90), {
                font: '30px Arial',
                fill: "#fff",
                cursorColor:"#fff",
                fillAlpha: 0,
                fontWeight: 'bold',
                width: 250,
                padding: 8,
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 6,
                type: PhaserInput.InputType.text
            });
        }

        update() {
            this.username.update()
        }
    }
}