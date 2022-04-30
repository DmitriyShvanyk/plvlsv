;
(function () {

	"use strict";

	const formPhone = document.querySelector('.quiz-start--form')
	const formPhoneControl = formPhone.querySelector('.quiz-start__control')
	const formPhoneSubmit = formPhone.querySelector('.quiz-start__btn')

	function disableButton() {
		if (formPhoneControl.value.length > 8 ){
			formPhoneSubmit.disabled = false
		}
		else {
			formPhoneSubmit.disabled = true
		}
	}

	formPhone.addEventListener('change', disableButton)

})();