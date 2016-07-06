
/* Class Modal */

var Modal = (function () {

	/**
	 * Class Modal constructor
	 * @constructor
	 */
	function Modal(element) {

		this.element = element;

		if (this.element)
			this.init();

	}

	Modal.prototype.switch = function () {

		this.element.classList.toggle('is-shown');

	};

	Modal.prototype.addCloseListeners = function () {

		var self = this;
		try {
			this.element.firstElementChild.addEventListener('click', function () {
				self.switch();
			}, false);
		} catch (e) {
			document.attachEvent('onclick', self.switch);
		}

		/* test if keyup key is 'esc' and if there is some modal opened */
		try {
			document.addEventListener('keyup', function(e) {
				if (e.keyCode == 27) {
					if (self.element.classList.contains('is-shown'))
						self.switch();
				}
			});
		} catch (e) {
			document.attachEvent('onkeyup',  function(e) {
				if (e.keyCode == 27) {
					if (self.element.classList.contains('is-shown'))
						self.switch();
				}
			});
		}

	};

	Modal.prototype.init = function () {

		// temporaly null
		console.log('¡ arriba Hola amigo !');
		console.log('A iniciar todos os modals ora pois');
		this.addCloseListeners();

	};

	Modal.getModalByID = function (modal) {
		var modalElement = document.getElementById(modal);
		if (modalElement.modal)
			return modalElement.modal;
	};

	return Modal;

})();