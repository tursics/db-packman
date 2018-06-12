/*jslint browser: true*/
/*global $*/

//-----------------------------------------------------------------------

var background = {
	obj: null,

	init: function () {
		'use strict';

		this.obj = $('<div />').appendTo('body');
		this.obj.attr('id', 'background');
		this.set(0);
	},
	set: function (id) {
		'use strict';

		var theme = 'kleinerICE';
		switch (id) {
		case 0:
			theme = 'kleinerICE';
			break;
		case 1:
			theme = 'idaIC';
			break;
		case 2:
			theme = 'robbiRegio';
			break;
		case 3:
			theme = 'benniICBUS';
			break;
		case 4:
			theme = 'nickNachtzug';
			break;
		}
		$('html').removeClass('kleinerICE');
		$('html').removeClass('idaIC');
		$('html').removeClass('robbiRegio');
		$('html').removeClass('benniICBUS');
		$('html').removeClass('nickNachtzug');
		$('html').addClass(theme);
	}
};

//-----------------------------------------------------------------------
