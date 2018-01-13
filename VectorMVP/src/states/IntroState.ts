module AllStates {
    
    export class IntroState extends Phaser.State {
        game: PhaserInput.InputFieldGame; 
        music: Phaser.Sound;
        usernameInputField: any;
        name: string;

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

            this.usernameInputField = this.game.add.inputField((this.game.world.centerX / 2), (2 * this.game.world.centerY - 90), {
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

            this.createChatBox(100, 100, 100, this.game);

        }

        usernameEntered() {
            if (this.usernameInputField.value) {
                this.name = this.usernameInputField.value;
                console.log("your name is:" + this.name)
            }
        }

        createChatBox(centre_x: number, centre_y: number, box_length: number, passedInGame: Phaser.Game) {

            var box_height = box_length / 1.5;
            var box_indent = box_length / 10;
            var start_x = centre_x - box_length / 2;
            var start_y = centre_y - box_height / 2;

            var chatbox = passedInGame.add.graphics(0, 0);

            chatbox.beginFill(0x0000);
            chatbox.lineStyle(0, 0x0000, 1);

            chatbox.moveTo(start_x, start_y);

            chatbox.lineTo(start_x + box_length - box_indent, start_y);
            chatbox.lineTo(start_x + box_length, start_y + box_indent);
            chatbox.lineTo(start_x + box_length, start_y + box_height);
            chatbox.lineTo(start_x + box_indent, start_y + box_height);
            chatbox.lineTo(start_x, start_y + box_height - box_indent);

            chatbox.endFill();

            chatbox.alpha = 0.2;

            return chatbox;
        }

        update() {
            this.usernameInputField.update()

            var enter_key = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

            enter_key.onDown.add(this.usernameEntered, this);

        }
    }
}