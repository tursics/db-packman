/*jslint browser: true*/
/*global document,requestAnimationFrame,cancelAnimationFrame,app,stage*/

//-----------------------------------------------------------------------

var game = {
	obj: null,
	mainLoop: null,
	width: 0,
	height: 0,
	context: null,
	IMAGES: {
		regioLeft0: null,
		regioRight0: null,
		regioFront0: null,
		regioBack0: null,
		cargoLeft0: null,
		cargoRight0: null,
		cargoFront0: null,
		cargoBack0: null,
		iceWhite: null,
		iceBlue: null,
		iceGreen: null,
		iceOrange: null,
		icePink: null,
		iceEye: null
	},

	init: function (vue, canvasId) {
		'use strict';

		this.width = 960;
		this.height = 680;

		this.obj = document.getElementById(canvasId);
		this.obj.width = this.width;
		this.obj.height = this.height;

		this.context = this.obj.getContext('2d');

		this.loadImages();
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
						if (0 === (frame % map.frames)) {
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

					stage.sprites.forEach(function (sprite) {
						if (!(frame % sprite.frames)) {
							sprite.times = frame / sprite.frames;
						}
						if (stage.status==1&&sprite.status!=2) {
							if (sprite.location) {
								sprite.coord = sprite.location.position2coord(sprite.x, sprite.y);
							}
							sprite.doUpdate();
						}
						sprite.draw(that.context);
					});
				}

				that.mainLoop = requestAnimationFrame(loop);
			};

		that.mainLoop = requestAnimationFrame(loop);
		app.gameplayVisible = true;
		this.obj.style.display = 'block';

		stage.status = stage.STATUS_NORMAL;
	},
	stop: function () {
		'use strict';

		this.gamePlayVisible = false;
		this.obj.style.display = 'none';

		if (this.mainLoop) {
			cancelAnimationFrame(this.mainLoop);
		}
	},
	loadImages: function() {
		this.IMAGES.regioBack0 = new Image;
		this.IMAGES.regioBack0.src = 'assets-old/regio-back-0.png';
		this.IMAGES.regioLeft0 = new Image;
		this.IMAGES.regioLeft0.src = 'assets-old/regio-left-0.png';
		this.IMAGES.regioRight0 = new Image;
		this.IMAGES.regioRight0.src = 'assets-old/regio-right-0.png';
		this.IMAGES.regioFront0 = new Image;
		this.IMAGES.regioFront0.src = 'assets-old/regio-front-0.png';
		this.IMAGES.cargoBack0 = new Image;
		this.IMAGES.cargoBack0.src = 'assets-old/cargo-back.png';
		this.IMAGES.cargoLeft0 = new Image;
		this.IMAGES.cargoLeft0.src = 'assets-old/cargo-left.png';
		this.IMAGES.cargoRight0 = new Image;
		this.IMAGES.cargoRight0.src = 'assets-old/cargo-right.png';
		this.IMAGES.cargoFront0 = new Image;
		this.IMAGES.cargoFront0.src = 'assets-old/cargo-front.png';
		this.IMAGES.iceWhite = new Image;
		this.IMAGES.iceWhite.src = 'assets-old/ice-white.png';
		this.IMAGES.iceBlue = new Image;
		this.IMAGES.iceBlue.src = 'assets-old/ice-blue.png';
		this.IMAGES.iceGreen = new Image;
		this.IMAGES.iceGreen.src = 'assets-old/ice-green.png';
		this.IMAGES.iceOrange = new Image;
		this.IMAGES.iceOrange.src = 'assets-old/ice-orange.png';
		this.IMAGES.icePink = new Image;
		this.IMAGES.icePink.src = 'assets-old/ice-pink.png';
		this.IMAGES.iceEye = new Image;
		this.IMAGES.iceEye.src = 'assets-old/ice-eyes.png';
	}

};

//-----------------------------------------------------------------------
