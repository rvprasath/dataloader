/**
 * © COPYRIGHT
 * @author VISHNU
 */

/*
 * Data loader for displaying loader while request server
 */
(function($) {

	$.fn.loader = function(options) {

		var settings = $.extend({}, $.fn.loader.defaults, options);

		/*---------Get the class or id of the element--------*/
		var element = $(this);

		/*---------Calling the funtion to create svg element to display loader--------*/
		var loader = createElement(settings);

		return $(this).each(function() {
			/*----------Displaying the loader-------*/
			$(this).show().append(loader);
			/*------------Remove the svg element or loader after ajax request is done------------*/
			$(document).ajaxStop(function() {
				$(element).find('#data-loader').remove();
			});
		});

	};
}(jQuery));

function createElement(settings) {

	/*----------Display default value-----------*/
	var color = '#006587';
	var size = 3;

	/*------------Array to create number of object for rectangle's cordinate-------------*/
	var property = []
	/*---------Svg element alignment-----------*/
	var viewPortDefault = 50;
	var viewBoxAlignCenter;

	/*-----------Setting the optional properties if assigned-----------*/
	if (settings.color != undefined) {
		color = settings.color;
	}
	if (settings.size != undefined) {
		size = settings.size;
	}

	viewBoxAlignCenter = size * viewPortDefault;

	var xCordinateIncrement = 0;
	var beginIncrement = 0.1;
	var xCordinateRef = 150;
	var beginIncrementRef = 0.1;

	/*---------Creating the object for coordinates----------*/
	for (var i = 0; i < size; i++) {

		var obj = {};
		obj.x = xCordinateIncrement;
		obj.y = 0;
		obj.begin = beginIncrement;

		xCordinateIncrement += xCordinateRef;
		beginIncrement += beginIncrementRef;

		property.push(obj);
	}

	/*----------Creating the svg element-----------*/
	var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
	svg.setAttribute('version', '1.1');
	svg.setAttribute('id', 'data-loader');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('x', '0px');
	svg.setAttribute('y', '0px');
	svg.setAttribute('viewBox', viewBoxAlignCenter + ' 0 100 100');
	svg.setAttribute('enable-background', 'new 0 0 0 0');
	svg.setAttribute('xml:space', 'preserve');
	svg.setAttribute('width', '100%');
	svg.setAttribute('height', '10px');

	for (var i = 0; i < property.length; i++) {

		/*----------Creating the rect element----------*/
		var rect = document.createElementNS('http://www.w3.org/2000/svg',
				'rect');

		rect.setAttribute('width', '100');
		rect.setAttribute('height', '100');
		rect.setAttribute('style', 'fill:' + color + ';');
		rect.setAttribute('x', property[i].x);
		rect.setAttribute('y', property[i].y);
		
		/*---------------Create the animate element------------------*/
		var animate = document.createElementNS('http://www.w3.org/2000/svg',
				'animate');
		animate.setAttribute('attributeName', 'opacity');
		animate.setAttribute('dur', '1s');
		animate.setAttribute('values', '0;1;0');
		animate.setAttribute('repeatCount', 'indefinite');
		animate.setAttribute('begin', property[i].begin);

		rect.appendChild(animate);
		svg.appendChild(rect);
	}

	return svg;
}
