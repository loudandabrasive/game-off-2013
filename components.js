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
	maxTime: 0,
	runningTime: 0,

	init: function() {
		this.requires('Color, TextArea');
		this.color("#FFFFFF")
		this.text("0:00")
		this.placed(540,25,50,30)
		this.styled('20px', '#000000');
		this.bind('MessureFPS', this.tick);
	},

	tick: function(){
		if(!Crafty.isPaused()){
			this.runningTime++;
			this.updateText(this.runningTime);
		}
	},

	updateText: function(time){
		var minutes = Math.floor(time / 60);
		var seconds = time % 60;
		if(seconds < 10)
			seconds = '0' + seconds.toString()
		this.text(minutes + ':' + seconds.toString());
	}
});