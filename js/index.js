/*jslint browser: true*/
/*global Vue,document,background,dialog,game,stage,player,enemy*/

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
		enemy.init(this, 4);
		player.init(this);
		stage.init(this);
		game.init(this, 'gameCanvas');
	},
	methods: {
		dialogMessageClick: dialog.methods.messageClick
	}
});

//-----------------------------------------------------------------------
