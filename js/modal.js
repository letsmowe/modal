
/* Class Modal */

var Modal = (function () {

	/**
	 * Class Modal constructor
	 * @constructor
	 */
	function Modal() {

		var current;

		this.show = function (id) {

			var modal = document.getElementById(id);
			modal.classList.toggle('is-shown');
			this.current = modal;

		};

		this.hide = function () {

			this.current.classList.toggle('is-shown');
			this.current = false;

		};

		this.init();

	}

	Modal.prototype.addListeners = function () {

		var self = this;

		document.addEventListener('keyup', function(e) {

			if (self.current) {
				if (e.keyCode == 27) {
					self.hide();
				}
			}
			
		});

		var backdrops = document.querySelectorAll('div.Modal-backdrop');
		for (var i = 0; i < backdrops.length; i++) {

			backdrops[i].addEventListener('click', function () {

				self.hide();

			}, false);

		}

	};

	Modal.prototype.init = function () {

		this.addListeners();

	};

	return Modal;

})();