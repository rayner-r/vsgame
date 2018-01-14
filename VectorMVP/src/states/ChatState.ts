module AllStates {

    export class ChatState extends Phaser.State {
        game: PhaserInput.InputFieldGame; 
        music: Phaser.Sound;
        name: string;
        chat: any;

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

            this.chat = geom.createChat(this.name, this.game.world.centerX, this.game.world.centerY, 300, this.game);


        }


        update() {

        }
    }
}