Crafty.scene("title", function() {
	Crafty.background('#608C56');
	bigText("Office Werewolf", "#FFFB00");
	subText("Stay employed as you deal with your feral curse of the night!", "#FFFB00");
	pressSpaceToContinue("office", "#884444");
});

Crafty.scene("officeComplete", function(){
	Crafty.background('#FD9');
	bigText("Great Work!", "#000");
	subText("Another day, another dollar.", "#000");
	pressSpaceToContinue("manToWolf", "#000");
});

Crafty.scene("officeFailed", function(){
	Crafty.background('#FCF');
	bigText("You're Fired!", "#000");
	subText("After failing to do your job, you are forced to roam the streets, forever a monster.", "#000");
	pressSpaceToContinue("title", "#000");
});

Crafty.scene("woodsComplete", function(){
	Crafty.background('#364');
	bigText("You Survived!", "#FFF");
	subText("Another moon, another... werewolfing.", "#FFF");
	pressSpaceToContinue("wolfToMan", "#FFF");
});

Crafty.scene("woodsFailed", function(){
	Crafty.background('#933');
	bigText("You Died!", "#FFF");
	subText("Unable to satiate your animalistic hunger, you have perished.", "#FFF");
	pressSpaceToContinue("title", "#FFF");
});

Crafty.scene("manToWolf", function(){
	Crafty.background("#000");
	bigText("Now You're A Werewolf!", "#FFF");
	pressSpaceToContinue("woods", "#FFF");
});

Crafty.scene("wolfToMan", function(){
	Crafty.background("#000");
	bigText("Now You're A Person!", "#FFF");
	pressSpaceToContinue("office", "#FFF");
});

function bigText(text, color){
	Crafty.e("TextArea")
		.text(text)
		.css({ "text-align": "center"})
		.placed(0,80,600,100)
		.styled("50px", color);
}

function subText(text, color){
	Crafty.e("TextArea")
		.text(text)
		.css({ "text-align": "center"})
		.placed(0,170,600,50)
		.styled("15px", color);
}

function pressSpaceToContinue(nextScene, color){
	Crafty.e("TextArea")
		.text("Press the spacebar to continue")
		.css({ "text-align": "center"})
		.placed(0,250,600,50)
		.styled("15px", color)
		.bind('KeyDown', function(evt){
			if(evt.key == Crafty.keys['SPACE']) {
				Crafty.scene(nextScene);
			}
		});
}