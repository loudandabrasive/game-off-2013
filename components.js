Crafty.c('TextArea', {
	init: function() {
		this.requires('2D, Canvas, Text');
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