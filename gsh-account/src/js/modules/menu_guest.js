
export default class MenuGuest {
	constructor(container) {
		this.container = container;
		const menuGuestClose = this.container.querySelector('.menu-guest__close');
		const menuToggler = document.querySelector('.navbar-toggler');

		menuGuestClose.addEventListener('click', () => this.closeMobile());
		menuToggler.addEventListener('click', () => this.showMobile());
	}

	showMobile() {
		this.container.classList.add('menu-guest--open');
	}

	closeMobile() {
		this.container.classList.remove('menu-guest--open');
	}
}