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
	Crafty.e("2D, DOM, Text")
		.attr({ x:100, y:100, w:400, h:100})
		.text("Office Werewolf")
		.css({ "text-align": "center"})
		.textFont({ size: '50px', weight: 'bold' })
		.textColor("#FFFB00");
	Crafty.e("2D, DOM, Text")
		.attr({ x:100, y:200, w:400, h:50})
		.text("Stay employed as you deal with your feral curse of the night!")
		.css({ "text-align": "center"})
		.textFont({ size: '15px'})
		.textColor("#FFFB00");
});