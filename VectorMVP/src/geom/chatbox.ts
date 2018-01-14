module geom {
     export function createChatBox(centre_x: number, centre_y: number, box_length: number, passedInGame: Phaser.Game) {

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

     export function createChat(text, centre_x, centre_y, width, passedInGame) {

         passedInGame.add.text(centre_x - (width / 2), centre_y - width/3, text, {
                                                                                            wordWrapWidth: width,
                                                                                            wordWrap: true
         });

         geom.createChatBox(centre_x, centre_y, width + 10, passedInGame);
     }
}