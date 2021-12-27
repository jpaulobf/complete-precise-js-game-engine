
/*
*/
window.addEventListener("load", function(event) {

	/*
	*/
	"use strict";

	/*
	*/
	var render = function() {
		display.render();
	};

	/*
	*/
	var update = function(elapsedTime) {
		
		if (joyKeyController.left.active)	{	game.world.player.moveLeft();									}
		if (joyKeyController.right.active)	{	game.world.player.moveRight();									}
		if (joyKeyController.up.active)		{	game.world.player.jump(); joyKeyController.up.active = false;	}
		game.update(elapsedTime);

	};

	/*
	*/
	var keyDownUp = function(event) {
		joyKeyController.handleKeyDownUp(event.type, event.keyCode);
	};

	/*
	*/
	var resize = function() {
		display.resize(document.documentElement.clientWidth - 32, document.documentElement.clientHeight - 32, game.world.height / game.world.width);
		display.render();
	};

	/*
	*/
	var joyKeyController	= new JoyKeyController();
	var display				= new GraphicDisplay(document.getElementById("load_layer"));
	var game				= new GameLogic();
	var gameEngine			= new GameEngine(1000/60, update, render);

	/*
	*/
	display.buffer.canvas.height	= game.world.height;
	display.buffer.canvas.width		= game.world.width;

	/*
	*/
	window.addEventListener("resize",	resize);
	window.addEventListener("keydown",	keyDownUp);
	window.addEventListener("keyup",	keyDownUp);


	/*
	*/
	resize();
	gameEngine.start();

});