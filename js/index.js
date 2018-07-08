/*jslint browser: true*/
/*global Vue,document,background,console*/

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

		this.dialogStep = 'hello';
		this.dialogMessageHead = 'DB PacTrain';
		this.dialogMessageBody = 'Helfe dem kleinen ICE und seinen Freunden auf dem Weg in den Urlaub.';
	},
	methods: {
		dialogMessageClick: function () {
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
	},
	watch: {
		'theme': function (val) {
			'use strict';

			background.set(this, val);
		},
		'dialogStep': function (val) {
			'use strict';

			this.dialogMessageVisible = (-1 !== ['hello', 'story'].indexOf(val));
			this.dialogChoosePlayerVisible = (-1 !== ['chooseFigure'].indexOf(val));
		}
	}
});

//-----------------------------------------------------------------------
