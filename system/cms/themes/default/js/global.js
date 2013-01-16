$(function($){

	// Scroll
	$.localScroll();

	// Link Nudge
	$('#navigation li a').nudge();
});

jQuery.fn.nudge = function(params) {
	//set default parameters
	params = jQuery.extend({
		amount: 15,				//amount of pixels to pad / marginize
		duration: 300,			//amount of milliseconds to take
		property: 'padding', 	//the property to animate (could also use margin)
		direction: 'left',		//direction to animate (could also use right)
		toCallback: function() {},	//function to execute when MO animation completes
		fromCallback: function() {}	//function to execute when MOut animation completes
	}, params);
	//For every element meant to nudge...
	this.each(function() {
		//variables
		var jQueryt = jQuery(this);
		var jQueryp = params;
		var dir = jQueryp.direction;
		var prop = jQueryp.property + dir.substring(0,1).toUpperCase() + dir.substring(1,dir.length);
		var initialValue = jQueryt.css(prop);
		/* fx */
		var go = {};
		go[prop] = parseInt(jQueryp.amount) + parseInt(initialValue);
		var bk = {};
		bk[prop] = initialValue;

		//Proceed to nudge on hover
		jQueryt.hover(function() {
			jQueryt.stop().animate(go, jQueryp.duration, '', jQueryp.toCallback);
		}, function() {
			jQueryt.stop().animate(bk, jQueryp.duration, '', jQueryp.fromCallback);
		});
	});
	return this;
};