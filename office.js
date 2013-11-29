Crafty.scene("office", function() {
	Crafty.background('#FD9');

    loadOfficeEntities();
	loadUI();

	Crafty.bind("TaskCompleted", onTaskHasBeenCompleted);

	Crafty.trigger("StartTimer");
});

function loadOfficeEntities(){
	Crafty.e("Player");

	Crafty.e("Wall")
		.placed(100,100,20,300);

	Crafty.e("TaskObject")
		.placed(300,200,10,10)
		.color("#FFFFFF")
		.bindToTask("Spacebar at White");

	Crafty.e("TaskObject")
		.placed(500,300,50,50)
		.color("#00FFFF")
		.bindToTask("Spacebar at Blue");
}

var completedTaskCount = 0;

function loadUI(){
	Crafty.e("Timer")
		.timer(10, function(){console.log("Time's up!");});

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