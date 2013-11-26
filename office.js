Crafty.scene("office", function() {
	Crafty.background('#FD9');
	loadUI();
	loadEntities();
});

var timeleft = '0:00';
var tasks = ["Do this.", "Then, do this."];

function loadUI(){
	Crafty.e("Timer");
	
	loadTaskList();
}

function loadTaskList(){
	for(var i=0; i < tasks.length; i++){
		Crafty.e("Color, TextArea")
			.color("#FFFFFF")
			.text(tasks[i])
			.placed(15,30+(i*25),100,15)
			.styled('12px', '#000000');
	}
}

function loadEntities(){
	Crafty.e("2D, Canvas, Color, Fourway")
		.attr({x:10, y:10, w:20, h:20})
		.color("red")
		.fourway(5);
}