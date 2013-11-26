Crafty.c('TextArea', {
	init: function() {
		this.requires('2D, DOM, Text');
		this.unselectable();
	},
	placed: function(x,y,w,h){
		this.attr({x: x, y: y, w: w, h: h})
		return this;
	},
	styled: function(size, textcolor){
		this.textFont({ size: size, weight: 'bold' })
		this.textColor(textcolor);
		return this;
	},
	text: function(text){
		this.text(text);
		return this;
	}
});

Crafty.c('Button', {
	init: function() {
		this.requires('TextArea, Mouse');
		this.css({ "text-align": "center", "border": "2px solid black"});
	},
	placed: function(x,y,w,h){
		this.attr({x: x, y: y, w: w, h: h})
		return this;
	},
	mouse: function(action, reaction){
		this.bind(action, reaction);
		return this;
	},
	styled: function(size, textcolor){
		this.styled(size, textcolor);
		return this;
	},
	text: function(text){
		this.text(text);
		return this;
	}
});

Crafty.c('Timer', {
	init: function() {
		this.requires('Color, TextArea');
		this.color("#FFFFFF")
		this.text("0:00")
		this.placed(540,25,50,30)
		this.styled('20px', '#000000');
	},
});