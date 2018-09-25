/*jslint browser: true*/
/*global document*/

//-----------------------------------------------------------------------

var stage = {
	STATUS_INACTIVE: 0,
	STATUS_NORMAL: 1,
	STATUS_PAUSE: 2,
	STATUS_REBORN: 3,
	STATUS_INTERNAL_ERROR: 4,
	COS: [1, 0, -1, 0],
	SIN: [0, 1, 0, -1],
	COLOR: ['#F00', '#F93', '#0CF', '#F9C'],

	obj: null,
	status: this.STATUS_INACTIVE,
	sprites: [],

	init: function () {
		'use strict';

		var i, map;

		for (i = 0; i < this.maps.length; ++i) {
			map = this.maps[i];

			map.data = this.rowData;
			map.dataHeight = map.data.length;
			map.dataWidth = map.data[0].length;
			map.imageData = null;
		}
	},
	doUpdate: function () {
		'use strict';

		var stage = this,
			map = this.maps[0];

		if (stage.STATUS_NORMAL === stage.status) {
			this.sprites.forEach(function (sprite) {
				if (map && !map.get(sprite.coord.x, sprite.coord.y) && !map.get(player.coord.x, player.coord.y)) {
					var dx = sprite.x - player.x;
					var dy = sprite.y - player.y;
					if (dx * dx + dy * dy < 750 && sprite.status != 4) {
						if (sprite.status == 3) {
							sprite.status = 4;
							_SCORE += 10;
						} else {
							stage.status = 3;
							stage.timeout = 30;
						}
					}
				}
			});

/*			if (JSON.stringify(beans.data).indexOf(0) < 0) {
				game.nextStage();
			}*/
		}

		return true;
	},

	rowData: [
		'1111111111111111111111111111',
		'1000000000000110000000000001',
		'1011110111110110111110111101',
		'1011110111110110111110111101',
		'1011110111110110111110111101',
		'1000000000000000000000000001',
		'1011110110111111110110111101',
		'1011110110111111110110111101',
		'1000000110000110000110000001',
		'1111110111110110111110111111',
		'1111110111110110111110111111',
		'1111110110000000000110111111',
		'1111110110111221110110111111',
		'1111110110122222210110111111',
		'0000000000122222210000000000',
		'1111110110122222210110111111',
		'1111110110111111110110111111',
		'1111110110000000000110111111',
		'1111110110111111110110111111',
		'1111110110111111110110111111',
		'1000000000000110000000000001',
		'1011110111110110111110111101',
		'1011110111110110111110111101',
		'1000110000000000000000110001',
		'1110110110111111110110110111',
		'1110110110111111110110110111',
		'1000000110000110000110000001',
		'1011111111110110111111111101',
		'1011111111110110111111111101',
		'1000000000000000000000000001',
		'1111111111111111111111111111'
	],
	maps: [{
		x: 60,
		y: 10,
		size: 20,
		frames: 1,
		times: 0,
		cache: true,
		doUpdate: function () {
		},
		draw: function (context) {
			'use strict';

			context.lineWidth = 2;

			var x, y, value, moving, pos;

			for (y = 0; y < this.dataHeight; ++y) {
				for (x = 0; x < this.dataWidth; ++x) {
					value = this.get(x, y);

					if (value) {
						moving = [0, 0, 0, 0];
						if (this.get(x + 1, y) && !(this.get(x + 1, y - 1) && this.get(x + 1, y + 1) && this.get(x, y - 1) && this.get(x, y + 1))) {
							moving[0] = 1;
						}
						if (this.get(x, y + 1) && !(this.get(x - 1, y + 1) && this.get(x + 1, y + 1) && this.get(x - 1, y) && this.get(x + 1, y))) {
							moving[1] = 1;
						}
						if (this.get(x - 1, y) && !(this.get(x - 1, y - 1) && this.get(x - 1, y + 1) && this.get(x, y - 1) && this.get(x, y + 1))) {
							moving[2] = 1;
						}
						if (this.get(x, y - 1) && !(this.get(x - 1, y - 1) && this.get(x + 1, y - 1) && this.get(x - 1, y) && this.get(x + 1, y))) {
							moving[3] = 1;
						}

						if (moving.indexOf(1) > -1) {
							context.strokeStyle = value === 2 ? "#FFF" : "#09C";
							pos = this.convertPosition(x, y);
							switch (moving.join('')) {
							case '1100':
								context.beginPath();
								context.arc(pos.x + this.size / 2, pos.y + this.size / 2, this.size / 2, Math.PI, 1.5 * Math.PI, false);
								context.stroke();
								context.closePath();
								break;
							case '0110':
								context.beginPath();
								context.arc(pos.x - this.size / 2, pos.y + this.size / 2, this.size / 2, 1.5 * Math.PI, 2 * Math.PI, false);
								context.stroke();
								context.closePath();
								break;
							case '0011':
								context.beginPath();
								context.arc(pos.x - this.size / 2, pos.y - this.size / 2, this.size / 2, 0, 0.5 * Math.PI, false);
								context.stroke();
								context.closePath();
								break;
							case '1001':
								context.beginPath();
								context.arc(pos.x + this.size / 2, pos.y - this.size / 2, this.size / 2, 0.5 * Math.PI, 1 * Math.PI, false);
								context.stroke();
								context.closePath();
								break;
							default:
								var dist = this.size / 2;

								moving.forEach(function (sprite, index) {
									if (sprite) {
										context.beginPath();
										context.moveTo(pos.x, pos.y);
										context.lineTo(pos.x - stage.COS[index] * dist, pos.y - stage.SIN[index] * dist);
										context.stroke();
										context.closePath();
									}
								});
							}
						}
					}
				}
			}
		},
		get: function (x, y) {
			'use strict';

			if (this.data[y] && (typeof this.data[y][x] !== 'undefined')) {
				return parseInt(this.data[y][x], 10);
			}

			return -1;
		},
		convertPosition: function (x, y) {
			'use strict';

			return {
				x: this.x + x * this.size + this.size / 2,
				y: this.y + y * this.size + this.size / 2
			};
		}
	}]
};

//-----------------------------------------------------------------------
