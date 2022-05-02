;
(function () {

	"use strict";

	const form = document.querySelector('.quiz-start--form')
	const formControl = form.querySelector('.quiz-start__control')
	const formSubmit = form.querySelector('.quiz-start__btn')

	function disableButton() {
		const placeholderActive = formControl.getAttribute('placeholder');
		const placeholderLength = placeholderActive.length;

		if (formControl.value.length == placeholderLength ){
			formSubmit.disabled = false
		}
		else {
			formSubmit.disabled = true
		}
	}

	form.addEventListener('change', disableButton)

})();