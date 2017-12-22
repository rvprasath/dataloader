/**
 * https://github.com/rvprasath/dataloader
 * © COPYRIGHT 2017-2018 dataloader v1.0
 * Licensed under the MIT license
 * @author vishnu prasath
 */

(function($) {

	$.fn.loader = function(options) {

		var settings = $.extend({}, $.fn.loader.defaults, options);

		
		var element = $(this);
		var loader = createElement(settings);

		return $(this).each(function() {
			$(this).show().append(loader);
			$(document).ajaxStop(function() {
				$(element).find('#data-loader').remove();
			});
		});

	};
}(jQuery));

function createElement(settings) {

	var color = '#006587';
	var size = 3;

	var property = [];
	var viewPortDefault = 50;
	var viewBoxAlignCenter;

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

	for (var i = 0; i < size; i++) {

		var obj = {};
		obj.x = xCordinateIncrement;
		obj.y = 0;
		obj.begin = beginIncrement;

		xCordinateIncrement += xCordinateRef;
		beginIncrement += beginIncrementRef;

		property.push(obj);
	}

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

		var rect = document.createElementNS('http://www.w3.org/2000/svg',
				'rect');

		rect.setAttribute('width', '100');
		rect.setAttribute('height', '100');
		rect.setAttribute('style', 'fill:' + color + ';');
		rect.setAttribute('x', property[i].x);
		rect.setAttribute('y', property[i].y);
		
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
