Viewport = { w:600, h:400}

Game = {
  start: function() {
    Crafty.init(600, 400, 'game');
    Crafty.background('#000');
    Crafty.scene('title');

    Crafty.bind("TaskCompleted", onTaskHasBeenCompleted);
  }
}

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
