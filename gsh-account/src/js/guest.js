import MenuGuest from '../js/modules/menu_guest'


// menu guest
const menuGuestElem = document.querySelector('.menu-guest');
new MenuGuest(menuGuestElem);


// footer current years
const footerYearsElem = document.querySelector('.footer__years');
const setCurrentYears = (el) => el.textContent = new Date().getFullYear();
setCurrentYears(footerYearsElem);