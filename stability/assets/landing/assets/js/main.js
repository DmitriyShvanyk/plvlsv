(function () {

    'use strict';

    // load fonts
    function loadFonts(href) {
        const head = document.querySelector('head');
        const link = document.createElement('link');
        link.rel = 'stylesheet'
        link.href = href;
        head.appendChild(link);
    }

    loadFonts('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap');


    // initNavbar
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = navbar.querySelector('.navbar__collapse');
    const navbarHamburger = navbar.querySelector('.navbar__hamburger');
    const navbarClose = navbar.querySelector('.navbar__close');
    let scrollY;

    function showNavbarCollapse() {
        navbarCollapse.classList.add('navbar__collapse--active');
    }

    function hideNavbarCollapse() {
        navbarCollapse.classList.remove('navbar__collapse--active');
    }

    function stickyNavbar() {
        scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

        if (scrollY > 0) {
            navbar.classList.add('navbar--bg');
        } else {
            navbar.classList.remove('navbar--bg');
        }
    }

    navbarHamburger.addEventListener('click', showNavbarCollapse);
    navbarClose.addEventListener('click', hideNavbarCollapse);   
    window.addEventListener('scroll', stickyNavbar);


})();