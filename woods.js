Crafty.scene("woods", function() {
	Crafty.background('#364');

	completedTaskCount = 0;
    
    loadWoodsEntities();
	loadUI();

	this.levelComplete = Crafty.bind("AllTasksCompleted", function() {
		Crafty.scene("office");
	});
	this.levelFailed = Crafty.bind("TimeUp", function() {
		Crafty.scene("title");
	});

	Crafty.trigger("StartTimer");
}, 
function() {
	Crafty.unbind("AllTasksCompleted", this.levelComplete);
	Crafty.unbind("TimeUp", this.levelFailed);
});

function loadWoodsEntities(){
	Crafty.e("Player");

	Crafty.e("TaskObject")
		.placed(300,100,40,40)
		.color("#008080")
		.bindToTask("Spacebar at teal");

	Crafty.e("TaskObject")
		.placed(100,300,300,20)
		.color("#DAA520")
		.bindToTask("Spacebar at Goldenrod");
}