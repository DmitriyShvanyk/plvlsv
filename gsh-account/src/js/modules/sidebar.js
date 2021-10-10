
export default class Sidebar {
	constructor(container) {
		this.container = container;
		const sidebarToggler = this.container.querySelector('.sidebar__toggler');
		const sidebarLogo = this.container.querySelector('.sidebar__logo');
		const sidebarClose = this.container.querySelector('.sidebar__close');
		const navbarToggler = document.querySelector('.navbar-toggler');

		sidebarToggler.addEventListener('click', () => this.collapse());
		sidebarLogo.addEventListener('click', (e) => this.closeCollapse(e));
		sidebarClose.addEventListener('click', () => this.closeMobile());
		navbarToggler.addEventListener('click', () => this.showMobile());
	}
	collapse() {
		this.container.classList.add('sidebar--toggle');
		const content = document.querySelector('.content');
		content.classList.add('content--toggle');
	}
	closeCollapse(e) {
		e.preventDefault();
		this.container.classList.remove('sidebar--toggle');
		const content = document.querySelector('.content');
		content.classList.remove('content--toggle');
	}

	showMobile() {
		this.container.classList.add('sidebar--open');
	}

	closeMobile() {
		this.container.classList.remove('sidebar--open');
	}
}