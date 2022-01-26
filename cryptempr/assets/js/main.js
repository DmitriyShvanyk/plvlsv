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

    function showNavbarCollapse() {
        navbarCollapse.classList.add('navbar__collapse--active');
    }

    function hideNavbarCollapse() {
        navbarCollapse.classList.remove('navbar__collapse--active');
    }

    navbarHamburger.addEventListener('click', showNavbarCollapse);
    navbarClose.addEventListener('click', hideNavbarCollapse);



    // init select
    function initSelect() {
        const selects = document.querySelectorAll('.js-choice');
        if (!selects) return;
        Array.from(selects).forEach(element => new Choices(element));
    }


    // init date
    function initDate() {
        const dates = document.querySelector('.js-date');
        if (!dates) return;

        flatpickr('#walletHistoryDateStart', {
            altInput: true,
            altFormat: "m-d-Y",
            plugins: [new rangePlugin({
                input: '#walletHistoryDateEnd'
            })]
        });
    }


    window.addEventListener('DOMContentLoaded', () => {
        initSelect();
        initDate();
    });


})();