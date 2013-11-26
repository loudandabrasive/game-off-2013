Crafty.scene("office", function() {
	Crafty.background('#FD9');
	loadUI();
	loadEntities();
});

var timeleft = 0;
var tasks = ["Do this.", "Then, do this."];

function loadUI(){
	Crafty.e("2D, Canvas, Text")
		.attr({ x:550, y:25, w:50, h:30})
		.text(timeleft.toString())
		.textFont({ size: '20px', weight: 'bold' })
		.textColor("#000");

	loadTaskList();
}

function loadTaskList(){
	for(var i=0; i < tasks.length; i++){
		Crafty.e("2D, Canvas, Text")
			.attr({x: 15, y:30+(i*25), w:200, h:15})
			.text(tasks[i])
			.textFont({ size: '10x' })
			.textColor("#000");
	}
}

function loadEntities(){
	Crafty.e("2D, Canvas, Color, Fourway")
		.attr({x:10, y:10, w:20, h:20})
		.color("red")
		.fourway(5);
}