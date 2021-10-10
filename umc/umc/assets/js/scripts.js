; (function () {

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


	// navbar
	function setNavbar() {
		const navbar = document.querySelector('.navbar');
		const navbarHeight = navbar.offsetHeight;
		const navbarCollapse = document.querySelector('.navbar__collapse');
		const navbarHamburger = document.querySelector('.navbar__hamburger');
		const body = document.querySelector('body');
		body.style.paddingTop = `${navbarHeight}px`;
		let scrollY;

		if (window.innerWidth < 991) {
			navbarCollapse.style.paddingTop = `${navbarHeight}px`;
		}

		function stickyNavbar() {
			scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

			if (scrollY > 0) {
				navbar.classList.add('navbar--fixed');
			} else {
				navbar.classList.remove('navbar--fixed');
			}
		}

		function toggleNavbarCollapse() {
			navbarCollapse.classList.toggle('navbar__collapse--open');
			this.classList.toggle('navbar__hamburger--open');
		}

		function closeNavbarCollapse(e) {
			if (e.target.classList.contains('navbar__menu-link')) {
				navbarCollapse.classList.remove('navbar__collapse--open');
				navbarHamburger.classList.remove('navbar__hamburger--open');
			}
		}

		window.addEventListener('scroll', stickyNavbar);
		navbarHamburger.addEventListener('click', toggleNavbarCollapse);
		navbar.addEventListener('click', closeNavbarCollapse);
	}
	setNavbar();


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


	// videoModal
	class VideoModal {
		constructor({ selectorLink }) {
			this.link = document.querySelectorAll(selectorLink);
			this.link.forEach(item => {
				item.addEventListener('click', (e) => {
					e.preventDefault();
					this.create(item.href);
					this.open(e);
				});
			});
		}

		create(linkHref) {
			const modalVideo = document.createElement('div');
			const modalVideoOverlay = document.createElement('div');
			const modalVideoInner = document.createElement('div');
			const modalVideoContent = document.createElement('div');
			const modalVideoIframe = document.createElement('iframe');
			const modalVideoClose = document.createElement('button');

			modalVideo.classList.add('modal-video');
			modalVideoOverlay.classList.add('modal-video__overlay');

			modalVideoInner.classList.add('modal-video__inner');
			modalVideoContent.classList.add('modal-video__content');

			modalVideoIframe.classList.add('modal-video__iframe');
			modalVideoIframe.src = linkHref + '?autoplay=1&loop=1&autopause=0';
			modalVideoIframe.allow = 'autoplay; fullscreen';

			modalVideoClose.classList.add('modal-video__close');
			modalVideoClose.title = 'Close';

			modalVideo.appendChild(modalVideoOverlay);
			modalVideo.appendChild(modalVideoInner);
			modalVideoInner.appendChild(modalVideoContent);
			modalVideoContent.appendChild(modalVideoIframe);
			modalVideo.appendChild(modalVideoClose);
			document.body.appendChild(modalVideo);

			function removeModal() {
				document.body.removeChild(modalVideo);
			}

			function bodyOverflowYAuto() {
				document.body.style.overflowY = 'auto';
			}

			modalVideo.addEventListener('click', (e) => {
				const target = e.target;
				const overlay = target.classList.contains('modal-video__overlay');
				const close = target.classList.contains('modal-video__close');
				if (overlay || close) {
					removeModal();
					bodyOverflowYAuto();
				}
			});
		}

		open(e) {
			const target = e.target;
			if (target) {
				const modal = e.target.closest('body').querySelector('.modal-video');
				modal.classList.add('modal-video--open');
				document.body.style.overflowY = 'hidden';
			}
		}
	}

	document.addEventListener('DOMContentLoaded', () => {
		const videoModal = new VideoModal({
			selectorLink: '.js-video'
		});
	});


	// roadmap
	function roadMap() {

		const roadmapItems = document.querySelectorAll('.roadmap__item');
		const roadmapItem1 = document.querySelector('.roadmap__item--1');
		const roadmapItem2 = document.querySelector('.roadmap__item--2');
		const roadmapItem3 = document.querySelector('.roadmap__item--3');
		const roadmapItem4 = document.querySelector('.roadmap__item--4');
		const roadmapContents = document.querySelectorAll('.roadmap__content');
		const roadmapContent1 = document.querySelector('.roadmap__content--1');
		const roadmapContent2 = document.querySelector('.roadmap__content--2');
		const roadmapContent3 = document.querySelector('.roadmap__content--3');
		const roadmapContent4 = document.querySelector('.roadmap__content--4');

		function removeActiveCalssRoadmapItem() {
			roadmapItems.forEach(item => {
				item.classList.remove('roadmap__item--active');
			});
		}

		function removeActiveCalssRoadmapContent() {
			roadmapContents.forEach(item => {
				item.classList.remove('roadmap__content--active');
			});
		}

		function showRoadmapItem1() {
			removeActiveCalssRoadmapItem();
			removeActiveCalssRoadmapContent();
			this.classList.add('roadmap__item--active');
			roadmapContent1.classList.add('roadmap__content--active');
		}

		function showRoadmapItem2() {
			removeActiveCalssRoadmapItem();
			removeActiveCalssRoadmapContent();
			this.classList.add('roadmap__item--active');
			roadmapContent2.classList.add('roadmap__content--active');
		}

		function showRoadmapItem3() {
			removeActiveCalssRoadmapItem();
			removeActiveCalssRoadmapContent();
			this.classList.add('roadmap__item--active');
			roadmapContent3.classList.add('roadmap__content--active');
		}

		function showRoadmapItem4() {
			removeActiveCalssRoadmapItem();
			removeActiveCalssRoadmapContent();
			this.classList.add('roadmap__item--active');
			roadmapContent4.classList.add('roadmap__content--active');
		}

		roadmapItem1.addEventListener('click', showRoadmapItem1);
		roadmapItem2.addEventListener('click', showRoadmapItem2);
		roadmapItem3.addEventListener('click', showRoadmapItem3);
		roadmapItem4.addEventListener('click', showRoadmapItem4);
	}

	document.addEventListener('DOMContentLoaded', () => {

		// scroll anchor
		scrollAnchor();

		// parallax animation
		const rellax = new Rellax('.rellax', {
			horizontal: true
		});

		// roadmap
		roadMap();


		// otherness slider
		const othernessSliderThumbs = new Swiper('.otherness__slider-thumbs', {
			spaceBetween: 24,
			slidesPerView: 5,
			//loop: true,
			freeMode: true,
			loopedSlides: 5, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 24
				},
				767: {
					slidesPerView: 5,
					spaceBetween: 24
				},
				1200: {
					slidesPerView: 5,
					spaceBetween: 24
				},
			}
		});

		const othernessSliderTop = new Swiper('.otherness__slider-top', {
			//effect: 'fade',
			spaceBetween: 30,
			loop: true,
			loopedSlides: 5, //looped slides should be the same
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: othernessSliderThumbs,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		});


		// features slider
		const featuresSliderThumbs = new Swiper('.features__slider-thumbs', {
			spaceBetween: 24,
			slidesPerView: 3,
			//loop: true,
			freeMode: true,
			loopedSlides: 3, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10
				},
				640: {
					slidesPerView: 3,
					spaceBetween: 24
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 24
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 24
				},
			}
		});

		const featuresSliderTop = new Swiper('.features__slider-top', {
			//effect: 'fade',
			spaceBetween: 30,
			loop: true,
			loopedSlides: 3, //looped slides should be the same
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			thumbs: {
				swiper: featuresSliderThumbs,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			}
		});

		// market problems slider
		const marketProblemsSliderThumbs = new Swiper('.market-problems__slider-thumbs', {
			direction: 'vertical',
			spaceBetween: 10,
			slidesPerView: 6,
			loop: true,
			freeMode: true,
			loopedSlides: 6, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			breakpoints: {
				320: {
					slidesPerView: 6,
					spaceBetween: 5,
					direction: 'horizontal'
				},
				640: {
					slidesPerView: 6,
					spaceBetween: 5,
					direction: 'horizontal'
				},
				641: {
					slidesPerView: 6,
					spaceBetween: 10,
					direction: 'vertical'
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 10,
					direction: 'vertical'
				},
			}
		});

		const marketProblemsSliderTop = new Swiper('.market-problems__slider-top', {
			spaceBetween: 0,
			loop: true,
			loopedSlides: 6, //looped slides should be the same
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: marketProblemsSliderThumbs,
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			}
		});


		// partners slider
		const umsSwiper = new Swiper('.umc__slider', {
			slidesPerView: 1,
			spaceBetween: 0,
			direction: 'horizontal',
			preloadImages: false,
			lazy: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			}
		});

		// partners slider
		const partnersSwiper = new Swiper('.partners__slider', {
			slidesPerView: 6,
			spaceBetween: 20,
			direction: 'horizontal',
			preloadImages: false,
			lazy: true,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				767: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				991: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1200: {
					slidesPerView: 6,
					spaceBetween: 20
				}
			}
		});

	});


})();