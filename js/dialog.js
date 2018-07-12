/*jslint browser: true*/
/*global */

//-----------------------------------------------------------------------

var dialog = {
	obj: null,

	init: function (vue) {
		'use strict';

		vue.$watch('dialogStep', function (val) {
			this.dialogMessageVisible = (-1 !== ['hello', 'story', 'control'].indexOf(val));
			this.dialogChoosePlayerVisible = (-1 !== ['chooseFigure'].indexOf(val));
		});

		vue.dialogStep = 'hello';
		vue.dialogMessageHead = 'Strecken-Läufer';
		vue.dialogMessageBody = 'Helfe dem kleinen ICE und seinen Freunden auf dem Weg in den Urlaub.';
        vue.dialogMessageButton = 'Start';
	},
	methods: {
		messageClick : function () {
			'use strict';

			switch (this.dialogStep) {
			case 'hello':
				this.dialogStep = 'story';
				this.dialogMessageHead = 'Es war einmal...';
				this.dialogMessageBody = '... und deswegen musst du uns helfen.';
                this.dialogMessageButton = '';
				break;
			case 'story':
				this.dialogStep = 'control';
				this.dialogMessageHead = 'Und so geht\'s';
				this.dialogMessageBody = 'Mit den Tasten, ... mit dem Finger...';
                this.dialogMessageButton = 'Jetzt spielen';
				break;
			case 'control':
				this.dialogStep = 'chooseFigure';
				this.dialogChoosePlayerHead = 'Auswahl des Charakters';
				this.dialogChoosePlayerBody = 'Wähle den Zug aus, mit dem du fahren möchtest.';
                this.dialogMessageButton = 'Los geht\'s';
				break;
			}
		}

	}
};

//-----------------------------------------------------------------------
