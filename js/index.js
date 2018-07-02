/*jslint browser: true*/
/*global Vue,document,background,console*/

//-----------------------------------------------------------------------

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World.',
		theme: ''
	},
	created: function () {
		'use strict';

		document.title = 'DB PacTrain';

		background.init(this);
	},
	methods: {
		
	},
	watch: {
		'theme': function (val) {
			'use strict';

			background.set(this, val);
		}
	}
});

//-----------------------------------------------------------------------
