/*jslint browser: true*/
/*global Vue,document,background,dialog*/

//-----------------------------------------------------------------------

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World.',
		theme: '',
		dialogStep: null,
		dialogMessageHead: '',
		dialogMessageBody: '',
		dialogMessageVisible: false,
		dialogChoosePlayerHead: '',
		dialogChoosePlayerBody: '',
		dialogChoosePlayerVisible: false
	},
	created: function () {
		'use strict';

		document.title = 'DB PacTrain';

		background.init(this);
		dialog.init(this);
	},
	methods: {
		dialogMessageClick: dialog.methods.messageClick
	}
});

//-----------------------------------------------------------------------
