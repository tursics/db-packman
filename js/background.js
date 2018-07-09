/*jslint browser: true*/
/*global document*/

//-----------------------------------------------------------------------

var background = {
	obj: null,

	init: function (vue) {
		'use strict';

		vue.$watch('theme', function (val) {
			background.set(this, val);
		});

		vue.theme = 'kleinerICE';
	},
	set: function (vue, theme) {
		'use strict';

		document.documentElement.classList.remove('kleinerICE');
		document.documentElement.classList.remove('idaIC');
		document.documentElement.classList.remove('robbiRegio');
		document.documentElement.classList.remove('benniICBUS');
		document.documentElement.classList.remove('nickNachtzug');
		document.documentElement.classList.add(theme);
	}
};

//-----------------------------------------------------------------------
