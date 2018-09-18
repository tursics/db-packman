/*jslint browser: true*/
/*global document,requestAnimationFrame,cancelAnimationFrame,app,stage*/

//-----------------------------------------------------------------------

var game = {
	obj: null,
	mainLoop: null,
	width: 0,
	height: 0,
	context: null,

	init: function (vue, canvasId) {
		'use strict';

		this.width = 960;
		this.height = 680;

		this.obj = document.getElementById(canvasId);
		this.obj.width = this.width;
		this.obj.height = this.height;

		this.context = this.obj.getContext('2d');
	},
	start: function () {
		'use strict';

		var frame = 0,
			that = this,
			loop = function () {
				that.context.clearRect(0, 0, that.width, that.height);
				that.context.fillStyle = '#000000';
				that.context.fillRect(0, 0, that.width, that.height);

				++frame;

				if (stage.doUpdate() !== false) {
					stage.maps.forEach(function (map) {
						if (!(frame % map.frames)) {
							map.times = frame / map.frames;
						}
						if (map.cache) {
							if (!map.imageData) {
								that.context.save();
								map.draw(that.context);
								map.imageData = that.context.getImageData(0, 0, that.width, that.height);
								that.context.restore();
							} else {
								that.context.putImageData(map.imageData, 0, 0);
							}
						} else {
							map.doUpdate();
							map.draw(that.context);
						}
					});

					stage.items.forEach(function (item) {
						if (!(frame % item.frames)) {
							item.times = frame / item.frames;
						}
						if (stage.status==1&&item.status!=2) {
							if (item.location) {
								item.coord = item.location.position2coord(item.x, item.y);
							}
							item.doUpdate();
						}
						item.draw(that.context);
					});
				}

				that.mainLoop = requestAnimationFrame(loop);
			};

		that.mainLoop = requestAnimationFrame(loop);
		app.gameplayVisible = true;
	},
	stop: function () {
		'use strict';

		this.gamePlayVisible = false;

		if (this.mainLoop) {
			cancelAnimationFrame(this.mainLoop);
		}
	}
};

//-----------------------------------------------------------------------
