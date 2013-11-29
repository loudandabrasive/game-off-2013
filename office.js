Crafty.scene("office", function() {
	Crafty.background('#FD9');

	completedTaskCount = 0;
    
    loadOfficeEntities();
	loadUI();

	this.levelComplete = Crafty.bind("AllTasksCompleted", function() {
		Crafty.scene("officeComplete");
	});
	this.levelFailed = Crafty.bind("TimeUp", function() {
		Crafty.scene("officeFailed");
	});

	Crafty.trigger("StartTimer");
}, 
function() {
	Crafty.unbind("AllTasksCompleted", this.levelComplete);
	Crafty.unbind("TimeUp", this.levelFailed);
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