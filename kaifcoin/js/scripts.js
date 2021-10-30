;
(function () {

	"use strict";

	// preloader
	function preloadPage() {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, 3000);
		})
	}

	preloadPage()
		.then(() => {
			const preloader = document.querySelector('.preloader');
			const preloaderHidden = 'preloader--hidden';
			preloader.classList.add(preloaderHidden);
		}).catch(err => {
			return Promise.reject(`Ошибка: ${err.status}`)
		});


	// load fonst
	function loadFonst(href) {
		const head = document.querySelector('head');
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;
		head.appendChild(link)
	}
	loadFonst('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700&display=swap');


	// scroll anchor
	function scrollAnchor() {
		let anchorLinks = document.querySelectorAll('.js-scroll');

		for (let link of anchorLinks) {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				let hash = link.getAttribute('href');
				let target = document.querySelector(hash);
				if (target) {
					target.scrollIntoView({
						behavior: 'smooth',
						block: 'start'
					});
				}
				history.pushState(null, null, hash);
			});
		}
	}

	scrollAnchor();


	// initNavbar
	function initNavbar() {
		const body = document.querySelector('body');
		const navbar = document.querySelector('.navbar');
		const navbarHeight = navbar.offsetHeight;
		const navbarCollapse = navbar.querySelector('.navbar__collapse');
		const navbarHamburger = navbar.querySelector('.navbar__hamburger');
		const navbarClose = navbar.querySelector('.navbar__close');
		body.style.paddingTop = `${navbarHeight}px`;
		let scrollY;

		function stickyNavbar() {
			scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

			if (scrollY > 0) {
				body.classList.add('body--fixed');
				navbar.classList.add('navbar--fixed');
			} else {
				body.classList.remove('body--fixed');
				navbar.classList.remove('navbar--fixed');
			}
		}

		function showNavbarCollapse() {
			navbarCollapse.classList.add('navbar__collapse--active');
		}

		function hideNavbarCollapse() {
			navbarCollapse.classList.remove('navbar__collapse--active');
		}

		const menuLinks = document.querySelectorAll('.menu__link');
		menuLinks.forEach(el => el.addEventListener('click', () => {
			hideNavbarCollapse();
		}))

		window.addEventListener('scroll', stickyNavbar);
		navbarHamburger.addEventListener('click', showNavbarCollapse);
		navbarClose.addEventListener('click', hideNavbarCollapse);
	}

	initNavbar();


	// animation 
	new Rellax('.rellax', {
		speed: 0,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	});

})();