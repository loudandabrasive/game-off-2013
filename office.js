Crafty.scene("office", function() {
	Crafty.background('#FD9');
	loadUI();
	loadEntities();
});

var timeleft = 0;
var tasks = ["Do this.", "Then, do this."];

function loadUI(){
	Crafty.e("TextArea")
		.text(timeleft.toString())
		.placed(550,25,50,30)
		.styled('20px', '#000');
	
	loadTaskList();
}

function loadTaskList(){
	for(var i=0; i < tasks.length; i++){
		Crafty.e("TextArea")
			.text(tasks[i])
			.placed(15,30+(i*25),200,15)
			.styled('12px', '#000');
	}
}

function loadEntities(){
	Crafty.e("2D, Canvas, Color, Fourway")
		.attr({x:10, y:10, w:20, h:20})
		.color("red")
		.fourway(5);
}