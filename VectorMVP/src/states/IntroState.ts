module AllStates {
    
    export class IntroState extends Phaser.State {
        game: PhaserInput.InputFieldGame; 
        music: Phaser.Sound;
        usernameInputField: any;
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

            this.usernameInputField = this.game.add.inputField((this.game.world.centerX), (2 * this.game.world.centerY - 90), {
                                                                                                                                        font: '30px Arial',
                                                                                                                                        fill: "#fff",
                                                                                                                                        cursorColor:"#fff",
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

            this.chat = geom.createChat("I'm Watt, Watts ur name? ( help me im trapped) ",this.game.world.centerX, this.game.world.centerY, 300, this.game);

            //this.game.add.text(this.game.world.centerX, this.game.world.centerY, 'gay');
        }

        usernameEntered() {
            if (this.usernameInputField.value) {
                this.name = this.usernameInputField.value;
                console.log("your name is:" + this.name)
                this.usernameInputField.destroy(true);
                //this.chat.destroy(true);
            }
        }

        update() {
            this.usernameInputField.update();

            var enter_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            enter_key.onDown.add(this.usernameEntered, this);

        }
    }
}