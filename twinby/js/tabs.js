;
(function () {

	"use strict";


	function Tabs() {
		const bindAll = function () {
			var menuElements = document.querySelectorAll('[data-tab]');
			for (let i = 0; i < menuElements.length; i++) {
				menuElements[i].addEventListener('click', change, false);
			}
		}

		const clear = function () {
			var menuElements = document.querySelectorAll('[data-tab]');
			for (let i = 0; i < menuElements.length; i++) {
				menuElements[i].classList.remove('active');
				var id = menuElements[i].getAttribute('data-tab');
				document.getElementById(id).classList.remove('active');
			}
		}

		const change = function (e) {
			clear();
			e.preventDefault();
			e.target.classList.add('active');
			let id = e.currentTarget.getAttribute('data-tab');
			document.getElementById(id).classList.add('active');
		}

		bindAll();
	}

	if (window.matchMedia("(max-width: 767px)").matches) {
		const tabs = document.querySelector('.tabs')

		function toggleFaq(e) {
			const t = e.target
			if (t.matches('.tabs__title')) {
				t.closest('.tabs__block').classList.toggle('active')
			}
		}

		tabs.addEventListener('click', toggleFaq)
	}

	document.addEventListener('DOMContentLoaded', () => {
		new Tabs();
	});


})();