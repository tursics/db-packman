/*jslint browser: true*/
/*global */

//-----------------------------------------------------------------------

var dialog = {
	obj: null,

	init: function (vue) {
		'use strict';

		vue.$watch('dialogStep', function (val) {
			this.dialogMessageVisible = (-1 !== ['hello', 'story'].indexOf(val));
			this.dialogChoosePlayerVisible = (-1 !== ['chooseFigure'].indexOf(val));
		});

		vue.dialogStep = 'hello';
		vue.dialogMessageHead = 'DB PacTrain';
		vue.dialogMessageBody = 'Helfe dem kleinen ICE und seinen Freunden auf dem Weg in den Urlaub.';
	},
	methods: {
		messageClick : function () {
			'use strict';

			switch (this.dialogStep) {
			case 'hello':
				this.dialogStep = 'story';
				this.dialogMessageHead = 'Es war einmal...';
				this.dialogMessageBody = '... und dexwegen musst du uns helfen.';
				break;
			case 'story':
				this.dialogStep = 'chooseFigure';
				this.dialogChoosePlayerHead = 'Wähle aus';
				this.dialogChoosePlayerBody = 'Mit wem möchtest du spielen?';
				break;
			}
		}

	}
};

//-----------------------------------------------------------------------
