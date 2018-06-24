/*jslint browser: true*/
/*global */

//-----------------------------------------------------------------------

var background = {
	obj: null,

	init: function () {
		'use strict';

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
		document.documentElement.classList.remove('kleinerICE');
		document.documentElement.classList.remove('idaIC');
		document.documentElement.classList.remove('robbiRegio');
		document.documentElement.classList.remove('benniICBUS');
		document.documentElement.classList.remove('nickNachtzug');
		document.documentElement.classList.add(theme);
	}
};

//-----------------------------------------------------------------------
