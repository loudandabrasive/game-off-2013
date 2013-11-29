Viewport = { w:600, h:400}

Game = {
  start: function() {
    Crafty.init(600, 400, 'game');
    Crafty.background('#000');
    Crafty.scene('title');

    Crafty.bind("TaskCompleted", onTaskHasBeenCompleted);
  }
}

Crafty.scene("title", function() {
	Crafty.background('#608C56');
	Crafty.e("TextArea")
		.text("Office Werewolf")
		.css({ "text-align": "center"})
		.placed(0,80,600,100)
		.styled("50px", "FFFB00");
	Crafty.e("TextArea")
		.text("Stay employed as you deal with your feral curse of the night!")
		.css({ "text-align": "center"})
		.placed(0,170,600,50)
		.styled("15px","#FFFB00");
	Crafty.e("Color, Button")
		.color("#844")
		.text("Begin!")
		.placed(250,280,100,20)
		.styled("15px", "#FFF", "#884444")
		.mouse("Click", function(){ Crafty.scene("newGame");});
});

Crafty.scene("newGame", function(){
	Crafty.scene("office");
})

var completedTaskCount = 0;

function loadUI(){
	Crafty.e("Timer")
		.timer(20);

	Crafty("TaskObject").each(function(i) {
		Crafty.e("Task")
			.task(i, this.boundTask)
			.withCondition(this.boundTask);
    });
}

function onTaskHasBeenCompleted(){
	completedTaskCount++;
	if(completedTaskCount == Crafty("Task").length){
		Crafty.trigger("AllTasksCompleted");
	}
}
