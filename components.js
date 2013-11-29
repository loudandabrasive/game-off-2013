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
		this.css({ "text-align": "center", "border": "2px solid black"})
		this.placed(520,25,70,22)
		this.styled('20px', '#000000');
	},
	timer: function(maxTime, onTimeUp){
		this.runningTime = 0;
		this.maxTime = maxTime,
		this.updateText(maxTime)
		this.bind('StartTimer', this.start)
		this.bind('TimeUp', onTimeUp)
		return this;
	},
	
	start: function(){
		this.runningTime = 0;
		this.bind('MessureFPS', this.tick);
	},
	tick: function(){
		if(!Crafty.isPaused()){
			this.runningTime++;
			if(this.runningTime >= this.maxTime){
				Crafty.trigger('TimeUp');
				this.unbind('MessureFPS', this.tick)
			}
			this.updateText(this.maxTime - this.runningTime);
		}
	},

	updateText: function(time){
		var minutes = Math.floor(time / 60);
		var seconds = time % 60;
		if(seconds < 10)
			seconds = '0' + seconds.toString()
		this.text(minutes + ':' + seconds.toString());
		var color = time >= 10 ? "#000000" : "#FF0000";
		this.textColor(color);
	}
});

Crafty.c('Task', {
	conditionEvent: "",

	init: function() {
		this.requires('Color, TextArea');
	},
	task: function(rank, name){
		this.color("#FFFFFF")
		this.text(name)
		this.css({ "border": "2px solid black", "padding": "0 0 0 5px"})
		this.placed(15,30+(rank*25),100,15)
		this.styled('12px', '#000000');
		return this;
	},
	withCondition: function(evtName){
		this.conditionEvent = evtName;
		this.bind(this.conditionEvent, this.onComplete);
		return this;
	},

	onComplete: function(){
		this.color("#99FFAA")
		this.css({"text-decoration": "line-through"})
		this.unbind(this.conditionEvent, this.onComplete);
		Crafty.trigger("TaskCompleted");
	},
});

Crafty.c('GameObject', {
	init: function() {
		this.requires('2D, Canvas, Color');
	},
	placed: function(x,y,w,h){
		this.attr({x: x, y: y, w: w, h: h})
		return this;
	}
});

Crafty.c('Player', {
	init: function() {
    	this.requires('GameObject, Fourway, Collision')
    		.placed(10,10,20,20)
    		.color('#FF0000')
    		.fourway(3)
    		.onHit('Solid', this.halt);
  	},
  	halt: function() {
	    this._speed = 0;
	    if (this._movement) {
	      this.x -= this._movement.x;
	      this.y -= this._movement.y;
	  	}
    }
});

Crafty.c('Wall', {
  init: function() {
  	this.requires('GameObject, Solid')
  		.color('#F7F7CC');
  }
});
