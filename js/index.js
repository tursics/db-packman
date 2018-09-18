/*jslint browser: true*/
/*global Vue,document,background,dialog,game,stage*/

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
		dialogChoosePlayerVisible: false,
		gameplayVisible: false
	},
	created: function () {
		'use strict';

		document.title = 'DB PacTrain';

		background.init(this);
		dialog.init(this);
		stage.init(this);
		game.init(this, 'canvas');
	},
	methods: {
		dialogMessageClick: dialog.methods.messageClick
	}
});

//-----------------------------------------------------------------------
