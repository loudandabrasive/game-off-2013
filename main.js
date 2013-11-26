Viewport = { w:600, h:400}

Game = {
  start: function() {
    Crafty.init(600, 400, 'game');
    Crafty.background('#000');
    Crafty.scene('title');
  }
}

Crafty.scene("title", function() {
	Crafty.background('#608C56');
	Crafty.e("TextArea")
		.text("Office Werewolf")
		.placed(110,80,400,100)
		.styled("50px", "FFFB00");
	Crafty.e("TextArea")
		.text("Stay employed as you deal with your feral curse of the night!")
		.placed(90,170,400,50)
		.styled("15px","#FFFB00");
});