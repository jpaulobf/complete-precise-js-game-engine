/*
*/
const GameEngine = function(timeElapsed, update_method, render_method) {

	

	this.animationFrameRequest	= undefined,
	this.time					= undefined,
	this.timeElapsed			= timeElapsed,
	
	this.updated				= false;

	

	this.update					= update_method;
	this.render					= render_method;

	this.start = function() {
	};


}