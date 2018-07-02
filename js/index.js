/*jslint browser: true*/
/*global Vue,document,background,console*/

//-----------------------------------------------------------------------

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World.'
	},
	created: function () {
		'use strict';

		document.title = 'DB PacTrain';
		console.log('hello world');

		background.init();
	},
	methods: {
		
	}
});

//-----------------------------------------------------------------------
