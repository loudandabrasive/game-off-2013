Crafty.scene("office", function() {
	Crafty.background('#FD9');
	loadUI();
	loadEntities();
});

var timeleft = '0:00';
var tasks = ["Do this.", "Then, do this."];
var completedTaskCount = 0;

function loadUI(){
	Crafty.e("Timer")
		.timer(10, function(){console.log("Time's up!");});
	
	loadTaskList();

	Crafty.trigger("StartTimer");
}

function loadTaskList(){
	for(var i=0; i < tasks.length; i++){
		Crafty.e("Task")
			.task(i, tasks[i])
			.withCondition("Task" + i + "Done");
	}

	Crafty.bind("TaskCompleted", onTaskHasBeenCompleted)
}

function loadEntities(){
	Crafty.e("2D, Canvas, Color, Fourway")
		.attr({x:10, y:10, w:20, h:20})
		.color("red")
		.fourway(5);
}

function onTaskHasBeenCompleted(){
	completedTaskCount++;
	if(completedTaskCount == Crafty("Task").length){
		Crafty.trigger("AllTasksCompleted");
		console.log("All tasks completed.");
	}
}