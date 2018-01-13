var Geom;
(function (Geom) {
    function createChatBox(centre_x, centre_y, box_length, passedInGame) {
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
    Geom.createChatBox = createChatBox;
})(Geom || (Geom = {}));
//# sourceMappingURL=chatbox.js.map